import { _ as _export_sfc, a as __nuxt_component_0$1 } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './google-icon.c48bcf65.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/hookable/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/unctx/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/ufo/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/h3/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/destr/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/scule/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/ohash/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/radix3/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "signup-container flex" }, _attrs))} data-v-da4edcaa><section class="pic-side flex" data-v-da4edcaa><div class="overlay" data-v-da4edcaa></div><div class="header" data-v-da4edcaa><h2 class="header-title" data-v-da4edcaa>Evently</h2></div><div class="signup-main" data-v-da4edcaa><h2 class="header-title mobile" data-v-da4edcaa>Evently</h2><div class="signup-header" data-v-da4edcaa><h2 class="title" data-v-da4edcaa>Sign Up</h2><p class="subtitle" data-v-da4edcaa> Create an account and start creating events today </p></div><div class="signup-footer" data-v-da4edcaa><div class="signup-button" data-v-da4edcaa><button class="signup-btn flex" data-v-da4edcaa><img${ssrRenderAttr("src", _imports_0)} alt="Google" data-v-da4edcaa><p data-v-da4edcaa>Google</p></button></div><p class="text" data-v-da4edcaa> Already have an Account? `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "login" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sign in`);
      } else {
        return [
          createTextVNode("Sign in")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></section><section class="content-side" data-v-da4edcaa></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da4edcaa"]]);

export { signup as default };
//# sourceMappingURL=signup.a8a73242.mjs.map
