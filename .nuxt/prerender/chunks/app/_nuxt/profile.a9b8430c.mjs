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
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-3c40bcfb><div class="side-img" data-v-3c40bcfb></div><div class="profile-form" data-v-3c40bcfb><h1 data-v-3c40bcfb>Let&#39;s get you started</h1><p data-v-3c40bcfb> You can reach us at anytime via <b data-v-3c40bcfb>hi@evently.com</b></p><form action="#" data-v-3c40bcfb><div class="form-input" data-v-3c40bcfb><label for="name" data-v-3c40bcfb>Name</label><input type="text" id="name" placeholder="Your name" data-v-3c40bcfb></div><div class="form-input" data-v-3c40bcfb><label for="email" data-v-3c40bcfb>Email</label><input type="email" id="email" placeholder="you@company.com" data-v-3c40bcfb></div><div class="form-input" data-v-3c40bcfb><label for="phone" data-v-3c40bcfb>Phone number</label><input type="number" id="phone" placeholder="+1 (555) 000-0000" data-v-3c40bcfb></div><div class="form-input" data-v-3c40bcfb><label for="message" data-v-3c40bcfb>How can we help you</label><textarea name="message" id="message" cols="30" rows="10" placeholder="Tell us little about the project" data-v-3c40bcfb></textarea></div><div class="form-input-check" data-v-3c40bcfb><label for="policy" data-v-3c40bcfb><input type="checkbox" id="policy" data-v-3c40bcfb> you agreed to our <a href="#" data-v-3c40bcfb>privacy and policy</a></label></div><div class="form-input" data-v-3c40bcfb><button class="primary-btn" data-v-3c40bcfb>Get Started</button></div></form></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c40bcfb"]]);

export { profile as default };
//# sourceMappingURL=profile.a9b8430c.mjs.map
