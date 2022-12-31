import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./google-icon.c48bcf65.js";
import { _ as _export_sfc } from "../server.mjs";
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
const login_vue_vue_type_style_index_0_scoped_7eb66dc3_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "signup-container flex" }, _attrs))} data-v-7eb66dc3><section class="pic-side flex" data-v-7eb66dc3><div class="header" data-v-7eb66dc3><h2 class="header-title" data-v-7eb66dc3>Evently</h2></div><div class="signup-main" data-v-7eb66dc3><h2 class="header-title mobile" data-v-7eb66dc3>Evently</h2><div class="signup-header" data-v-7eb66dc3><h2 class="title" data-v-7eb66dc3>Welcome Back</h2><p class="subtitle" data-v-7eb66dc3> Welcome back. Enter your credentials to access your account </p></div><div class="signup-footer" data-v-7eb66dc3><div class="signup-button" data-v-7eb66dc3><button class="signup-btn flex" data-v-7eb66dc3><img${ssrRenderAttr("src", _imports_0)} alt="Google" data-v-7eb66dc3><p data-v-7eb66dc3>Google</p></button></div><p class="text" data-v-7eb66dc3> Don&#39;t have an Account? <a href="signup" data-v-7eb66dc3>Sign up here</a></p></div></div></section><section class="content-side" data-v-7eb66dc3></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7eb66dc3"]]);
export {
  login as default
};
//# sourceMappingURL=login.91185afe.js.map
