/* @ds-bundle: {"format":3,"namespace":"ParzelloTechDesignSystem_bc0225","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"PostCanvas","sourcePath":"components/post/PostCanvas.jsx"},{"name":"PostFooter","sourcePath":"components/post/PostFooter.jsx"},{"name":"PostHeader","sourcePath":"components/post/PostHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"02a15c1679c8","components/core/GlassCard.jsx":"5cfe75e36bde","components/core/Logo.jsx":"3674f2e0fcf2","components/core/Pill.jsx":"c7ec868b9942","components/post/PostCanvas.jsx":"9d5b7c4fe907","components/post/PostFooter.jsx":"d221d94c23b2","components/post/PostHeader.jsx":"50c09c7acf5f","ui_kits/social-posts/slides.jsx":"4330949145cc","ui_kits/website/sections.jsx":"38e7ecf09cef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ParzelloTechDesignSystem_bc0225 = window.ParzelloTechDesignSystem_bc0225 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Category badge — the solid-tint, blurred label used to flag content type
 * ("TECH UPDATE", "NEW"). Heavier and more opaque than a Pill; smaller radius.
 */
function Badge({
  children,
  tone = "purple",
  size = "md",
  className = "",
  style = {}
}) {
  const sizes = {
    sm: {
      h: 40,
      px: 18,
      fs: 16,
      r: 14
    },
    md: {
      h: 52,
      px: 24,
      fs: 20,
      r: 18
    },
    lg: {
      h: 65,
      px: 28,
      fs: 28,
      r: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    purple: {
      background: "rgba(108,36,254,0.8)",
      color: "#fff"
    },
    magenta: {
      background: "var(--prz-magenta)",
      color: "#fff"
    },
    glass: {
      background: "rgba(255,255,255,0.06)",
      color: "#fff",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)"
    },
    ghost: {
      background: "transparent",
      color: "var(--prz-purple)",
      boxShadow: "inset 0 0 0 1.5px var(--prz-purple)"
    }
  };
  const t = tones[tone] || tones.purple;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: s.r,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      backdropFilter: "blur(40px)",
      WebkitBackdropFilter: "blur(40px)",
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
/**
 * Glass container — the signature frosted panel: faint fill, heavy backdrop
 * blur, large 74px radius, hairline stroke, and an optional bright "top-light"
 * bar across the upper edge.
 */
function GlassCard({
  children,
  topLight = "white",
  // "white" | "purple" | "none"
  radius = 74,
  blur = 90,
  padding = 48,
  className = "",
  style = {}
}) {
  const barColor = topLight === "purple" ? "rgba(108,36,254,0.5)" : topLight === "white" ? "rgba(255,255,255,0.5)" : null;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      borderRadius: radius,
      padding,
      background: "rgba(255,255,255,0.03)",
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
      overflow: "hidden",
      ...style
    }
  }, barColor && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: "13%",
      right: "13%",
      height: 8,
      borderRadius: "0 0 8px 8px",
      background: barColor
    }
  }), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/**
 * Parzello Tech logo. Renders the gradient mark, optionally with the
 * "ParzelloTech" wordmark lockup. The mark is a raster asset — pass `markSrc`
 * with the correct relative path to your copy of assets/parzello-mark.png.
 */
function Logo({
  variant = "lockup",
  size = 56,
  markSrc = "assets/parzello-mark.png",
  wordColor = "#ffffff",
  className = "",
  style = {}
}) {
  const mark = /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Parzello Tech",
    width: size,
    height: size,
    style: {
      display: "block",
      width: size,
      height: size,
      objectFit: "contain"
    }
  });
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: "inline-flex",
        ...style
      }
    }, mark);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.28,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: size * 0.62,
      lineHeight: 1,
      color: wordColor,
      letterSpacing: "-0.01em"
    }
  }, "Parzello", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, "Tech")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Parzello frosted capsule pill — the navigation / meta chip used across the
 * post system (IG handle, "Let's Swipe", page counters) and as a CTA.
 * Faint fill, heavy backdrop blur, hairline inset stroke, fully-rounded.
 */
