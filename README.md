# Simple Landing Page theme

[Lume](https://lume.land) theme to create a simple landing page.

## Install as a remote theme

The **fastest and easiest** way to use this theme is by importing it as a remote
module. It allows to create a landing page in seconds and update it at any time just by
changing the version number in the import URL. Just add the following code to
your `_config.ts` file:

```ts
import lume from "lume/mod.ts";
import landingPage from "https://cdn.jsdelivr.net/gh/C0BECTb/lume_theme_simple_landing_page@v0.1.0/mod.ts";

const site = lume();

site.use(landingPage ());

export default site;
```

Copy the [`index.yml`](./src/index.yml) file
to your landing page root folder and edit it with your data.

## Use it as a base template

To use this theme as a base template for a more customized site, clone this repo
or click the "Use this template" button on GitHub and edit the [_config.ts](./_config.ts) file.
The source files are in the [src](./src/) folder.

## Credits

Crafted with ♥️ by [Andreas](https://github.com/C0BECTb)

- Inspiration: [Durger King](https://t.me/DurgerKingBot) Telegram bot
- Emojis: [Apple Color Emoji](https://en.wikipedia.org/wiki/Apple_Color_Emoji)
- Color schemes: [One Dark](https://github.com/atom/one-dark-syntax) & [One Light](https://github.com/atom/one-light-syntax)
- Typography: [IBM Plex®](https://www.ibm.com/plex/)

[![Badge with text: Built with - Lume](<src/images/shields/Built with - Lume.svg>)](https://lume.land/) [![Badge with text: Using - Simple Landing Page theme](<src/images/shields/Using - Simple Landing Page theme.svg>)](https://github.com/C0BECTb/lume-theme-simple-landing-page/) [![Badge with text: Powered by - Deno](<src/images/shields/Powered by - Deno.svg>)](https://deno.com/) [![Badge with text: Runs on - GitHub Pages](<src/images/shields/Runs on - GitHub Pages.svg>)](https://pages.github.com/)
