## Deskripsi

Simple javascript untuk bypass timer modal pada situs e-ujian.com.

## Cara Penggunaan

1. Buka situs e-ujian.com
2. Masuk ke halaman ujian
3. Ketikkan kode berikut pada search bar browser

```javascript
javascript:(function(){var script=document.createElement('script');script.src='https://raw.githubusercontent.com/IhsanDevs/e-ujian-bypasser/main/bypass.js';document.getElementsByTagName('head')[0].appendChild(script);script.onload=function(){bypass();}})();
```