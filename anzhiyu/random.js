var posts=["2025/02/06/hello-world/","2025/02/05/感悟/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };