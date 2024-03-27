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
  },
  docsRepositoryBase: "https://github.com/darnocer/microdose-faq",
  footer: {
    text: "Microdosing.wiki",
  },
  useNextSeoProps() {
    const router = useRouter();
    if (router.asPath !== "/") {
      return {
        titleTemplate: "%s | Microdosing 101",
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
};

export default config;
