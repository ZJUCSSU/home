---
tags:
  - 2025
  - 通知
  - 实习
  - 社会实践
cards:
  - ddl: 2025-05-27
    title: “计路同行”暑假企业实习实践活动
    detail: 即日起至2025年5月27日23:59开始报名
    href:  http://cspo.zju.edu.cn/2025/0514/c27181a3049263/page.htm
    tags: [2025, 通知, 实习, 社会实践]
---

>[!NOTE]
> 标题左侧的点暗了就代表通知已经截止了哦~
>
> 如果进入后显示“404 - Not Found”，说明对应通知无链接~
{% for item in cards|sort(attribute='ddl', reverse=True)%}
<style>
.card {
  position: relative; /* 为箭头绝对定位提供参考 */
  display: flex;
  gap: 12px; /* 元素间间距 */
  padding: 16px;
  border: 1px solid #edd;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

/* 左侧圆点 */
.card .dot {
  width: 8px;
  height: 8px;
  background: #1890ff;
  border-radius: 50%;
  margin-top: 8px; /* 与标题对齐 */
}

.card .dot.expired {
  width: 8px;
  height: 8px;
  background: #c5c6c7;
  border-radius: 50%;
  margin-top: 8px; /* 与标题对齐 */
}
.card .deadline {
  color: #353535;
  font-size: 14px;
  transition: color 0.3s; /* 添加过渡效果 */
}

/* 主要内容区域 */
.card .snapshot {
  flex: 1; /* 占据剩余空间 */
  min-width: 0; /* 防止内容溢出 */
}

/* 标题样式 */
.card .title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

/* 文字容器 */
.card .detail {
  display: flex;
  flex-direction: column;
  height: 100%; /* 撑满父容器 */
  width:90%;

}

/* 文字主体 - 始终底部留空 */
.card .detail text {
  flex: 1; /* 自动扩展填充空间 */
  margin-bottom: 8px; /* 固定底部间距 */
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

/* 标签容器样式 */
.card .tags-container {
  display: flex;
  flex-wrap: wrap; /* 允许标签换行 */
  gap: 6px; /* 标签间的间距 */
  margin-top: 8px; /* 与上方的 detail 留出间距 */
}

/* 单个标签样式 */
.card .tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #555;
  background-color: #c5c0c0ff; /* 默认浅灰色背景 */
  border: 1px solid #ddd;
}

/* 添加特殊标签的颜色 */
.card .tag.紧急 {
  background-color: #ffcccc; /* 红色系背景 */
  border-color: #ff0000;
  color: #cc0000;
  font-weight: bold;
}

.card .tag.重要 {
  background-color: #e0f7fa; /* 浅青蓝色背景 */
  border-color: #00bcd4; /* 青蓝色边框 */
  color: #006064; /* 深青蓝色文字 */
  font-weight: bold;
}

.card .tag.长期有效 {
  background-color: #e8f5e9; /* 浅绿色背景 */
  border-color: #4caf50; /* 绿色边框 */
  color: #1b5e20; /* 深绿色文字 */
}

/* 右侧箭头定位 */
.card .details {
  position: absolute;
  right: 16px; /* 右侧固定距离 */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%);
}

.card .details img {
  width: 24px;
  height: 24px;
}
</style>
<div class='card'>
    <div class="dot"></div>
    <div class="snapshot">
        <div class="title">{{ item.title }}</div>
        <div class="deadline" data-deadline="{{ item.ddl }}"></div>
        <div class="detail">
            <text>{{ item.detail }}</text>
        </div>
        {% if item.tags %}
        <div class="tags-container">
            {% for tag in item.tags %}
                <span class="tag {{ tag }}">{{ tag }}</span>
            {% endfor %}
        </div>
        {% endif %}
        </div>
    </div>
    <a href="{{ item.href }}">
        <div class="details">
            <img src="../../index.assets/右、箭头右.png" alt="→">
        </div>
    </a>
</div>
{% endfor %}

