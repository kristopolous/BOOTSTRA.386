$(function(){
  var 
    character = {
      height: 20,
      width: 12.4
    },
    wrap = document.body.appendChild(document.createElement('div')),
    bar = wrap.appendChild(document.createElement('div')),
    height = $(window).height(),
    width = $(window).width(),

    // this makes the loading of the screen proportional to the real-estate of the window.
    // it helps keep the cool sequence there while not making it waste too much time.
    rounds = (height * width / 175000),
    column = width, row = height - character.height;
  wrap.setAttribute('style', 'z-index:9999999;background:#000084;position:fixed;bottom:0;right:0;height:100%;width:100%');
  bar.setAttribute('style', 'color:#fff;font-weight:bold;float:right;background:#000084;height:20px;margin-top:-20px;width:100%');

  
  console.log(height * width);
  bar.innerHTML = '_';
  document.body.style.visibility = 'visible';
  var ival = setInterval(function(){
    //approx. 9600b
    for(var m = 0; m < rounds; m++) {
      column -= character.width;

      if(column <= 0) {
        column = width;
        row -= character.height;
      }
      if(row <= 0) {
        wrap.parentNode.removeChild(wrap);
        clearInterval(ival);
      }
      bar.style.width = column + "px";
      wrap.style.height = row + "px";
    }
  }, 1);
});

