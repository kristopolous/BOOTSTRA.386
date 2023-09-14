---
layout: docs
title: Clearfix
description: Quickly and easily clear floated content within a container by adding a clearfix utility.
group: helpers
aliases: "/docs/5.3/helpers/"
---

Easily clear `float`s by adding `.clearfix` **to the parent element**. Can also be used as a mixin.

Use in HTML:

```html
<div class="clearfix">...</div>
```

The mixin source code:

{{< scss-docs name="clearfix" file="scss/mixins/_clearfix.scss" >}}

Use the mixin in SCSS:

```scss
.element {
  @include clearfix;
}
```

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.

{{< example >}}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>
{{< /example >}}
