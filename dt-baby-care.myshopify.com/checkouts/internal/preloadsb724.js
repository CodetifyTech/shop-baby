
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.0395ed222b9a9bc47d14.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.baseline.en.919bf38859ae731c1e4e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7615.baseline.en.d33360bc0fbb60656f24.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.baseline.en.1bc59c356c867cc155a0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.69670318b3d5fb86379a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.baseline.en.2d4becc4565e87d9a9a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4979.baseline.en.2fb560fde5f15cdc761e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.baseline.en.604aeedc84b0b02109fd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4768.baseline.en.08eb861b5574e07c7a5f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2978.baseline.en.507078b63c868be47ded.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6117.baseline.en.63c58eabd48ce37df32f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3678.baseline.en.c00ae61a1ebe8e08c807.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8156.baseline.en.003e9eef168f7e67d65d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.94a6c5040f87908b8fed.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8163.baseline.en.61575ce093d354e3d63d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.c75a9d85fa4c461740f5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.83b6459c2e264547d80b.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  