# deno + napi-rs reproduction

## Instructions

Reproducible with deno 1.29.1

```
cd minimal-napi
npm install
npm run build
cd ..
deno run -A --unstable index.js
```

Deno process will hang after the script is done.
