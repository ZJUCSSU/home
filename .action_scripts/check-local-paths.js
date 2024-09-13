const fs = require('fs');
const glob = require('glob');
const path = require('path');

// 修改正则表达式，以匹配绝对路径或包含驱动器的路径
const pattern = /(?:[A-Z]:\\)/g;
const files = ['**/*.html', '**/*.js', '**/*.css'];

// 自定义跳过文件列表（使用相对路径）
const skipFiles = [
    'Tools/Fufu_Tools/minimum/index.html',
];

// 自定义跳过文件夹列表（使用相对路径）
const skipFolders = [
    'Tools/Fufu_Tools/wiki',
];

let foundPath = false; // 用于跟踪是否已经找到路径

files.forEach(globPattern => {
    const filePaths = glob.sync(globPattern, { nodir: true });
    filePaths.forEach(filePath => {
        // 获取相对路径，并标准化路径分隔符
        const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

        // 检查是否在跳过的文件夹中
        if (skipFolders.some(folder => relativePath.startsWith(folder.replace(/\\/g, '/')))) {
            return;
        }

        // 检查是否在跳过的文件列表中
        if (skipFiles.includes(relativePath)) {
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach(line => {
            let match;
            while ((match = pattern.exec(line)) !== null) {
                // 检测是否是绝对路径
                if (/^[A-Z]:\\/.test(match[0]) || /^\/[^\/:*?"<>|\r\n]/.test(match[0])) {
                    // 打印检测到的路径
                    console.error(`✕ 在 ${filePath} 检测到本地路径: ${match[0]}`);
                    foundPath = true;
                    return; // 找到路径后，跳过该文件的其他行
                }
            }
        });
    });
});

// 在所有文件处理完成后输出结果
if (foundPath) {
    process.exit(1); // 如果发现路径，退出并且有非零状态码
} else {
    console.log('✓ 所有文件检测完毕，未发现本地路径');
}
