import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./Components/logo";
import Metadata from "./Components/metadata";
import TocCallout from "./Components/toccallout";

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
    return {
      titleTemplate: "Getting Started | Microdose Wiki",
    };
  },
  darkMode: false,
  head: <Metadata />,
  primaryHue: 288,
  primarySaturation: 87,
  search: {
    placeholder: "Search",
  },
  banner: {
    key: "welcome1",
    text: "🍄 Welcome to micodose.wiki!",
  },
  sidebar: {
    toggleButton: true,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <div style={{ fontWeight: "bold" }}>{title}</div>;
      }
      return <>✨ {title}</>;
    },
  },
  toc: {
    extraContent: <TocCallout />,
  },
  editLink: {
    text: "",
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
};

export default config;
