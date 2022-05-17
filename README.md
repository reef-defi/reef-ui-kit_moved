# Reef UI Kit

### Reef's UI library of components, assets and helpers.

Project includes Example view with all components and their usage. It also serves as an isolated development environment.

# Setup

## <a name="uik-setup">UI Kit Library</a>

1. Navigate to **ui-kit** folder
```
cd ui-kit
```

2. Install UI Kit dependencies
```
npm i
```

3. Build a production version of UI Kit
```
npm run build
```
Compiles and minifies a production version of UI Kit into `dist`.

## <a name="example-setup">Example</a>

1. Complete [UI Kit Library setup](#uik-setup).

2. Navigate to **ui-kit** folder
```
cd ui-kit
```

3. Create UI Kit dependency link
```
npm link
```

4. Navigate to **example** folder
```
cd example
```

5. Install Example dependencies
```
npm i
```

6. Install UI Kit dependency in Example
```
npm link @reef-defi/ui-kit
```

# Development

## Production version of UI Kit (Recommended)
1. Complete [UI Kit Library setup](#uik-setup) and [Example setup](#example-setup).

2. Navigate to **ui-kit** folder
```
cd ui-kit
```

3. Build and watch for changes
```
npm run watch
```

4. Open a new command line and navigate to **example** folder
```
cd example
```

5. Serve Example with hot reload
```
npm run dev
```

## Developemnt version of UI Kit (Faster)
1. Complete [UI Kit Library setup](#uik-setup) and [Example setup](#example-setup).

2. Open `package.json` in **ui-kit** folder

3. Replace `./main.js` with `./src/main.tsx`
```json
"exports": {
  ".": {
    "import": "./src/main.tsx" // "./main.js"
  }
}
```

3. Navigate to **example** folder
```
cd example
```

4. Serve Example with hot reload
```
npm run dev
```

# Use library in other projects

1. Complete [UI Kit Library setup](#uik-setup).

2. Import library from **ui-kit** folder.
```
.../reef-ui-kit/uik-kit
```