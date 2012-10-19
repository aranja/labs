---
layout: page
title: Aranja Labs
tagline: Supporting tagline
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li><a href="{% if post.link %}{{ post.link }}{% else %}{{ BASE_PATH }}{{ post.url }}{% endif %}"><img src="{{ BASE_PATH }}{{ post.thumbnail }}" alt="{{ post.title }}" /><br />{{ post.title }}</a></li>
  {% endfor %}
</ul>



