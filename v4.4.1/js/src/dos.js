window._386 = window._386 || {options: {}};

const height = 16;
var character = { height: height, width: 8 },
    keyspace = 'hgdlaoybSru6x2vHsFvhoQ386';

_386.magicCursor = function() {
  if(!document.querySelector('.bootstra-cursor')) {
    let b = document.body;
    let d = b.appendChild(document.createElement('div'));
    let h = height - 2;

    b.classList.add('bootstra-enable-cursor');
    d.className = 'bootstra-cursor';

    b.onmousemove = function(e) {
      d.style.left = Math.floor( e.pageX / character.width) * character.width + 'px';
      d.style.top = Math.floor(e.pageY  / h) * h + 'px';
    }
  }
}

_386.scrollLock = function () {
  function ev(e) {
    document.body.style.paddingTop = _386.scrollLock.paddingStart + -(e.pageY % height) + "px";
  }

  if(_386.scrollLock.listener) {
    window.removeEventListener(_386.scrollLock.listener);
    _386.scrollLock.listener = false;
  } else {
    if(!('paddingStart' in _386.scrollLock)) {
      _386.scrollLock.paddingStart = parseInt(document.body.style.paddingTop, 10) || 0;
    }
    window.addEventListener('scroll', ev, true);
    _386.scrollLock.listener = ev;
  }
}

_386.centerNudger = function() {
  // this is likely inefficient - oh well.
  Array.from(document.querySelectorAll('*')).map(
    l => [Window.getComputedStyle(l), l]
  ).filter(row =>
    row[0].textAlign == 'center' &&
    row[0].display !== 'inline' &&
    !row[1].dataset[keyspace + 'nudge'] &&
    row[1].textContent.replace(/\s+/, ' ').length % 2 == 1
  ).forEach(row => {
    row.marginLeft = (parseInt(row[1].marginLeft) || 0) + character.width + 'px';
    // make sure we don't do this again.
    row[1].dataset[keyspace + 'nudge'] = 1;
  });
}


$(function () {
  'use strict';

  function loading () {

    if (window._386.fastLoad) {
      document.body.style.visibility = 'visible';
      return;
    }

    var
      onePass = window._386.onePass,
      speedFactor = 1 / (window._386.speedFactor || 1) * 165000,
      wrap = document.createElement('div'),
      bar = wrap.appendChild(document.createElement('div')),

      cursor = document.createElement('div'),
      // If the user specified that the visibility is hidden, then we
      // start at the first pass ... otherwise we just do the
      // cursor fly-by
      pass = ($(document.body).css('visibility') == 'visible') ? 1 : 0,
      height = $(window).height(),
      width = $(window).width(),

      // this makes the loading of the screen proportional to the real-estate of the window.
      // it helps keep the cool sequence there while not making it waste too much time.
      rounds = (height * width / speedFactor),
      column = width, row = height - character.height;

    wrap.id = 'wrap386';
    bar.id = 'bar386';
    cursor.id = 'cursor386';

    cursor.innerHTML = bar.innerHTML = '&#9604;';

    // only inject the wrap if the pass is 0
    if (pass === 0) {
      document.body.appendChild(wrap);
      document.body.style.visibility = 'visible';
    } else {
      document.body.appendChild(cursor);
      rounds /= 2;
      character.height *= 4;
    }

    var ival = setInterval(function () {
      for (var m = 0; m < rounds; m++) {
        column -= character.width;

        if (column <= 0) {
          column = width;
          row -= character.height;
        }
        if (row <= 0) {
          pass++;
          row = height - character.height;

          if (pass == 2) {
            document.body.removeChild(cursor);
            clearInterval(ival);
          } else {
            wrap.parentNode.removeChild(wrap);
            if (onePass) {
              clearInterval(ival);
            } else {
              document.body.appendChild(cursor);
              rounds /= 2;
              character.height *= 4;
            }
          }
        }

        if (pass === 0) {
          bar.style.width = column + 'px';
          wrap.style.height = row + 'px';
        } else {
          cursor.style.right = column + 'px';
          cursor.style.bottom = row + 'px';
        }
      }
    }, 1);
  }
  loading();
});

export default _386
