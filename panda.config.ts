import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        base: {
          100: { value: "white" },
          200: { value: "black" },
        },
      },
      fonts: {
        redaction: {
          clean: { value: "var(--font-redaction-clean)" },
          35: { value: "var(--font-redaction-35)" },
          50: { value: "var(--font-redaction-50)" },
          70: { value: "var(--font-redaction-70)" },
        },
      },
      fontSizes: {
        xs: { value: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)" },
        sm: { value: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)" },
        base: { value: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)" },
        md: { value: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)" },
        lg: { value: "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)" },
        xl: { value: "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)" },
        "2xl": { value: "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)" },
        "3xl": { value: "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)" },
      },
      fontWeights: {
        regular: { value: 400 },
        bold: { value: 700 },
      },
      spacing: {
        "3xs": { value: "clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)" },
        "2xs": { value: "clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)" },
        xs: { value: "clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)" },
        sm: { value: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)" },
        md: { value: "clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)" },
        lg: { value: "clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)" },
        xl: { value: "clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)" },
        "2xl": { value: "clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)" },
        "3xl": { value: "clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)" },
      },
      lineHeights: {
        none: { value: 1 },
        thight: { value: 1.15 },
        snug: { value: 1.33 },
        normal: { value: 1.5 },
      },
    },
  },

  globalCss: {
    ":root": {
      "--font-redaction-clean": '"Redaction", sans-serif',
      "--font-redaction-35": '"Redaction 35", sans-serif',
      "--font-redaction-50": '"Redaction 50", sans-serif',
      "--font-redaction-70": '"Redaction 70", sans-serif',
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
