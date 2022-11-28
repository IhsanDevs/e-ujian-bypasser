## Deskripsi

Simple javascript untuk bypass timer modal pada situs e-ujian.com.

## Cara Penggunaan

1. Buka situs e-ujian.com
2. Masuk ke halaman ujian
3. Ketikkan kode berikut pada search bar browser

```javascript
javascript:try { var modal = document.getElementsByClassName("stop_the_page")[0]; var modal2 = document.getElementsByClassName("blocking_the_page")[0]; modal.parentNode.removeChild(modal); modal2.parentNode.removeChild(modal2); } catch (error) { } alert("Bypassed by Ihsan Devs!");
```