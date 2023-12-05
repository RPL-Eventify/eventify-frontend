# Eventify Frontend

## Local Development

1. Install semua dependency

```shell
npm install
```

2. Isi file `.env` dengan informasi yang sesuai

```env
NEXT_PUBLIC_APP_API_URL=http://127.0.0.1:8000
```

3. Jalankan development server

```shell
npm run dev
```

## Note

1. Tambahkan properti berikut untuk protected route

```js
<Nama_Component>.requireAuth = true;
```

> Bisa liat contoh di folder `src/pages/test/protected.js`

2. Simpan semua URL Path yang diperlukan pada `src\routes\paths.js`
3. Uncomment style berikut untuk membantuk debugging

```css
/* For Debugging */
* {
    border: 1px solid red;
}
```

4. Bisa manfaatin component library FlowBite untuk React.

:link: <https://www.flowbite-react.com/>
