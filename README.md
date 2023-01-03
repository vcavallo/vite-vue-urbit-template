# Vite/Vue3/Typescript/Tailwind/Urbit template

With typed Vuex store, CompositionAPI and `setup`-style script tags.

To install this elsewhere:

```
npx degit vcavallo/vite-vue-urbit-template#vue3-typed-store your-project-name
cd your-project-name

npm install
```

Then:

- Define a .env file, copied from env.example
  - Set the port based on your running fakeship
  - Set the desk name to the name of your desk
- Check out `src/components/Start.vue`
- There are some example actions, mutations, getters in `src/store/`
- Make sure to update `src/api/airlock.ts`'s `path` entry to match your desk's
implementation
- `npm run serve`
- Visit the URL that the vite server output shows (probably `localhost:3000`)
- Log in with your `+code`
