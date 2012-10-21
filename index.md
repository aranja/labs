---
layout: page
title: aranja labs
---
{% include JB/setup %}
<div data-plugin="masonry:{itemSelector:'.shadowbox',columnWidth:50}">
  {% for post in site.posts %}
    <div class="experiment">
    	<a href="{% if post.link %}{{ post.link }}{% else %}{{ BASE_PATH }}{{ post.url }}{% endif %}">
    		<img src="{{ BASE_PATH }}{{ post.thumbnail }}" alt="{{ post.title }}" />
			<h3>{{ post.title }}</h3>
			<p>{{ post.tagline }} <em>{{ post.date | date: "%h&nbsp;%Y" }}.</em></p>
    	</a>
    </div>
  {% endfor %}
</div>

