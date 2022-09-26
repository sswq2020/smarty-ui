import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "small"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  },
  loading: {
    type: Boolean,
    default: false
  }
};
const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm"
  },
  medium: {
    x: "3",
    y: "1",
    text: "base"
  },
  large: {
    x: "4",
    y: "2",
    text: "lg"
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
            py-${size[props2.size].y}
            px-${size[props2.size].x}
            font-semibold
            ${props2.round ? "rounded-full" : "rounded-lg"}
            bg-${props2.color}-${props2.plain ? "100" : "500"}
            hover:bg-${props2.color}-400
            border-${props2.color}-${props2.plain ? "400" : "500"}
            text-${props2.plain ? props2.color + "-500" : "white"}
            text-${size[props2.size].text}
            border-solid
            cursor-pointer
            m-1
            hover:text-white
            `
    }, [props2.loading ? createVNode("i", {
      "class": `i-carbon-circle-dash p-3`
    }, null) : "", props2.icon && !props2.loading ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SButton,
  SFCButton,
  entry as default
};
