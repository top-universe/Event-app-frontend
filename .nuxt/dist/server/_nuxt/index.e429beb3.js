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
const index_vue_vue_type_style_index_0_scoped_b5503d0c_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-b5503d0c><div data-v-b5503d0c><a target="_blank" href="https://www.figma.com/file/tkGj15F3w8BkMu76BV951C/Evently?t=n3dYqbtRWEqaPfoj-6" data-v-b5503d0c><strong data-v-b5503d0c>Figma Link</strong></a></div><div class="grid" data-v-b5503d0c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "landing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Landing</p></div>`);
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
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Login</p></div>`);
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
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Profile</p></div>`);
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
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Signup</p></div>`);
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
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Select Interest</p></div>`);
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
  _push(ssrRenderComponent(_component_NuxtLink, { to: "view-events" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>View Events</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "View Events")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "search-events" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-b5503d0c${_scopeId}><p data-v-b5503d0c${_scopeId}>Search Events</p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", null, "Search Events")
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b5503d0c"]]);
export {
  index as default
};
//# sourceMappingURL=index.e429beb3.js.map
