// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false */

(() => {
  'use strict'

  // Insert copy to clipboard button before .highlight
  const btnHtml = [
    '<div class="bd-code-snippet">',
    '  <div class="bd-clipboard">',
    '    <button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button>',
    '  </div>',
    '</div>'
  ].join('')

  // Wrap programmatically code blocks and add copy btn.
  document.querySelectorAll('.highlight')
    .forEach(element => {
      // Ignore examples made by shortcode
      if (!element.closest('.bd-example-snippet')) {
        element.insertAdjacentHTML('beforebegin', btnHtml)
        element.previousElementSibling.append(element)
      }
    })

  const flash = (btn, text) => {
    const original = btn.textContent
    btn.textContent = text
    setTimeout(() => {
      btn.textContent = original
    }, 2000)
  }

  const clipboard = new ClipboardJS('.btn-clipboard', {
    target: trigger => trigger.closest('.bd-code-snippet').querySelector('.highlight'),
    text: trigger => trigger.closest('.bd-code-snippet').querySelector('.highlight').textContent.trimEnd()
  })

  clipboard.on('success', event => {
    event.clearSelection()
    flash(event.trigger, 'Copied!')
  })

  clipboard.on('error', event => {
    const modifierKey = /mac/i.test(navigator.userAgent) ? '⌘' : 'Ctrl-'
    flash(event.trigger, `Press ${modifierKey}C to copy`)
  })
})()
