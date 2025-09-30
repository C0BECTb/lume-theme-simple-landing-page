import plugins, { Options } from "./plugins.ts";

import "lume/types.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_components/badges.vto",
      "_components/borderedBox.vto",
      "_components/cards.vto",
      "_components/catalog.vto",
      "_components/functions.vto",
      "_components/image.vto",
      "_components/linksBox.vto",
      "_components/picture.vto",
      "_components/posts.vto",
      "_components/price.vto",
      "_components/priceChangePercent.vto",
      "_includes/layouts/footer.vto",
      "_includes/layouts/header.vto",
      "_includes/layouts/inline.vto",
      "_includes/layouts/landing.vto",
      "_includes/layouts/master.vto",
      "_includes/styles/animation.css",
      "_includes/styles/border.css",
      "_includes/styles/color.css",
      "_includes/styles/common.css",
      "_includes/styles/font.css",
      "_includes/styles/footer.css",
      "_includes/styles/header.css",
      "_includes/styles/landing.css",
      "_includes/styles/reset.css",
      "_includes/styles/space.css",
      "_includes/styles/text.css",
      "images/card.png",
      "images/BurgerFries.svg",
      "images/BurgerFries.jxl",
      "images/BurgerFries.avif",
      "images/BurgerFries.webp",
      "images/favicon.svg",
      "images/products/Bento Box.svg",
      "images/products/Burger.svg",
      "images/products/Burrito.svg",
      "images/products/Cake.svg",
      "images/products/Coke.svg",
      "images/products/Cooked Rice.svg",
      "images/products/Cookie.svg",
      "images/products/Curry Rice.svg",
      "images/products/Dango.svg",
      "images/products/Donut.svg",
      "images/products/Dumpling.svg",
      "images/products/Falafel.svg",
      "images/products/Flan.svg",
      "images/products/Fondue.svg",
      "images/products/Fried Shrimp.svg",
      "images/products/Fries.svg",
      "images/products/Hotdog.svg",
      "images/products/Icecream.svg",
      "images/products/Oden.svg",
      "images/products/Pizza.svg",
      "images/products/Popcorn.svg",
      "images/products/Rice Ball.svg",
      "images/products/Rice Cracker.svg",
      "images/products/Sandwich.svg",
      "images/products/Spaghetti.svg",
      "images/products/Steaming Bowl.svg",
      "images/products/Stuffed Flatbread.svg",
      "images/products/Sushi.svg",
      "images/products/Taco.svg",
      "images/products/Tamale.svg",
      "images/shields/Built with - Lume.svg",
      "images/shields/Using - Simple Landing Page theme.svg",
      "images/shields/Powered by - Deno.svg",
      "images/shields/Runs on - GitHub Pages.svg",
      "images/shields/Runs on - GitLab Pages.svg",
      "images/shields/Runs on - Deno Deploy.svg",
      "images/shields/Runs on - Netlify.svg",
      "images/shields/Runs on - Vercel - black.svg",
      "images/shields/Runs on - Cloudflare Pages.svg",
      "images/shields/Runs on - Render - black.svg",
      "images/shields/Runs on - Kinsta.svg",
      "images/shields/Runs on - Clever Cloud.svg",
      "index.yml",
      "master.css",
    ];

    for (const file of files) {
      console.log(file, import.meta.resolve(`./src/${file}`));
      site.remote(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