function Pill({
  children,
  as = "div",
  size = "md",
  tone = "glass",
  className = "",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 40,
      px: 18,
      fs: 16
    },
    md: {
      h: 55,
      px: 24,
      fs: 23
    },
    lg: {
      h: 64,
      px: 30,
      fs: 26
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    glass: {
      background: "rgba(255,255,255,0.02)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)",
      color: "#fff",
      backdropFilter: "blur(60px)",
      WebkitBackdropFilter: "blur(60px)"
    },
    solid: {
      background: "var(--prz-gradient-purple)",
      color: "#fff",
      boxShadow: "none"
    },
    magenta: {
      background: "var(--prz-magenta)",
      color: "#fff",
      boxShadow: "none"
    }
  };
  const t = tones[tone] || tones.glass;
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 60,
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      cursor: as === "button" || as === "a" ? "pointer" : "default",
      border: "none",
      textDecoration: "none",
      transition: "transform var(--dur-fast, 140ms) var(--ease-brand, ease), filter var(--dur-fast, 140ms) ease",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/post/PostCanvas.jsx
try { (() => {
/**
 * Post canvas — the black 4:5 (1080×1350) or 9:16 (1080×1920) frame every
 * Parzello social asset is built on. Provides the black surface, an optional
 * aurora glow, and 70px-inset header / footer slots around the content.
 *
 * Designed at true canvas pixels; scale down with CSS transform for previews.
 */
function PostCanvas({
  width = 1080,
  height = 1350,
  aurora = true,
  margin = 70,
  header = null,
  footer = null,
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      width,
      height,
      background: "#000",
      overflow: "hidden",
      fontFamily: "var(--font-display)",
      color: "#fff",
      ...style
    }
  }, aurora && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(60% 50% at 50% 92%, rgba(108,36,254,0.55) 0%, rgba(43,16,108,0) 70%)",
      pointerEvents: "none"
    }
  }), header && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: margin,
      left: margin,
      right: margin
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: margin,
      right: margin,
      top: header ? margin + 80 : margin,
      bottom: footer ? margin + 80 : margin
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: margin,
      left: margin,
      right: margin
    }
  }, footer));
}
Object.assign(__ds_scope, { PostCanvas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostCanvas.jsx", error: String((e && e.message) || e) }); }

// components/post/PostFooter.jsx
try { (() => {
/**
 * Post footer — two frosted pills at the bottom of a carousel slide. Left is
 * usually the IG handle; right is a page counter or "Let's Swipe" prompt.
 */
function PostFooter({
  left = "IG | @parzello.tech",
  right = "Let’s Swipe",
  showLeft = true,
  showRight = true,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      ...style
    }
  }, showLeft ? /*#__PURE__*/React.createElement(__ds_scope.Pill, null, left) : /*#__PURE__*/React.createElement("span", null), showRight ? /*#__PURE__*/React.createElement(__ds_scope.Pill, null, right) : /*#__PURE__*/React.createElement("span", null));
}
Object.assign(__ds_scope, { PostFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostFooter.jsx", error: String((e && e.message) || e) }); }

// components/post/PostHeader.jsx
try { (() => {
/**
 * Post header — the brand lockup on the left, a light section label on the
 * right. Sits at the top of every carousel slide (70px inset on a 1080 canvas).
 */
function PostHeader({
  label = "Introduction",
  markSrc = "assets/parzello-mark.png",
  showLabel = true,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    size: 56,
    markSrc: markSrc
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1,
      color: "#fff"
    }
  }, label));
}
Object.assign(__ds_scope, { PostHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/post/PostHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social-posts/slides.jsx
try { (() => {
/* Parzello Tech — Social Post slides
   Each slide is a 1080x1350 (or 1080x1920) PostCanvas composing the DS
   primitives. Exposed on window for the carousel viewer in index.html. */
const {
  PostCanvas,
  PostHeader,
  PostFooter,
  GlassCard,
  Badge,
  Logo
} = window.ParzelloTechDesignSystem_bc0225;
const MARK = "../../assets/parzello-mark.png";

/* ---------- Slide 1 — Intro cover ---------- */
function IntroCover() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    width: 1080,
    height: 1350,
    header: /*#__PURE__*/React.createElement(PostHeader, {
      label: "Introduction",
      markSrc: MARK
    }),
    footer: /*#__PURE__*/React.createElement(PostFooter, {
      left: "IG | @parzello.tech",
      right: "Let\u2019s Swipe"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    topLight: "white",
    radius: 64,
    padding: 60,
    style: {
      minHeight: 430
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 96,
      lineHeight: 0.98,
      letterSpacing: "-0.02em"
    }
  }, "Who\u2019s Behind", /*#__PURE__*/React.createElement("br", null), "Parzello?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 35,
      marginTop: 44,
      color: "rgba(255,255,255,0.85)"
    }
  }, "Meet the faces turning ideas into reality."))));
}

/* ---------- Slide 2 — Profile (founder) ---------- */
function ProfileSlide() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    width: 1080,
    height: 1350,
    aurora: false,
    header: /*#__PURE__*/React.createElement(PostHeader, {
      label: "Introduction",
      markSrc: MARK
    }),
    footer: /*#__PURE__*/React.createElement(PostFooter, {
      left: "IG | @parzello.tech",
      right: "Page 2 / 6"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(48% 38% at 50% 42%, rgba(108,36,254,0.35) 0%, rgba(0,0,0,0) 72%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 8,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    topLight: "purple",
    radius: 74,
    padding: 48,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 600,
      borderRadius: 40,
      overflow: "hidden",
      background: "url(../../assets/team-kholis.png) 80% 18% / cover no-repeat",
      backgroundColor: "#e9e7e2"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 64,
      lineHeight: 1
    }
  }, "Muhammad Kholis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 35,
      marginTop: 16,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Founder / CEO")))));
}

/* ---------- Slide 3 — Tech info content ---------- */
function TechSlide() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    width: 1080,
    height: 1350,
    header: /*#__PURE__*/React.createElement(PostHeader, {
      label: "Tech Info",
      markSrc: MARK
    }),
    footer: /*#__PURE__*/React.createElement(PostFooter, {
      left: "IG | @parzello.tech",
      right: "Page 3 / 6"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 40
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple",
    size: "lg"
  }, "TECH UPDATE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 84,
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      marginTop: 40
    }
  }, "Powerful Apps.", /*#__PURE__*/React.createElement("br", null), "For Everyone."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 35,
      marginTop: 32,
      maxWidth: 760,
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.25
    }
  }, "Technology should be accessible. We build simple apps that empower your everyday life \u2014 intuitive, efficient, and relevant.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    topLight: "white",
    radius: 56,
    padding: 48
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap"
    }
  }, ["Flutter", "Next.js", "Supabase", "Firebase", "Figma"].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "glass",
    size: "md"
  }, t))))));
}

