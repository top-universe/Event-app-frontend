import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const index_vue_vue_type_style_index_0_scoped_8a98c478_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-8a98c478><div data-v-8a98c478><a target="_blank" href="https://www.figma.com/file/tkGj15F3w8BkMu76BV951C/Evently?t=n3dYqbtRWEqaPfoj-6" data-v-8a98c478><strong data-v-8a98c478>Figma Link</strong></a></div><div class="grid" data-v-8a98c478>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "landing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-8a98c478${_scopeId}><p data-v-8a98c478${_scopeId}>Landing</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Landing")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-8a98c478${_scopeId}><p data-v-8a98c478${_scopeId}>Login</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Login")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "profile" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-8a98c478${_scopeId}><p data-v-8a98c478${_scopeId}>Profile</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Profile")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "signup" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-8a98c478${_scopeId}><p data-v-8a98c478${_scopeId}>Signup</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Signup")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "interest" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-8a98c478${_scopeId}><p data-v-8a98c478${_scopeId}>Select Interest</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Select Interest")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8a98c478"]]);
export {
  index as default
};
//# sourceMappingURL=index.f9011819.js.map
