---
title: Optimization Step 4
subtitle: Webp & picture
id: webp_picture
classes: overlay centered_block centered_content
image: palms.jpg
---

    <picture> 
        <source type="image/webp" 
                srcset="small.webp 320w, big.webp 768w">

        <img src="small.jpg" 
              srcset="small.jpg 320w, big.jpg 768w" alt="Image">
    </picture>