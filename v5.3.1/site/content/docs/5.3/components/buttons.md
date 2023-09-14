---
layout: docs
title: Buttons
description: Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
---

## Base class

Bootstrap has a base `.btn` class that sets up basic styles such as padding and content alignment. By default, `.btn` controls have a transparent border and background color, and lack any explicit focus and hover styles.

{{< example >}}
<button type="button" class="btn">Base class</button>
{{< /example >}}

The `.btn` class is intended to be used in conjunction with our button variants, or to serve as a basis for your own custom styles.

{{< callout warning >}}
If you are using the `.btn` class on its own, remember to at least define some explicit `:focus` and/or `:focus-visible` styles.
{{< /callout >}}

## Variants

Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Link</button>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{{< example >}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{< /example >}}

## Outline buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{{< example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /example >}}

{{< callout info >}}
Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.
{{< /callout >}}

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{{< example >}}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{{< /example >}}

{{< example >}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{< /example >}}

You can even roll your own custom sizing with CSS variables:

{{< example >}}
<button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  Custom button
</button>
{{< /example >}}

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>
{{< /example >}}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons.
- Disabled buttons using `<a>` should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.
- Disabled buttons using `<a>` *should not* include the `href` attribute.

{{< example >}}
<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
{{< /example >}}

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

{{< example >}}
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{{< /example >}}

## Block buttons

Create responsive stacks of full-width, "block buttons" like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.

{{< example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

{{< example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

{{< example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they're no longer stacked.

{{< example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
{{< /example >}}

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

{{< callout info >}}
Visually, these toggle buttons are identical to the [checkbox toggle buttons]({{< docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.
{{< /callout >}}

### Toggle states

Add `data-bs-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to ensure that it is conveyed appropriately to assistive technologies.

{{< example >}}
<p class="d-inline-flex gap-1">
  <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
<p class="d-inline-flex gap-1">
  <button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
{{< /example >}}

{{< example >}}
<p class="d-inline-flex gap-1">
  <a href="#" class="btn" role="button" data-bs-toggle="button">Toggle link</a>
  <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
</p>
<p class="d-inline-flex gap-1">
  <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
  <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
</p>
{{< /example >}}

### Methods

You can create a button instance with the button constructor, for example:

```js
const bsButton = new bootstrap.Button('#myButton')
```

{{< bs-table "table" >}}
| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated with a DOM element, you can use it like this: `bootstrap.Button.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a button instance associated with a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `bootstrap.Button.getOrCreateInstance(element)`. |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |
{{< /bs-table >}}

For example, to toggle all buttons

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Bootstrap's evolving CSS variables approach, buttons now use local CSS variables on `.btn` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="btn-css-vars" file="scss/_buttons.scss" >}}

Each `.btn-*` modifier class updates the appropriate CSS variables to minimize additional CSS rules with our `button-variant()`, `button-outline-variant()`, and `button-size()` mixins.

Here's an example of building a custom `.btn-*` modifier class as we do for the buttons unique to our docs by reassigning Bootstrap's CSS variables with a mixture of our own CSS and Sass variables.

<div class="bd-example">
  <button type="button" class="btn btn-bd-primary">Custom button</button>
</div>

{{< scss-docs name="btn-css-vars-example" file="site/assets/scss/_buttons.scss" >}}

### Sass variables

{{< scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### Sass mixins

There are three mixins for buttons: button and button outline variant mixins (both based on `$theme-colors`), plus a button size mixin.

{{< scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}}

### Sass loops

Button variants (for regular and outline buttons) use their respective mixins with our `$theme-colors` map to generate the modifier classes in `scss/_buttons.scss`.

{{< scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}
