---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.
group: content
toc: true
---

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.

<div class="bd-example">
  {% include icons/placeholder.svg width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" %}
</div>

{% highlight html %}
<img src="..." class="img-fluid" alt="Responsive image">
{% endhighlight %}

{% capture callout %}
##### SVG images and IE 10

In Internet Explorer 10, SVG images with `.img-fluid` are disproportionately sized. To fix this, add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so Bootstrap doesn't apply it automatically.
{% endcapture %}
{% include callout.html content=callout type="warning" %}

## Image thumbnails

In addition to our [border-radius utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/borders/), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera" %}
</div>

{% highlight html %}
<img src="..." alt="..." class="img-thumbnail">
{% endhighlight %}

## Aligning images

Align images with the [helper float classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float/) or [text alignment classes]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/text/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/#horizontal-centering).

<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="rounded float-left" %}
  {% include icons/placeholder.svg width="200" height="200" class="rounded float-right" %}
</div>

{% highlight html %}
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  {% include icons/placeholder.svg width="200" height="200" class="rounded mx-auto d-block" %}
</div>

{% highlight html %}
<img src="..." class="rounded mx-auto d-block" alt="...">
{% endhighlight %}

<div class="bd-example bd-example-images">
  <div class="text-center">
    {% include icons/placeholder.svg width="200" height="200" class="rounded" %}
  </div>
</div>

{% highlight html %}
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
{% endhighlight %}


## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

{% highlight html %}
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
{% endhighlight %}
