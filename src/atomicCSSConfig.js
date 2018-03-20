const sizes = {
  "s-6": "8px",
  "s-5": "9px",
  "s-4": "11px",
  "s-3": "12px",
  "s-2": "13px",
  "s-1": "15px",
  s0: "16px",
  s1: "19px",
  s2: "21px",
  s3: "24px",
  s4: "28px",
  s5: "32px",
  s6: "48px",
  s7: "62px",
  s8: "80px",
  s9: "96px",
  "ns-6": "-8px",
  "ns-5": "-9px",
  "ns-4": "-11px",
  "ns-3": "-12px",
  "ns-2": "-13px",
  "ns-1": "-15px",
  ns0: "-16px",
  ns1: "-19px",
  ns2: "-21px",
  ns3: "-24px",
  ns4: "-28px",
  ns5: "-32px",
  ns6: "-48px",
  ns7: "-62px",
  ns8: "-80px",
  ns9: "-96px",
  i: "inherit"
};

const colors = {
  darkdd: "#071518",
  darkd: "#0f1b1e",
  dark: "#161f21",
  darkl: "#2f383b",
  darkll: "#495a5c",
  light: "#e0e9eb",
  lightl: "#fafbfb",
  lightll: "#ffffff",
  lightd: "#b4cacf",
  lightdd: "#7fa0a8",
  currentColor: "currentColor",
  r: "#f24432",
  rd: "#d2210f",
  rdd: "#a51101",
  rl: "#ff6958",
  rll: "#ff8d81"
};

module.exports = {
  cssDest: "./static/main.css",
  options: {
    namespace: "#___gatsby"
  },
  configs: {
    breakPoints: {
      xs: "@media(min-width:350px)",
      sm: "@media(min-width:700px)",
      md: "@media(min-width:1000px)",
      lg: "@media(min-width:1200px)"
    },
    custom: {
      ...sizes,
      ...colors,
      "inner-shadow": `inset 0 1px 0 0 ${colors.lightl}`,
      underline: `inset 0 -3px 0 0 ${colors.light}`,
      release: "calc(-50vw + 50%)",
      allColorFade:
        "border-color .4s ease-in-out, color .2s ease-in-out, background .2s ease-in-out",
      colorFade: "color .2s ease-in-out",
      BcolorFade: "border-color .2s ease-in-out",
      sans:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: "InputMonoNarrow ExLight, monospace; letter-spacing: -.075em"
    },
    classNames: []
  }
};
