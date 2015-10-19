---
title: Font optimization
subtitle: Font loading
id: font_optimization_link
classes: overlay centered_content
image: palms.jpg
---

Don't load fonts with the `<link>` element, because it's slow on first view and it blocks rendering.

Instead use [Web Font Loader](https://github.com/typekit/webfontloader) or [Font Face Observer](https://github.com/bramstein/fontfaceobserver).