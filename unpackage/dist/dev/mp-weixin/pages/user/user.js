"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_UserRow2 = common_vendor.resolveComponent("UserRow");
  (_easycom_uni_icons2 + _easycom_UserRow2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_UserRow = () => "../../components/UserRow/UserRow.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_UserRow)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "download",
          size: "20",
          color: "#28b389"
        }),
        c: common_vendor.p({
          type: "star",
          size: "20",
          color: "#28b389"
        }),
        d: common_vendor.p({
          type: "chat",
          size: "20",
          color: "#28b389"
        }),
        e: common_vendor.p({
          type: "notification",
          size: "20",
          color: "#28b389"
        }),
        f: common_vendor.p({
          type: "search",
          size: "20",
          color: "#28b389"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
