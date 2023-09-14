---
layout: docs
title: Visibility
description: Control the visibility, without modifying the display, of elements with visibility utilities.
group: utilities
---

Set the `visibility` of elements with our visibility utilities. These utility classes do not modify the `display` value at all and do not affect layout – `.invisible` elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.

Apply `.visible` or `.invisible` as needed.

{% highlight html %}
<div class="visible">...</div>
<div class="invisible">...</div>
{% endhighlight %}

{% highlight scss %}
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}

// Usage as a mixin
// Warning: The `invisible()` mixin has been deprecated as of v4.3.0. It will be removed entirely in v5.
.element {
  @include invisible(visible);
}
.element {
  @include invisible(hidden);
}
{% endhighlight %}
