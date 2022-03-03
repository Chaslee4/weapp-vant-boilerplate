interface IMiniAppOption {
  globalData: any;
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

type IMiniApp = WechatMiniprogram.App.Instance<IMiniAppOption>;
