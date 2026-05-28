import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const webback = "/assets/webback-AD5WqYlj.png";
function SceneBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: webback,
        alt: "",
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" })
  ] });
}
export {
  SceneBackground as default
};
