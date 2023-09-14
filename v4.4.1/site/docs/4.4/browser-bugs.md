---
layout: docs
title: Wall of browser bugs
group: browser-bugs
redirect_from: "/browser-bugs/"
---

Bootstrap currently works around several outstanding browser bugs in major browsers to deliver the best cross-browser experience possible. Some bugs, like those listed below, cannot be solved by us.

We publicly list browser bugs that are impacting us here, in the hopes of expediting the process of fixing them. For information on Bootstrap's browser compatibility, [see our browser compatibility docs]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/browsers-devices/#supported-browsers).

See also:

* [Chromium issue 536263: [meta] Issues affecting Bootstrap](https://bugs.chromium.org/p/chromium/issues/detail?id=536263)
* [Mozilla bug 1230801: Fix the issues that affect Bootstrap](https://bugzilla.mozilla.org/show_bug.cgi?id=1230801)
* [WebKit bug 159753: [meta] Issues affecting Bootstrap](https://bugs.webkit.org/show_bug.cgi?id=159753)
* [jQuery's browser bug workarounds](https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o)

<table class="bd-browser-bugs table table-bordered table-hover">
  <thead>
    <tr>
      <th>Browser(s)</th>
      <th>Summary of bug</th>
      <th>Upstream bug(s)</th>
      <th>Bootstrap issue(s)</th>
    </tr>
  </thead>
  <tbody>
    {% for bug in site.data.browser-bugs %}
    <tr>
      <td>{{ bug.browser }}</td>
      <td>{{ bug.summary | markdownify }}</td>
      <td>{% include bugify.html content=bug.upstream_bug %}</td>
      <td>{% include bugify.html content=bug.origin %}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

# Most wanted features

There are several features specified in Web standards which would allow us to make Bootstrap more robust, elegant, or performant, but aren't yet implemented in certain browsers, thus preventing us from taking advantage of them.

We publicly list these "most wanted" feature requests here, in the hopes of expediting the process of getting them implemented.

<table class="bd-browser-bugs table table-bordered table-hover">
  <thead>
    <tr>
      <th>Browser(s)</th>
      <th>Summary of feature</th>
      <th>Upstream issue(s)</th>
      <th>Bootstrap issue(s)</th>
    </tr>
  </thead>
  <tbody>
    {% for feat in site.data.browser-features %}
    <tr>
      <td>{{ feat.browser }}</td>
      <td>{{ feat.summary | markdownify }}</td>
      <td>{% include bugify.html content=feat.upstream_bug %}</td>
      <td>{% include bugify.html content=feat.origin %}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