/* ---------- Slide 4 — End / Follow ---------- */
function EndSlide() {
  return /*#__PURE__*/React.createElement(PostCanvas, {
    width: 1080,
    height: 1350,
    aurora: false,
    header: /*#__PURE__*/React.createElement(PostHeader, {
      label: "Introduction",
      markSrc: MARK
    }),
    footer: /*#__PURE__*/React.createElement(PostFooter, {
      left: "Page 6 / 6",
      right: "Let\u2019s Swipe"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(40% 30% at 50% 34%, rgba(108,36,254,0.45) 0%, rgba(0,0,0,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 150,
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    size: 300,
    markSrc: MARK
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 96,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Follow for More"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 35,
      marginTop: 28,
      maxWidth: 780,
      color: "rgba(255,255,255,0.82)",
      lineHeight: 1.25
    }
  }, "Follow @parzello.tech for more stories, updates, and behind-the-scenes of our journey building digital solutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    size: "md"
  }, "https://parzello.my.id"), /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    size: "md"
  }, "@parzello.tech"))));
}

/* ---------- Reels frame (9:16) ---------- */
function ReelFrame() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1080,
      height: 1920,
      background: "#000",
      overflow: "hidden",
      fontFamily: "var(--font-display)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "url(../../assets/reels-bg-1.png) center / cover no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 960,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 134,
      right: 132,
      bottom: 360
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "purple",
    size: "lg"
  }, "TECH UPDATE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 70,
      lineHeight: 1.08,
      letterSpacing: "-0.01em",
      marginTop: 36
    }
  }, "Fitur Baru Adobe: Geser Cahaya di Foto Kamu!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 300,
      fontSize: 50,
      lineHeight: 1.2,
      marginTop: 36,
      color: "rgba(255,255,255,0.9)"
    }
  }, "Pencahayaan ulang tanpa ribet edit manual!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 135,
      right: 135,
      bottom: 240
    }
  }, /*#__PURE__*/React.createElement(PostFooter, {
    left: "IG | @parzello.tech",
    right: "Let\u2019s Swipe"
  })));
}
Object.assign(window, {
  IntroCover,
  ProfileSlide,
  TechSlide,
  EndSlide,
  ReelFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social-posts/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Parzello Tech — Website sections (on-brand recreation of parzello.my.id)
   Content lifted from the live site repo (content.tsx). Composes DS primitives. */
const {
  Pill,
  Badge,
  GlassCard,
  Logo
} = window.ParzelloTechDesignSystem_bc0225;
const {
  useState
} = React;
const MARK = "../../assets/parzello-mark.png";
const PROJECTS = [{
  name: "Ticzy",
  tag: "Productivity App",
  year: "2025",
  desc: "Daily productivity manager — To-Do, Finance Tracker & Journal with Supabase cloud sync and offline SQLite.",
  featured: true
}, {
  name: "E-Konsul",
  tag: "Web Platform",
  year: "2025",
  desc: "Digital consultation platform connecting students and lecturers at PNL, with real-time Firebase chat & scheduling."
}, {
  name: "Pentest Mobile",
  tag: "Mobile · Gov",
  year: "2026",
  desc: "Real-time monitoring of penetration-testing findings for the Aceh provincial cyber-security office."
}, {
  name: "Centrepoint",
  tag: "Mobile App",
  year: "2024",
  desc: "QR-code & geofencing attendance and organization management for UKM POLICY."
}];
const STACK = ["Flutter", "Next.js", "Dart", "PHP", "Python", "Firebase", "Supabase", "SQLite", "Figma"];
function Aurora() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(50% 40% at 80% 0%, rgba(108,36,254,0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(40% 30% at 10% 30%, rgba(251,4,176,0.12) 0%, rgba(0,0,0,0) 60%)"
    }
  });
}

