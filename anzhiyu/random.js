var posts=["2025/02/06/开心/","2025/02/05/感悟/","2025/02/06/开心的/","2025/02/06/视频/","2025/02/06/html/","2025/02/06/千木图库/","2025/02/06/一言java/","2025/02/07/不容易/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };