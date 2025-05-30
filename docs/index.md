# <img src="https://zjucssu.github.io/home/index.assets/logo.png" alt="logo" style="zoom:67%;" /> 欢迎来到 ZJUCSSU 

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>弹窗示例 - 修复版</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* 弹窗样式 */
    #overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    #popup {
      background: white;
      width: 90%;
      max-width: 500px;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    @keyframes popIn {
      from {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    #popup h3 {
      color: #1a2a6c;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    
    #popup p {
      margin-bottom: 25px;
      font-size: 1.1rem;
      line-height: 1.7;
    }
    
    #popup button {
      padding: 12px 25px;
      background: linear-gradient(to right,rgb(180, 193, 243),rgb(250, 190, 241));
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      display: block;
      margin: 0 auto;
      width: 50%;
    }
    
    #popup button:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(215, 215, 215, 0.4);
    }
    
    @media (max-width: 768px) {
      h1 {
        font-size: 2.2rem;
      }
      
      .content {
        grid-template-columns: 1fr;
      }
      
      #popup {
        width: 95%;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <!-- 弹窗元素 -->
  <div id="overlay">
    <div id="popup">
      <h3>权益服务月火热进行中！</h3>
      <p>为时光匆匆而感慨？为前途规划而迷茫？想知道更多生活信息和学习秘籍？</p>
      <p>本次权益服务月，我们将为大家带来丰富多彩的权益服务，包括但不限于：专业解答、前途规划、校园生活、社团经验等。欢迎大家前来咨询和投稿！</p>
      <p>推文链接：<a href="https://mp.weixin.qq.com/s/t14IjqgTHLeWvERUHt2n0Q" target="_blank">https://mp.weixin.qq.com/s/t14IjqgTHLeWvERUHt2n0Q</a></p>
      <button id="closeBtn">关闭</button>
    </div>
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const overlay = document.getElementById('overlay');
      const popup = document.getElementById('popup');
      const closeBtn = document.getElementById('closeBtn');
      const closeX = document.querySelector('.close-btn');
      
      // 显示弹窗
      overlay.style.display = 'flex';
      popup.style.display = 'block';
      
      // 关闭弹窗函数
      function closePopup() {
        popup.style.animation = 'none';
        setTimeout(() => {
          popup.style.animation = '';
        }, 10);
        
        popup.style.transform = 'scale(0.9)';
        popup.style.opacity = '0';
        
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 300);
      }
      
      // 绑定关闭按钮事件
      closeBtn.addEventListener('click', closePopup);
    });
  </script>
</body>
</html>

这是一个由浙江大学计算机科学与技术学院学生会为服务全体计算机学院同学所搭建的网页

我们在这个网页中分设了四个分区：

## 每日通知

包括但不限于学生会活动、学院重要通知以及同学们分享的笔记或项目

## 意见反馈

作为同学与学院之间的窗口，可供同学们发表各种意见和提问，我们在看到后会及时回应

## 知识共享

我们会提供一些成熟的、经审核的资料供大家学习。比如课程相关笔记、经验；或者课外优质课程的链接与资源等
### 课程学习
- **笔记**：分享课程学习中的笔记，帮助同学们更好地理解和掌握知识点。
- **题库**：提供历年试题及练习题，供同学们练习和复习。
- **学习资料**：包括教材推荐、参考书目和额外的学习资源。

### 课外学习
- **笔记**：分享课外学习中的笔记，包括但不限于在线课程、研讨会和工作坊。
- **课程链接**：推荐优质的在线课程和学习平台，帮助同学们拓宽知识面。

我们鼓励同学们积极参与知识共享，共同营造一个互助互学的良好氛围。

## 资源分享

这是开放给同学们自由上传笔记和项目的分区，在经过我们审核后，大家的笔记和个人项目就会出现在这里了在这个分区，我们鼓励同学们**畅所欲言**，分享自己的知识和创意。所有提交的内容都将经过我们的审核，经审核通过的优秀笔记将被放入知识共享区。以下是资源分享的主要内容：

### 个人笔记
- 同学们可以在这里上传自己的学习笔记，无论是课堂讲义的整理，还是自学过程中的心得体会，来者不拒哦！
- 审核通过的笔记将被移动到[知识共享区](知识共享/课程笔记/)，并在那里为每个课程或主题提供详细的笔记页面。


### 个人项目分享
- 如果你在课程学习或个人研究中完成了有趣的项目，欢迎来这里展示你的成果。
- 每个项目将有一个专门的介绍页面，其中包含项目的概述、目标、使用的技术栈以及项目的亮点。
- 项目的介绍页面还将包括指向项目代码仓库的链接，以便其他同学可以访问和学习源代码。
- 我们会选择一些优秀的项目在[每日通知](每日通知/)中进行推送，来鼓励和展示同学们的创新和努力。






这个网站目前仍在建设中，有任何关于网站搭建的意见都可以通过发ISSUE或者任何可以联系到我们的方式告知，我们会努力为大家提供一个全面、丰富的平台，给同学们的学习生活带来便利
