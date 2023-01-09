import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'file:///Users/brain/Desktop/open%20source/evently/frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_1$1, a as _imports_2$1 } from './Closecancel.f256e4d2.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      navToggle: false,
      open: true,
      close: false
    };
  },
  methods: {
    menuClickOpen() {
      this.navToggle = true;
      this.open = false;
      this.close = true;
    },
    menuClickClose() {
      this.navToggle = false;
      this.open = true;
      this.close = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><nav class="nav-container" data-v-1e108e24><div class="nav-left" data-v-1e108e24><div class="nav-logo" data-v-1e108e24>Evently</div><div class="nav-section" data-v-1e108e24><a href="" class="nav-link-features" data-v-1e108e24>Features</a><a href="" class="nav-link-features" data-v-1e108e24>Pricing</a><a href="" class="nav-link-features" data-v-1e108e24>Automation</a></div></div><a href="#" style="${ssrRenderStyle($data.open ? null : { display: "none" })}" data-v-1e108e24><img${ssrRenderAttr("src", _imports_1$1)} alt="menu-icon" class="menu-icon-open" data-v-1e108e24></a><a href="#" style="${ssrRenderStyle($data.close ? null : { display: "none" })}" data-v-1e108e24><img${ssrRenderAttr("src", _imports_2$1)} alt="menu-icon" class="menu-icon-close" data-v-1e108e24></a><div class="nav-right" data-v-1e108e24><button class="btn-customer outline-btn" data-v-1e108e24>Customer Login</button><button class="btn-signup primary-btn" data-v-1e108e24>Sign up</button></div></nav><section style="${ssrRenderStyle($data.navToggle ? null : { display: "none" })}" class="mobile-nav-toggle" data-v-1e108e24><div class="mobile-nav-section" data-v-1e108e24><a href="" class="mobile-nav-link-features" data-v-1e108e24>Features</a><a href="" class="mobile-nav-link-features" data-v-1e108e24>Pricing</a><a href="" class="mobile-nav-link-features" data-v-1e108e24>Automation</a></div><div class="mobile-nav-right" data-v-1e108e24><button class="btn-customer outline-btn" data-v-1e108e24>Customer Login</button><button class="btn-signup primary-btn" data-v-1e108e24>Sign up</button></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1e108e24"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("Icon-play.36862ffa.svg");
const _imports_1 = "" + globalThis.__buildAssetsURL("Icon.f44cf61c.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("profile1.f7f3d2e0.png");
const _imports_3 = "" + globalThis.__buildAssetsURL("button-play1.015bbc6c.svg");
const _imports_4 = "" + globalThis.__buildAssetsURL("profile2.ab596a44.png");
const _imports_5 = "" + globalThis.__buildAssetsURL("profile3.95c774b1.png");
const _imports_6 = "" + globalThis.__buildAssetsURL("arrow-upright.c18bca58.svg");
const _imports_7 = "" + globalThis.__buildAssetsURL("support.9a1ade7e.svg");
const _imports_8 = "" + globalThis.__buildAssetsURL("sales.ba39f236.svg");
const _imports_9 = "" + globalThis.__buildAssetsURL("onboarding.31d431d4.svg");
const _imports_10 = "" + globalThis.__buildAssetsURL("product.ff550e81.svg");
const _imports_11 = "" + globalThis.__buildAssetsURL("quality.6cb12f58.svg");
const _imports_12 = "" + globalThis.__buildAssetsURL("result.b6af64c4.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-9cbdd4c3>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<section class="section-one" data-v-9cbdd4c3><p class="section-one-para text-one" data-v-9cbdd4c3> Smart email campaign builder, made for Developers </p><h1 class="section-one-header" data-v-9cbdd4c3> Turn your visitors into profitable <span data-v-9cbdd4c3>business</span></h1><div class="section-one-button" data-v-9cbdd4c3><button class="section-one-button-one primary-btn" data-v-9cbdd4c3> Get more customers </button><div class="button-two-container" data-v-9cbdd4c3><button class="section-one-button-two outline-btn" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_0)} alt="play-icon" class="play-icon outline" data-v-9cbdd4c3>Watch free demo </button></div></div><p class="section-one-para text-two" data-v-9cbdd4c3> 60 Days free trial . No credit card required </p><div class="section-one-mp4" data-v-9cbdd4c3><button class="play-button" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_1)} alt="play-icon" class="play-icon solid" data-v-9cbdd4c3></button></div></section><div class="review-section" data-v-9cbdd4c3><div class="review-section-header" data-v-9cbdd4c3><h2 data-v-9cbdd4c3>Over 1000+ people trust us</h2><p data-v-9cbdd4c3> Clarity gives you the Blocks &amp; components you need to create a truly professional website, landing page or admin panel for your SaaS </p></div><ul class="reviews" data-v-9cbdd4c3><li class="review" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_2)} alt="cust-image" class="review-top" data-v-9cbdd4c3><div class="bottom-float" data-v-9cbdd4c3><div class="customer-details" data-v-9cbdd4c3><div class="cust-name" data-v-9cbdd4c3>Albert Flores</div><div class="cust-post" data-v-9cbdd4c3>Founder of GearUp</div></div><button data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_3)} alt="pause" data-v-9cbdd4c3></button></div></li><li class="review" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_4)} alt="cust-image" class="review-top" data-v-9cbdd4c3><div class="bottom-float" data-v-9cbdd4c3><div class="customer-details" data-v-9cbdd4c3><div class="cust-name" data-v-9cbdd4c3>Leslie Alexander</div><div class="cust-post" data-v-9cbdd4c3>Co-Founder of Womenia</div></div><button data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_3)} alt="pause" data-v-9cbdd4c3></button></div></li><li class="review" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_5)} alt="cust-image" class="review-top" data-v-9cbdd4c3><div class="bottom-float" data-v-9cbdd4c3><div class="customer-details" data-v-9cbdd4c3><div class="cust-name" data-v-9cbdd4c3>Courtney Henry</div><div class="cust-post" data-v-9cbdd4c3>Founder of CH Beauty</div></div><button data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_3)} alt="pause" data-v-9cbdd4c3></button></div></li></ul><a href="#more-review" class="more-review" data-v-9cbdd4c3> See all reviews by our customers <img${ssrRenderAttr("src", _imports_6)} alt="" data-v-9cbdd4c3></a></div><div class="service" data-v-9cbdd4c3><div class="service-header" data-v-9cbdd4c3><h2 class="title" data-v-9cbdd4c3>Make every step user-centric</h2><p class="sub-title" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit </p></div><div class="service-box" data-v-9cbdd4c3><div class="support box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Support</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div><div class="sales box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Sales</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div><div class="onboarding box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Onboarding</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div><div class="product box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_10)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Product</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div><div class="quality box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_11)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Quailty</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div><div class="result box" data-v-9cbdd4c3><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-9cbdd4c3><h3 class="box-title" data-v-9cbdd4c3>Result</h3><p class="box-content" data-v-9cbdd4c3> Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet. </p></div></div></div><footer data-v-9cbdd4c3><div class="line" data-v-9cbdd4c3></div><div class="footer-down" data-v-9cbdd4c3> \xA9 Copyright 2023, All Rights Reserved by Evently </div></footer></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9cbdd4c3"]]);

export { landing as default };
//# sourceMappingURL=landing.78368820.mjs.map
