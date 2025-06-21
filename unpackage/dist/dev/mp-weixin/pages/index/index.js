"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const randomList = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const goPreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    const getBanner = async () => {
      let res = await common_vendor.index.request({
        url: "https://tea.qingnian8.com/api/bizhi/homeBanner",
        header: {
          "access-key": "773866"
        }
      });
      if (res.data.errCode === 0) {
        bannerList.value = res.data.data;
      }
    };
    const getDayRandom = async () => {
      let res = await common_vendor.index.request({
        url: "https://tea.qingnian8.com/api/bizhi/randomWall",
        header: {
          "access-key": "773866"
        }
      });
      if (res.data.errCode === 0) {
        common_vendor.index.__f__("log", "at pages/index/index.vue:114", res);
        randomList.value = res.data.data;
      }
    };
    const getNotice = async () => {
      let res = await common_vendor.index.request({
        url: "https://tea.qingnian8.com/api/bizhi/wallNewsList",
        header: {
          "access-key": "773866"
        },
        data: {
          select: true
        }
      });
      if (res.data.errCode === 0) {
        common_vendor.index.__f__("log", "at pages/index/index.vue:131", res);
        noticeList.value = res.data.data;
      }
    };
    getBanner();
    getDayRandom();
    getNotice();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        c: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        d: common_vendor.p({
          type: "right",
          size: "16"
        }),
        e: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        g: common_vendor.f(randomList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(goPreview, item._id)
          };
        }),
        h: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-7-" + i0
          };
        }),
        i: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
