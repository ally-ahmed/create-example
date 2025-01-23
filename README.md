## Create-Example

The repo is for recreating a bug with [create](https://github.com/JoshuaKGoldberg/create) where it is not detecting the `--from` and running like as if there is no config or preset
Current version of `create` is `0.2.0`

Issue link https://github.com/JoshuaKGoldberg/create/issues/161

### Steps

Install dependencies

```
pnpm install
```

Build

```
pnpm build
```

Run

```
pnpm dlx create --from .

```

or you can go into the dist folder run the above command

You may need to add a Github token to `.env` or you can try offline mode

```
pnpm dlx create --from . --offline
```

The output is the following and the preset doesn't run

```
┌  ✨ create ✨
│
│  Welcome to create: a delightful repository templating engine.
│
│  Learn more about create on:
│    https://create.bingo
│
│  Try it out with:
│    npx create typescript-app
│
└  Cheers! 💝
```
