---
title: Font optimization
subtitle: Web Font Observer
id: webfontobserverjs
classes: overlay centered_block centered_content
image: palms.jpg
---

    var fontA = new FontFaceObserver( "Cabin" );

    Promise
        .all([fontA.check()])
        .then(function(){
            document.documentElement.className += "fonts-loaded";
        });

        .fonts-loaded body {
            font-family: 'Cabin', sans-serif;
        }