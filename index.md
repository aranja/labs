---
layout: page
title: aranja labs
---
{% include JB/setup %}
<div data-plugin="spinner">
  {% for post in site.posts %}
    <div class="experiment">
    	<a href="{% if post.link %}{{ post.link }}{% else %}{{ BASE_PATH }}{{ post.url }}{% endif %}">
    		<img src="{{ BASE_PATH }}{{ post.thumbnail }}" alt="{{ post.title }}" />
			<h3 class="title">{{ post.title }}</h3>
      <p><span class="date">{{ post.date | date: '<span class="month">%h</span><br/>%Y' }}</span>{{ post.tagline }}</p>
    	</a>
    </div>
  {% endfor %}
</div>

