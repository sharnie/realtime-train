$(document).on('page:change', function(){
  
  var canvas      = document.getElementById("canvas"),
      ctx         = canvas.getContext("2d");
  
  canvas.height   = $(window).height();
  canvas.width    = $(window).width();

  window.onresize = function(e){
    canvas.height = $(window).height();
    canvas.width  = $(window).width();
  };
  
  document.body.addEventListener("mousemove", function(e){
    var mx, my;
    if (e.pageX && e.pageY) {
      mx = e.pageX;
      my = e.pageY;
    }
    
    ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.arc(mx, my, 2, 0, Math.PI * 2, false)
    ctx.fill();
  
  });
  
  document.body.addEventListener("click", function(e){
    canvas.width = canvas.width;
  });

});