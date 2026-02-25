Tailwind CSS Installation (Vite + React)

1️⃣ Install Packages (Root Directory)
```bash
npm install tailwindcss @tailwindcss/vite
```

2️⃣ Update vite.config.js
```js
Import Tailwind plugin:
import tailwindcss from '@tailwindcss/vite'
```
Add it inside plugins:
```js
tailwindcss(),
```

Example:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```
3️⃣ Update index.css

```css
@import "tailwindcss";
```

4️⃣ Update index.html

Add inside the <head> tag:
```html
<link href="/src/style.css" rel="stylesheet">
```
