import base from "@reflexjs/preset-base";

export default {
  preset: base,

  colors: {
    primary: "#0070f3",
    primaryLight: "#68b5fb",
    primaryHover: "rgba(0,118,255,0.9)",
    secondary: "#000",
    secondaryHover: "transparent",
    black: "#000",
    mute: "#696969",
    lead: "#666666",
    border: "#999999",
    borderLight: "#eaeaea",
    footer: "#fafafa",
    footerLink: "#8c8c8c",
  },

  radii: {
    sm: 7,
  },

  shadows: {
    small: "0 5px 10px rgba(0,0,0,0.12)",
    medium: "0 8px 30px rgba(0,0,0,0.12)",
  },

  styles: {
    root: {
      fontFeatureSettings: "kern",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
    },

    a: {
      "&:hover": {
        textDecoration: "underline",
        color: "primaryLight",
      },
    },
  },

  container: {
    maxWidth: 1024,
  },

  a: {
    "&:hover": {
      textDecoration: "underline",
      color: "primaryLight",
    },
  },

  button: {
    fontSize: "md",
    borderRadius: 7,
    py: 0,
    px: 14,
    transition: "background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease",
    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
    color: "mute",
    lineHeight: "2.81rem",
    background: "white",
    borderColor: "white",

    "&:hover": {
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 6px 20px rgba(93,93,93,0.23)",
    },

    primary: {
      color: "white",
      background: "primary",
      boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
      borderColor: "primary",

      "&:hover, &:focus": {
        background: "primaryHover",
        boxShadow: "0 6px 20px rgba(0,118,255,0.23)",
      },
    },

    secondary: {
      color: "white",
      background: "secondary",
      boxShadow: "none",

      "&:hover, &:focus": {
        bg: "secondaryHover",
        borderColor: "secondary",
        color: "secondary",
      },
    },

    rainbow: {
      fontSize: "md",
      overflow: "hidden",
      color: "text",
      fontWeight: "medium",
      d: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderRadius: "sm",
      border: 0,
      bg: "background",
      boxShadow: "none",

      "&::before, &::after": {
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 9,
      },

      "&::before": {
        border: "5px solid transparent",
        borderImage:
          "linear-gradient(to bottom right, #EC6192 0%, #EC4C34 25%, #FFBD2B 50%, #57C754 75%, #53A1EB 100%)",
        borderImageSlice: 1,
      },

      "&::after": {
        borderWidth: "2px",
        borderColor: "background",
        borderStyle: "solid",
        borderRadius: "5px",
        top: "3px",
        right: "3px",
        left: "3px",
        bottom: "3px",
        zIndex: 10,
      },
    },

    sm: {
      fontSize: "md",
      borderRadius: 7,
      py: 1,
      px: 4,
      lineHeight: 1.65,
      transition: "background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease",
      fontWeight: "medium",

      "&:hover": {
        bg: "transparent",
        color: "primary",
      },
    },
  },

  input: {
    fontSize: "md",
    borderRadius: 7,
    py: 0,

    "&:focus": {
      borderColor: "black",
    },
  },
};
