import { ssrRenderAttrs } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
  _push(`<div${ssrRenderAttrs(_attrs)}><h3>Login page</h3></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login.5efacc2f.mjs.map
