const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  exclude: ["./.next/server/pages/.obsidian"],
  standalone: true,
  nextConfig: {
    cssModules: true,
  },
});

module.exports = withNextra();
