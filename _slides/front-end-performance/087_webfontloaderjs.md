---
title: Font optimization
subtitle: Web Font Loader
id: webfontloaderjs
classes: overlay centered_block centered_content
image: palms.jpg
---

    WebFontConfig = {
      google: {
        families: ['Droid Sans']
      },
      loading: function() {},
      active: function() {},
      inactive: function() {},
      fontloading: function(familyName, fvd) {},
      fontactive: function(familyName, fvd) {},
      fontinactive: function(familyName, fvd) {}
    };