/* ---------- Nav ---------- */
function Nav() {
  const links = ["Work", "About", "Blog", "Team"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      background: "rgba(5,5,5,0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    size: 34,
    markSrc: MARK
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "rgba(255,255,255,0.7)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement(Pill, {
    as: "a",
    href: "#",
    size: "sm",
    tone: "solid",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14
    }
  }, "Let\u2019s talk")));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      padding: "110px 40px 90px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Aurora, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1080,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    size: "sm",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--prz-magenta)",
      display: "inline-block"
    }
  }), "Startup & Digital Agency \xB7 Indonesia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 84,
      lineHeight: 0.98,
      letterSpacing: "-0.03em",
      margin: "30px 0 0"
    }
  }, "Digital Solutions for", /*#__PURE__*/React.createElement("br", null), "Your ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--prz-gradient-purple)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Business Growth")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: 21,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.7)",
      maxWidth: 620,
      margin: "28px auto 0"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff",
      fontWeight: 700
    }
  }, "Powerful Apps. For Everyone."), /*#__PURE__*/React.createElement("br", null), "Technology should be accessible. Simple apps that empower your everyday life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    as: "a",
    href: "#work",
    tone: "solid",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "View our work"), /*#__PURE__*/React.createElement(Pill, {
    as: "a",
    href: "#contact",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "Start a project")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 56,
      maxWidth: 720,
      marginInline: "auto"
    }
  }, STACK.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "glass",
    size: "sm"
  }, t)))));
}

