import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as _imports_0 } from './magnifyingglass.9354fe6e.mjs';
import { useSSRContext } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './Closecancel.f256e4d2.mjs';
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
  const _component_Navigation = __nuxt_component_0;
  const _component_CardResult = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3b2d3685>`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`<main class="main-container" data-v-3b2d3685><section class="header-section" data-v-3b2d3685><h1 class="main-text" data-v-3b2d3685>Search Events</h1><div class="input-container" data-v-3b2d3685><input type="text" name="" id="" placeholder="Search Events" data-v-3b2d3685><button data-v-3b2d3685><img class="search-icon"${ssrRenderAttr("src", _imports_0)} alt="search-icon" data-v-3b2d3685></button></div></section><section class="search-result" data-v-3b2d3685><ul class="filter-header" data-v-3b2d3685><p class="hide" data-v-3b2d3685>Filter Option</p><li class="filter bold" data-v-3b2d3685>All</li><li class="filter" data-v-3b2d3685>For you</li><li class="filter" data-v-3b2d3685>Online</li><li class="filter hide" data-v-3b2d3685>Today</li><li class="filter hide" data-v-3b2d3685>This weekend</li><li class="filter hide" data-v-3b2d3685>Free</li><li class="filter hide" data-v-3b2d3685>Music</li><li class="filter hide" data-v-3b2d3685>Food &amp; Drink</li><li class="filter hide" data-v-3b2d3685>Charity &amp; Causes</li><li class="filter" data-v-3b2d3685>more...</li></ul><div class="filter-result" data-v-3b2d3685><h2 class="result-header" data-v-3b2d3685>Based on your search</h2><div class="card-container" data-v-3b2d3685>`);
  _push(ssrRenderComponent(_component_CardResult, null, null, _parent));
  _push(`</div></div></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search-events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const searchEvents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3b2d3685"]]);

export { searchEvents as default };
//# sourceMappingURL=search-events.b07ff4f9.mjs.map
