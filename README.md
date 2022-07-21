# Reef UI Kit

### Reef's UI library of components, assets and helpers

Project includes Example view with all components and their usage. It also serves as an isolated development environment.

## Setup

```
yarn
```

## Development

```
yarn dev
```

## Build

```
yarn build
```

## Build showcase page

```
yarn showcase
```

## Versioning

Push to master will trigger deploy as well as publish to npm registry. A new tag will be created with the version. See [here](https://github.com/mikeal/merge-release#workflow) for special commit messages that trigger version changes.


## Known issues

### Multiple copies of React

While UI Kit has it's own development environment, it can also be used as a local dependency while developing other projects. This situation may result in errors due to UI Kit having it's own copy of React.

To solve this issue:

1. Go to project's React package
```
cd node_modules/react
```

2. Create a link
```
yarn link
```

3. Go to project's UI Kit package
```
cd node_modules/@reef-defi/ui-kit
```

4. Link React
```
yarn link react
```

These steps might need to be repeated upon managing packages. The issue occurs only in development.