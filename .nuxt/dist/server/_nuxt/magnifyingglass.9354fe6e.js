import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_1$1, a as _imports_2$1 } from "./Closecancel.f256e4d2.js";
import { useSSRContext, computed, unref } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0$1 = "" + globalThis.__buildAssetsURL("logo.18350b4c.svg");
const _imports_3$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAizSURBVHgBpVhpbFTXFf7em80LNjbY7AYDZt+hFKhwWSxCg1ks/qAKigBVkVBpAshSpUhFAVWq1B+JSdQitUhI/MgP2kioraE0CINFIDFgJwa8gDHesPF4H3s8yxvP7f2OM67BMzYkR3qet9x373e+851zz7OBt7Sd+dZmNaB26tM1CioTMNKhkGAYhk8h7Dag6pQy7iqYhVcLHF+9zdzGmwzKO65SgmboA0Op4wpIef25aYQQVvZor9YZhvkvR9j28eUCow4/BgxBWGboN1AqfziIsNULr/sGHIYHwb56OJzJUIlrkZC+PvqUCq0w1dkrH7v++IPA5B33ZQZN2zU90fzh94O9VfA++RATkwG3242WlhZMmzYN4XAY7t40ZGV/Cte4WVHn1A7VuJRjWyyWzGg3dxwPrrQMW9kIIF0laP76VzBCnYiLi8OUKVPkfmtrK2w2G5IdTai8uhN9baWI4XlW0LCKc98PLH0jMARiGCgaoY1gMzrK8+Hp7oDX60VnZyf6+/sF1Nq1a5GVlQWHw4GEuAE8KToAf2cZYliGshnFuz8ILI8C9v8moTFs9/Rp2usDs+K/wLUvPoLdbpdFCSYpKQkHDx7EkiVL0Nvbi8ePH6O4uBgPHz5EXGIalu/6Era4aYhh3U7lWDU8ZK8wEzTMomhAXOE6eFuvizaWL18uC+tUxr59+7BmzRoBxWPixImYP38+0tLS4OlqRlPZHzCKpQSM4Ofv5KvEEWByT1inNFGZ0d7y1P4NL1++RCgUEn0EAgFs2LBBAFiWJUdfX5/cd7lcWLhwIeLj4+GuvQoVaEQsM2BsMJX13itgGB5dwPKjvqC8sDylaGtrk+uGhgZhaPHixQKGiyulBND48eMxffp0TJ06FYsWLUK/txtdDVcwmplhnGIJ4blUKsu0/V5nTlK0waHeJwgGvOjp6ZHQULwUbF1dHUpLS9Hd3Y05c+Zg3rx5qK2txZ07d0RTZIkZ1va8EBPmvYdRqoguqMHj+vcjAaM92xprsBmsHQLCUND7u3fvivezZ8/GixcvcOvWLdy4cQN+v3+ILdadcePGIeB5rL1tBRxTENOUcVDAvHvCtymWVmg97hIBk5GRIRk0MDAgIeCC5eXlMoYa8fl8aG9vl9rDUPKXGmP6W/52zdYoYIDZuSetn5l679gRG3EY/R3fwjRNTJo0STwPBoNykCmGa+nSpRKWI0eO4NChQxK2hIQECSeZoZYC/W6MZWGEs01DGT+NNWCgvxrB/lZMmDABlZWVwgoZoTFbqBV6v2zZMtkWGMaVK1di1apVAjQ5OXkw2/QcY5mpsM7+fRsQdYCy2sVT6oSpTaMwI+wUFRVh8uTJUuhqamoEGG3dunVobm4Wdqgdq79xTDCa6pVawEbMYPq7vpOKyw2R6UtPqQ0WPY/HI8Dmzp0rW8HMmTNFUzzoAI1jmFGhoAdjme6BnKwzrlgDbKEXQ5lBMGSDgqR2qBmyQhET3NGjR3Hu3DkcPnxYQJKViG6MsBdjm5qiwwSvDtK4kQ8HEOj+TsTpdDoFCCcnU/wlSLLE0p+YmIiysjI8ePAAFRUVAoYH9cJUD/Q1jA1FqVa7bhPbdahGgAlr8fZ53ENgaGSD+w/BEAgFzbTv6OgQ/fCaLKakpEia8z2+E/IzmxRG6+X0uG6m9vNoD4NdpcICveYCPLgpnjlzRgoeATA8PDiGdYhC5zm1QuP71Izf2w4V6sVopvepalMDLon20OYrEVbYr5AJ1pns7GxhJDc3VxYlEGYZM6mpqUlSu6urSzZTho/MMJyaG1i+Joxh9+2Gwn+Ugd8Nv2uGmmEEnku8Sffu3bslW1hvUlNTpb5UV1fj3r17Ao6ipsB58JyhocYEiDEYGkvvcc6kxTGR6Hev2P9d4Li546TVqa8mRB4k+AoR0NWXIBYsWCD1o6SkRAofN0IC2Lt3r4iVOuFz0Yb+JSAaGeU9Hqzg/s5vkDgtLzoQqOqrBa5vB/uZcPizyAMXWrDz58m4cOGCVFHWGGqA52ysWGtOnjyJWbNmyU4d8ZxGYN97KfcjApbdvuOhvh+ICsYw7J9IRPjHCWeBnlIq1S9z+rFnz27RAtlgEauvr8ejR4+kqrJtoCbIAkNHr7kYgfDgNYXLewTFa4rY53kOq/t+NCx1gYD5D57Y+Kfq69P+rPWnBmaktr1z4F2HVFDuPVyMmqGQCSJShekxC196err0vdQHwfHgwkxtvi+O6rE8QrrmxMXr9mJi9qshUvjwv5/Zi4eYGeTY/tftq+rvMyRMY3rJibnxRfYmLlBVVSWZwz6GoHft2iXC5oIRFmbMmCHnnCcCUIqku0g3Ar7h8blztcB5LnJpi5zUlJwOnHj/11/qFw/pyzh6GzFmCHsYLkiWnj59KowxvTdv3iyLEhwB8PnWrVslvJFQRXplu12XiqQMGPFzJTx2h+MX1V+dHipAr3wg6ya7Tn9mbNIT3NQepXJiTsI9iJNyUW6KvGaKX79+XQCyBmVmZgogMrFixQqpzI2NjcIeHSM7SakZcAbKYBnbmk0Vzvnnn5zNw9cf8RGne5NyXeQ2ahHWc8II3RQlJ+U3ETXBRZjeeXl5skWwyaLGCJI7+erVqyVcDM8gK/bBipw4vy3s79lU+El87etrR/28Xb9+fYVmYrPe7CqlU9ObHiknEAqYXwpchGCPHTuGs2fPSihzcnIEDIXNhothjNQbtqHxSRlF8a60tdf+Mqkm2rpRwdB0t1a3ZcuWxVrI+brINXKxSGPOvYnFsLCwkMCFvcuXL+PSpUsCgGNYn/ilSZa0A93aqd/arRXbPv9zTn2sNW0Yw86fP393z549l3SI2m/fvj1bA0qlLlj0GCpqieLeuHEjnj17JlWaYSQ7GnS5BvapZufAxYsXiysq/q5GW+uN/lk03DRbazQbudu3b/+JFniWDlGK1k26XrBFF0NLZ9oDHc5vdHN+c//+/Q/eZu7/ASWiqmTJHuoDAAAAAElFTkSuQmCC";
const Navigation_vue_vue_type_style_index_0_scoped_41f49eb6_lang = "";
const _sfc_main$2 = {
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-41f49eb6><header data-v-41f49eb6><div class="logo" data-v-41f49eb6><img${ssrRenderAttr("src", _imports_0$1)} alt="logo" data-v-41f49eb6><h1 data-v-41f49eb6>Evently</h1></div><nav data-v-41f49eb6><a href="#" style="${ssrRenderStyle($data.open ? null : { display: "none" })}" data-v-41f49eb6><img${ssrRenderAttr("src", _imports_1$1)} alt="menu-icon" class="menu-icon-open" data-v-41f49eb6></a><a href="#" style="${ssrRenderStyle($data.close ? null : { display: "none" })}" data-v-41f49eb6><img${ssrRenderAttr("src", _imports_2$1)} alt="menu-icon" class="menu-icon-close" data-v-41f49eb6></a><ul class="nav-links" data-v-41f49eb6><a href="#" data-v-41f49eb6><li class="link present" data-v-41f49eb6>Create an Event</li></a><a href="#" data-v-41f49eb6><li class="link" data-v-41f49eb6>Help</li></a><a href="#" data-v-41f49eb6><li class="link" data-v-41f49eb6>Pricing</li></a><a href="#" data-v-41f49eb6><li class="link" data-v-41f49eb6>Resources</li></a><a href="#" data-v-41f49eb6><li data-v-41f49eb6><img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-41f49eb6></li></a></ul></nav></header><section style="${ssrRenderStyle($data.navToggle ? null : { display: "none" })}" class="mobile-nav-toggle" data-v-41f49eb6><ul class="nav-links-mobile" data-v-41f49eb6><a href="#" data-v-41f49eb6><li class="link-mobile present" data-v-41f49eb6>Create an Event</li></a><a href="#" data-v-41f49eb6><li class="link-mobile" data-v-41f49eb6>Help</li></a><a href="#" data-v-41f49eb6><li class="link-mobile" data-v-41f49eb6>Pricing</li></a><a href="#" data-v-41f49eb6><li class="link-mobile" data-v-41f49eb6>Resources</li></a><a href="#" data-v-41f49eb6><li data-v-41f49eb6><img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-41f49eb6></li></a></ul></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-41f49eb6"]]);
const CardResult_vue_vue_type_style_index_0_scoped_eb352f2a_lang = "";
const _sfc_main$1 = {
  __name: "CardResult",
  __ssrInlineRender: true,
  setup(__props) {
    const generateImage = computed(() => {
      return "https://source.unsplash.com/random";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(6, (i, index) => {
        _push(`<div class="filter-card" data-v-eb352f2a><div class="card-image" data-v-eb352f2a><img${ssrRenderAttr("src", unref(generateImage))} alt="event-image" data-v-eb352f2a></div><div class="card-header" data-v-eb352f2a>Daily Grand Sprint</div><div class="card-body" data-v-eb352f2a> Lorem ipsum dolor sit amet consectetur. Mattis scelerisque aliquet vel libero </div><div class="card-footer" data-v-eb352f2a><div class="card-date" data-v-eb352f2a>14th Dec,2022</div><div class="card-category" data-v-eb352f2a>Sports</div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardResult.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb352f2a"]]);
const _imports_1 = "" + globalThis.__buildAssetsURL("Vectortwitter.91d313c4.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("Vectorlinkedin.628102c5.svg");
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIqSURBVHgBrVZNdtMwEJ6RxUveY+MjmBu0JyBZ8h5NyJJFQ7wqZtNygpIbpCvDygldsHRID9Byg9wA34C8B4tAZQ8jOzaGWnGC8y1sSSN93+hnRkKoQRCG9vqHPAIiBwgd3UaIK0Raeqcnd3Xj0WTwr286ArFPCY24ahu6rUDgnCxr7L18Fu0koD3+9d26JMAL2AeCJq3H8dgdDFZGAf9T6OC9dcvNDvwXMKJHVrc8GzwcebWILJqVDPjn7EAwRUw+J4DpUgggm5fzHAg6mZ0cVEpzdYsZ+B8XIwQM6qgJyPWGvem/7f5swaL46i83gN6eDXsTkVXgEmqB0ypyszOYcsoP14sXtDnfWwcgzcp1fYyRcq+TpxVDbN1HEoo+BxHUQskoLwZBaP8kCFl2Ex/V4aQdEEh0BHtinQWevUPXjmDn9xbYHWTLrWaCcV5u2+siQtucItYlGy/QOX+qZmTj+9nNN4MRXg9PjLmqjG0cgndiBQ3gB6FjIuf2pd6DL9AEUjpGG+ESs/MMt1ADiuUTz83yi/YaLfm1bkyCNBDppUHQaJmqgdGb0948SxWIYzgwCJKUMxU4Gz6f8IbcwaHAXHneEoWiUi5/I2gMvg+UdPNaIeC5g4jiuNtMhMljvmzcPzeaKJu1SCuOj3kBr2BfIFy14vvjMrnGg1ThuumlfcFHcQLCescHoA/bXhUEMxIwNz1hjLlIz4Z/I13WsfIgFyF020otNw4Z8RsxW+BI7KK2FgAAAABJRU5ErkJggg==";
const _imports_4 = "" + globalThis.__buildAssetsURL("Vectorwebpage.f53f0598.svg");
const Footer_vue_vue_type_style_index_0_scoped_cc66b9a9_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)} data-v-cc66b9a9><div class="company-and-links" data-v-cc66b9a9><div class="company-details" data-v-cc66b9a9><div class="logo" data-v-cc66b9a9><img${ssrRenderAttr("src", _imports_0$1)} alt="logo" data-v-cc66b9a9><h1 data-v-cc66b9a9>Evently</h1></div><div class="description" data-v-cc66b9a9> Design amazing digital experiences that create more happy in the world. </div></div><div class="web-links" data-v-cc66b9a9><div class="link-group" data-v-cc66b9a9><h3 data-v-cc66b9a9>Company</h3><ul class="link-list" data-v-cc66b9a9><li class="links" data-v-cc66b9a9><a href="#about" data-v-cc66b9a9>About Us</a></li><li class="links" data-v-cc66b9a9><a href="#career" data-v-cc66b9a9>Careers</a></li><li class="links" data-v-cc66b9a9><a href="#press" data-v-cc66b9a9>Press</a></li><li class="links" data-v-cc66b9a9><a href="#news" data-v-cc66b9a9>News</a></li></ul></div><div class="link-group" data-v-cc66b9a9><h3 data-v-cc66b9a9>Resources</h3><ul class="link-list" data-v-cc66b9a9><li class="links" data-v-cc66b9a9><a href="#blog" data-v-cc66b9a9>Blog</a></li><li class="links" data-v-cc66b9a9><a href="#career" data-v-cc66b9a9>Newsletter</a></li><li class="links" data-v-cc66b9a9><a href="#press" data-v-cc66b9a9>Events</a></li><li class="links" data-v-cc66b9a9><a href="#news" data-v-cc66b9a9>Help centre</a></li></ul></div><div class="link-group" data-v-cc66b9a9><h3 data-v-cc66b9a9>Socials</h3><ul class="link-list" data-v-cc66b9a9><li class="links" data-v-cc66b9a9><a href="#about" data-v-cc66b9a9>Twitter</a></li><li class="links" data-v-cc66b9a9><a href="#career" data-v-cc66b9a9>LinkedIn</a></li><li class="links" data-v-cc66b9a9><a href="#press" data-v-cc66b9a9>Facebook</a></li></ul></div><div class="link-group" data-v-cc66b9a9><h3 data-v-cc66b9a9>Legal</h3><ul class="link-list" data-v-cc66b9a9><li class="links" data-v-cc66b9a9><a href="#about" data-v-cc66b9a9>Terms</a></li><li class="links" data-v-cc66b9a9><a href="#career" data-v-cc66b9a9>Policy</a></li><li class="links" data-v-cc66b9a9><a href="#press" data-v-cc66b9a9>Cookies</a></li><li class="links" data-v-cc66b9a9><a href="#news" data-v-cc66b9a9>Licenses</a></li></ul></div></div></div><div class="foot" data-v-cc66b9a9><div class="copyright" data-v-cc66b9a9>\xA9 2023 Untitled UI. All rights reserved.</div><div class="social-icons" data-v-cc66b9a9><a href="#twitter" data-v-cc66b9a9><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-cc66b9a9></a><a href="#linkedin" data-v-cc66b9a9><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-cc66b9a9></a><a href="#facebook" data-v-cc66b9a9><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-cc66b9a9></a><a href="#webpage" data-v-cc66b9a9><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-cc66b9a9></a></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc66b9a9"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("magnifyingglass.704aec5d.svg");
export {
  _imports_0 as _,
  __nuxt_component_0 as a,
  __nuxt_component_1 as b,
  __nuxt_component_2 as c
};
//# sourceMappingURL=magnifyingglass.9354fe6e.js.map
