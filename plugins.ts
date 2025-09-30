import { merge } from "lume/core/utils/object.ts";
import basePath from "lume/plugins/base_path.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
import {
  googleFonts,
  Options as GoogleFontsOptions,
} from "lume/plugins/google_fonts.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import { sitemap, Options as SitemapOptions } from "lume/plugins/sitemap.ts";
import seo from "lume/plugins/seo.ts";
import {
  validateHtml,
  Options as validateHtmlOptions,
} from "lume/plugins/validate_html.ts";

import "lume/types.ts";

export interface Options {
  favicon?: Partial<FaviconOptions>;
  googleFonts?: GoogleFontsOptions;
  sitemap?: Partial<SitemapOptions>;
  validateHtml?: Partial<validateHtmlOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "/images/favicon.svg",
  },
  googleFonts: {
    fonts: {
      // IBM Plex Sans
      "font-sans":
        "https://fonts.google.com/share?selection.family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700",
      // IBM Plex Serif
      "font-serif":
        "https://fonts.google.com/share?selection.family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700",
      // IBM Plex Mono
      "font-mono":
        "https://fonts.google.com/share?selection.family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700",
    },
    cssFile: "master.css",
    subsets: ["cyrillic", "latin"],
  },
  sitemap: {
    items: {
      lastmod: "=lastmod",
    },
  },
  validateHtml: {
    // Blurhash-like without JS needs inline background
    // minify-html plugin omits boolean attribute values (crossorigin)
    rules: { "no-inline-style": "off", "attribute-empty-style": "off" },
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .add("fonts")
      .add("images")
      .add("master.css")
      .use(favicon(options.favicon))
      .use(googleFonts(options.googleFonts))
      .use(lightningcss())
      .use(basePath())
      .use(metas())
      .use(minifyHTML())
      .use(sitemap(options.sitemap))
      .use(seo())
      .use(validateHtml(options.validateHtml))
      .preprocess([".html"], (pages) => {
        for (const page of pages) {
          const info = page.src.entry?.getInfo();
          page.data.lastmod = info?.mtime;
        }
      });
  };
}
