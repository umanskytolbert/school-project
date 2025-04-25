// 项目基础信息
const projectName = "HelloWorld"; // 项目的名称

// 开发环境配置
const environment = process.env.NODE_ENV || 'development'; // 环境，开发时为'development'

// 配置文件
const configFilePath = './config.json'; // 配置文件路径

// 描述文本
const description = "这是HelloWorld项目的描述。"; // 项目描述

// 前端代码
const frontendCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${projectName}</title>
</head>
<body>
<h1>欢迎使用 ${projectName}!</h1>
<p id="description">${description}</p>
<button onclick="goHome()">返回首页</button>
</body>
</html>`;

// 创建HTML文档
const htmlDoc = document.getElementById('root'); // 获取根元素，此处为document.documentElement

// 添加前端代码到DOM中
htmlDoc.appendChild(frontendCode);

// 用于显示项目描述的div
const descriptionDiv = document.createElement('div');
descriptionDiv.textContent = `这是HelloWorld项目的描述：${description}`;
htmlDoc.appendChild(descriptionDiv);
