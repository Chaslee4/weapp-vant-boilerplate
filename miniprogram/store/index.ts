export interface IGlobalData {
  count: string;
}

export function initGlobalData() {
  return {
    count: 1
  };
}

export default class StoreManager {
  // StoreManager instance
  private static _storeManager: StoreManager;

  private _app: IMiniApp;

  constructor(app?: IMiniApp) {
    this._app = app || getApp();
    if (!this._app) {
      throw "StoreManager Error: 获取app实例失败";
    }
  }

  public static getInstance(app?: IMiniApp): StoreManager {
    if (!this._storeManager) {
      this._storeManager = new StoreManager(app);
    }

    return this._storeManager;
  }

  public getter(key: keyof IGlobalData) {
    return this._app.globalData[key];
  }

  public setCount(count: IGlobalData["count"]) {
    this._app.globalData.count = count;
  }
}
