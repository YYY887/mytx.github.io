var posts=["2025/02/06/开心/","2025/02/05/感悟/","2025/02/06/视频/","2025/02/06/html/","2025/02/06/千木图库/","2025/02/06/一言java/","2025/02/08/图床/","2025/02/07/安装图床/","2025/02/08/学习javaWeb/","2025/02/08/深情语录html/","2025/02/08/创建文章和上传自动化/","2025/02/08/mysql数据库与工具破解/","2025/02/08/新的项目登录系统/","2025/02/09/推荐一个图床/","2025/02/09/账号密码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };