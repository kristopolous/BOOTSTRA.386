/*!
 * BOOTSTRA/386 v5.3.1 (https://kristopolous.github.io/BOOTSTRA.386/)
 * The loading animation, the block cursor and a couple of helpers.
 *
 * Settings go in a global `_386` object declared before this script:
 *
 *   _386 = { fastLoad: false, onePass: false, speedFactor: 1.0 }
 *
 *   fastLoad     skip the animation entirely
 *   onePass      skip the second, cursor only, pass
 *   speedFactor  higher is faster
 *
 * For the full screen paint-in the page has to start out hidden:
 *
 *   <style>body { visibility: hidden }</style>
 *
 * Without that only the cursor fly-by runs.
 */
(function () {
  'use strict'

  var _386 = window._386 = window._386 || {}
  _386.options = _386.options || {}

  // One character cell. See $space-width and $line-height in the scss.
  var CELL = { width: 8, height: 14 }
  var keyspace = 'hgdlaoybSru6x2vHsFvhoQ386'

  // Replace the mouse pointer with a block cursor that snaps to the grid.
  _386.magicCursor = function () {
    if (document.querySelector('.bootstra-cursor')) {
      return
    }

    var body = document.body
    var cursor = body.appendChild(document.createElement('div'))

    body.classList.add('bootstra-enable-cursor')
    cursor.className = 'bootstra-cursor'

    body.addEventListener('mousemove', function (e) {
      cursor.style.left = Math.floor(e.pageX / CELL.width) * CELL.width + 'px'
      cursor.style.top = Math.floor(e.pageY / CELL.height) * CELL.height + 'px'
    })
  }

  // Keep the page scrolled in whole rows so text never sits between two
  // of them. Call it again to turn it off.
  _386.scrollLock = function () {
    var lock = _386.scrollLock

    function onScroll() {
      document.body.style.paddingTop = lock.paddingStart + -(window.scrollY % CELL.height) + 'px'
    }

    if (lock.listener) {
      window.removeEventListener('scroll', lock.listener, true)
      lock.listener = false
      document.body.style.paddingTop = lock.paddingStart + 'px'
    } else {
      if (!('paddingStart' in lock)) {
        lock.paddingStart = parseInt(document.body.style.paddingTop, 10) || 0
      }
      window.addEventListener('scroll', onScroll, true)
      lock.listener = onScroll
    }
  }

  // Centered text with an odd number of characters lands half a cell off
  // the grid. Nudge it over by one.
  _386.centerNudger = function () {
    Array.prototype.slice.call(document.querySelectorAll('*')).map(function (el) {
      return [window.getComputedStyle(el), el]
    }).filter(function (row) {
      return row[0].textAlign === 'center' &&
        row[0].display !== 'inline' &&
        !row[1].dataset[keyspace + 'nudge'] &&
        row[1].textContent.replace(/\s+/g, ' ').trim().length % 2 === 1
    }).forEach(function (row) {
      var el = row[1]
      el.style.marginLeft = (parseInt(row[0].marginLeft, 10) || 0) + CELL.width + 'px'
      // make sure we don't do this again.
      el.dataset[keyspace + 'nudge'] = 1
    })
  }

  // The loading animation: paint the page in from the bottom right the
  // way a slow video card would, then fly a cursor over it.
  function loading() {
    var body = document.body
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (_386.fastLoad || reduced) {
      body.style.visibility = 'visible'
      return
    }

    var onePass = _386.onePass
    var speedFactor = 1 / (_386.speedFactor || 1) * 165000
    var wrap = document.createElement('div')
    var bar = wrap.appendChild(document.createElement('div'))
    var cursor = document.createElement('div')
    var character = { height: CELL.height, width: CELL.width }

    // If the page started out hidden we do the full paint-in, otherwise
    // just the cursor fly-by.
    var pass = window.getComputedStyle(body).visibility === 'visible' ? 1 : 0
    var height = window.innerHeight
    var width = window.innerWidth

    // this makes the loading of the screen proportional to the real-estate of the window.
    // it helps keep the cool sequence there while not making it waste too much time.
    var rounds = height * width / speedFactor
    var column = width
    var row = height - character.height

    wrap.id = 'wrap386'
    bar.id = 'bar386'
    cursor.id = 'cursor386'

    cursor.innerHTML = bar.innerHTML = '&#9604;'

    // only inject the wrap if the pass is 0
    if (pass === 0) {
      body.appendChild(wrap)
      body.style.visibility = 'visible'
    } else {
      body.appendChild(cursor)
      rounds /= 2
      character.height *= 4
    }

    var ival = setInterval(function () {
      for (var m = 0; m < rounds; m++) {
        column -= character.width

        if (column <= 0) {
          column = width
          row -= character.height
        }

        if (row <= 0) {
          pass++
          row = height - character.height

          if (pass === 2) {
            if (cursor.parentNode) {
              body.removeChild(cursor)
            }
            clearInterval(ival)
          } else {
            if (wrap.parentNode) {
              wrap.parentNode.removeChild(wrap)
            }
            if (onePass) {
              clearInterval(ival)
            } else {
              body.appendChild(cursor)
              rounds /= 2
              character.height *= 4
            }
          }
        }

        if (pass === 0) {
          bar.style.width = column + 'px'
          wrap.style.height = row + 'px'
        } else {
          cursor.style.right = column + 'px'
          cursor.style.bottom = row + 'px'
        }
      }
    }, 1)
  }

  _386.loading = loading

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loading)
  } else {
    loading()
  }
})()
