import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./components/logo";
import Metadata from "./components/metadata";
import TocExtra from "./components/TocExtra";
// import EditLink from "./components/editlink";

import NewsletterSubscription from "./components/NewsletterSubscription";

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
  primaryHue: 193,
  primarySaturation: 100,
  search: {
    placeholder: "Search",
  },

  sidebar: {
    toggleButton: true,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <div style={{ fontWeight: "bold" }}>{title}</div>;
      }
      return <>🧿 {title}</>;
    },
  },
  toc: {
    extraContent: null,
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