/* ---------- Work ---------- */
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      position: "relative",
      padding: "80px 40px",
      maxWidth: 1180,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Selected Work",
    title: "Apps we\u2019ve shipped"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
      gap: 20,
      marginTop: 44
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.name
  }, p)))));
}
function ProjectCard({
  name,
  tag,
  year,
  desc,
  featured
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: 26,
      padding: 30,
      overflow: "hidden",
      background: featured ? "linear-gradient(160deg, rgba(108,36,254,0.18), rgba(255,255,255,0.03))" : "rgba(255,255,255,0.03)",
      boxShadow: hover ? "inset 0 0 0 1px rgba(138,56,245,0.6)" : "inset 0 0 0 1px rgba(255,255,255,0.08)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "all .25s var(--ease-brand)",
      gridColumn: featured ? "span 1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: featured ? "purple" : "glass",
    size: "sm"
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(255,255,255,0.4)"
    }
  }, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 30,
      margin: "22px 0 10px",
      color: "#fff"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.65)",
      margin: 0
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: hover ? "#fff" : "var(--prz-violet)"
    }
  }, "View case study \u2192"));
}

/* ---------- About + Team ---------- */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: "relative",
      padding: "70px 40px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Aurora, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1080,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 28,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    topLight: "purple",
    radius: 32,
    padding: 44
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Who we are",
    title: "Building digital solutions for modern life",
    small: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.72)",
      marginTop: 22
    }
  }, "Parzello Tech is a startup and digital agency focused on building intuitive, efficient, and relevant applications for modern life. We blend the agility of a startup with the reliability of professional service \u2014 shipping technology that is practical, scalable, and genuinely useful."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "8+",
    l: "Apps shipped"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4",
    l: "Years building"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "100%",
    l: "In-house"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 32,
      padding: 36,
      background: "rgba(255,255,255,0.03)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.4)"
    }
  }, "Meet the team"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: 24,
      margin: "24px 0 18px",
      background: "url(../../assets/team-kholis.png) 80% 16% / cover no-repeat #e9e7e2"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      color: "#fff"
    }
  }, "Muhammad Kholis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--prz-violet)",
      marginTop: 4
    }
  }, "Founder & Lead Developer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.6)",
      marginTop: 14
    }
  }, "Flutter & web developer passionate about building modern apps and creative technology.")))));
}
function Stat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 36,
      background: "var(--prz-gradient-purple)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(255,255,255,0.5)",
      marginTop: 4
    }
  }, l));
}

/* ---------- CTA + Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      padding: "40px 40px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      borderRadius: 40,
      overflow: "hidden",
      padding: "72px 48px",
      textAlign: "center",
      background: "linear-gradient(150deg, #2b106c 0%, #0a0118 55%, #000 100%)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(50% 80% at 50% 120%, rgba(108,36,254,0.6), rgba(0,0,0,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 52,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#fff"
    }
  }, "Let\u2019s build something", /*#__PURE__*/React.createElement("br", null), "powerful together."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      color: "rgba(255,255,255,0.7)",
      margin: "20px auto 32px",
      maxWidth: 480
    }
  }, "Get the latest on digital innovation and our solutions \u2014 or start your project today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    as: "a",
    href: "mailto:parzello.dev@gmail.com",
    tone: "solid",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "parzello.dev@gmail.com"), /*#__PURE__*/React.createElement(Pill, {
    as: "a",
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "@parzello.tech")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "36px auto 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    size: 30,
    markSrc: MARK
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "rgba(255,255,255,0.4)"
    }
  }, "\xA9 2026 Parzello Tech \xB7 parzello.my.id \xB7 Made in Aceh, Indonesia")));
}
function SectionHead({
  kicker,
  title,
  small
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--prz-violet)",
      fontWeight: 600
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: small ? 34 : 44,
      letterSpacing: "-0.02em",
      margin: "12px 0 0",
      color: "#fff"
    }
  }, title));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#050505",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Work, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.PostCanvas = __ds_scope.PostCanvas;

__ds_ns.PostFooter = __ds_scope.PostFooter;

__ds_ns.PostHeader = __ds_scope.PostHeader;

})();
