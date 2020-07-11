module.exports = {
  prefix: "trw-",
  // purge: [],
  purge: {
    enabled: true,
    mode: "all",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    options: {
      defaultExtractor: content => {
        const target = content.replace(/<style[^]+?<\/style>/gi, "");
        const broadMatches = target.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches =
          target.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          default: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
