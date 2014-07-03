$(function(){
  var 
    character = {
      height: 20,
      width: 12.4
    },
    wrap = document.body.appendChild(document.createElement('div')),
    bar = wrap.appendChild(document.createElement('div')),
    cursor = document.createElement('div'),
    pass = 0,
    height = $(window).height(),
    width = $(window).width(),

    // this makes the loading of the screen proportional to the real-estate of the window.
    // it helps keep the cool sequence there while not making it waste too much time.
    rounds = (height * width / 165000),
    column = width, row = height - character.height;
    // TODO: externalize this
  wrap.setAttribute('style', 'z-index:9999999;background:#000084;position:fixed;bottom:0;right:0;height:100%;width:100%');
  bar.setAttribute('style', 'color:#fff;font-weight:bold;float:right;background:#000084;height:20px;margin-top:-20px;width:100%');
  cursor.setAttribute('style', 'z-index:9999999;color:#fff;font-weight:bold;position:fixed;bottom:0;right:0');

  cursor.innerHTML = bar.innerHTML = '&#9604;';
  var ival = setInterval(function(){
    for(var m = 0; m < rounds; m++) {
      column -= character.width;

      if(column <= 0) {
        column = width;
        row -= character.height;
      }
      if(row <= 0) {
        pass++;
        row = height - character.height;

        if(pass == 2) {
          document.body.removeChild(cursor);
          clearInterval(ival);
        } else {
          wrap.parentNode.removeChild(wrap);
          document.body.appendChild(cursor);
          rounds /= 2;
          character.height *= 4;
        }
      }

      if(pass === 0) {
        bar.style.width = column + "px";
        wrap.style.height = row + "px";
      } else {
        cursor.style.right = column + "px";
        cursor.style.bottom = row + "px";
      }
    }
  }, 1);
});

