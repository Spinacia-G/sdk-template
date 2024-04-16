import { defineComponent as s, ref as l, openBlock as r, createElementBlock as a, toDisplayString as o } from "vue";
const f = (e, n) => isNaN(Number(e)) || isNaN(Number(n)) ? (console.log("invalid input"), 0) : (console.log(e, n, e + n), e + n), p = /* @__PURE__ */ s({
  name: "ExampleComp",
  __name: "ExampleComp",
  props: {
    propName: { default: 0 }
  },
  setup(e) {
    const n = e, t = l("Res: ");
    return (c, i) => (r(), a("button", null, o(t.value) + o(n.propName), 1));
  }
}), m = (e) => (e.install = (n) => {
  const t = e.name;
  n.component(t, e);
}, e), u = m(p), x = {
  install: (e) => {
    e.use(u);
  }
};
export {
  u as ExampleComp,
  x as default,
  f as testSum
};
