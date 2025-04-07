# Electron-Vite-React Starter

Finally, a starting point for an Electron App using Vite and React.

## How to use

First, clone this repository:

```
git clone https://github.com/gcmoony/electron-vite-react-starter.git
```

Then navigate to the project directory:

```
cd electron-vite-react-starter
npm install
```

Then run the app:
```
npm run start
```

To build the application (using Electron Forge):

```
npm run make
```

## Why

To save some time configuring Electron Forge with Vite and React. Currently,
Electron Forge doesn't have a guide for setting up this type of project. Some
things that needed to be done include:

- Using the [Forge + Vite template](https://www.electronforge.io/templates/vite)
- Installing React (19)
- Importing `Main.jsx` in `renderer.js`
- Installing `@vitejs/plugin-react` and adding the plugin into
  `vite.renderer.config.mjs`
