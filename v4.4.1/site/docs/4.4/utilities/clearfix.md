---
layout: docs
title: Clearfix
description: Quickly and easily clear floated content within a container by adding a clearfix utility.
group: utilities
---

Easily clear `float`s by adding `.clearfix` **to the parent element**. Can also be used as a mixin.

{% highlight html %}
<div class="clearfix">...</div>
{% endhighlight %}

{% highlight scss %}
// Mixin itself
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

// Usage as a mixin
.element {
  @include clearfix;
}
{% endhighlight %}

The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.

{% capture example %}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
</div>
{% endcapture %}
{% include example.html content=example %}
