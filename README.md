# Vite Typescript React 18 SSR

- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Typescript 5.4](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4/)
- [Vite with Vite SSR](https://vitejs.dev/guide/ssr.html)
- [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)

## Development

```
yarn
yarn dev:server
```

That should start the server. It will open to http://localhost:7456.

If you'd like to just develop the UI, you can use

```bash
yarn
yarn dev:client
```

To start the native vite client.

## Building

```
yarn build
yarn serve
```

yarn build will create the assets in `dist` - a `client` and `server` folder. Serve will run `dist/server.js` with Node, but feel free to change this to use Docker or some other process manager to suit your deployment needs.

## Files

`eslintrc` - a barebones eslint configuration for 2021, that extends off of the recommended ESLint config and prettier

`.prettierrc` - the prettier config

`index.html` - the vite entrypoint, that includes the entry point for the client

`postcss.config.cjs` - CommonJS module that defines the PostCSS config

`server.ts` - The barebones Express server with logic for SSRing Vite pages

`tsconfig.json` - TypeScript configuration

`vite.config.ts` - Vite configuration