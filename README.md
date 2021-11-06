# Retro

Early days. Does things, maybe.

![react](./assets/react.png) ![redux](./assets/redux.png) ![firebase](./assets/firebase.png)

## Running

This uses Firebase and requires that an app be added and configured
appropriately, the console for it has all of the information necessary to set
one up. For Google authentication to work the provider for it needs to be added
to the app's configuration.

Once an app has been generated the configuration values need to be entered into
the `.env.development` file, a new file `.env.development.local` can also be
created and used instead.

```shell
yarn install
yarn start
```

The address http://localhost:1234 can be used to access the running app.
