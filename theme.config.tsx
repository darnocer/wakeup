import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./components/logo";
import Metadata from "./components/metadata";
import TocCallout from "./components/toccallout";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/darnocer/microdose-faq",
    icon: null,
  },
  docsRepositoryBase: "https://github.com/darnocer/microdose-faq",
  useNextSeoProps() {
    const router = useRouter();
    if (router.asPath !== "/") {
      return {
        titleTemplate: "%s | Microdose Wiki",
      };
    }
    return {};
  },
  head: <Metadata />,
  primaryHue: 281,
  primarySaturation: 90,
  search: {
    placeholder: "Search",
  },
  banner: {
    key: "welcome1",
    text: "🍄 Welcome to micodose.wiki!",
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    extraContent: <TocCallout />,
  },
  editLink: {
    text: "",
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
};

export default config;
