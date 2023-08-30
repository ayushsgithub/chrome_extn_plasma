This is a [Plasmo Framework](https://docs.plasmo.com/) chrome extension project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

You can check the video demonstration on Youtube ⬇️
https://youtu.be/eQCQDA9nhGE

## Getting Started

Fork this repo

Clone it to your local environment ⬇️

https://github.com/ayushsgithub/chrome_extn_plasma.git

Open it in your editor of choice

```bash
cd chrome-extension
```

Get token from ipinfo.io

Make sure to add it in your `.env` file

And if you want to contribute in this project, you're welcome and it will be so awesome if you show your support for this project.

To run the development server ⬇️

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
