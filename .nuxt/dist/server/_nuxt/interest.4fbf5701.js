import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
const interest_vue_vue_type_style_index_0_scoped_1837dd96_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))} data-v-1837dd96><section data-v-1837dd96><div class="btn-container" data-v-1837dd96><button class="btn-skip" data-v-1837dd96>Skip</button></div><div class="header-section" data-v-1837dd96><h2 data-v-1837dd96>Select Your Interests</h2><p data-v-1837dd96>Select at most five (5) items</p></div><div class="check-group-container" data-v-1837dd96><label class="check-container container-one" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Sport</label></label><label class="check-container container-two" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Fitness</label></label><label class="check-container container-three" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Music</label></label><label class="check-container container-four" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Fashion</label></label><label class="check-container container-five" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Technology</label></label><label class="check-container container-six" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Food</label></label><label class="check-container container-seven" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Health</label></label><label class="check-container container-eight" data-v-1837dd96><input type="checkbox" name="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Business</label></label><label class="check-container container-nine" data-v-1837dd96><input type="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Art</label></label><label class="check-container container-ten" data-v-1837dd96><input type="checkbox" id="" data-v-1837dd96><span class="checkmark" data-v-1837dd96></span><label data-v-1837dd96>Spirituality</label></label></div><button class="primary-btn submit" data-v-1837dd96>Done</button></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/interest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1837dd96"]]);
export {
  interest as default
};
//# sourceMappingURL=interest.4fbf5701.js.map
