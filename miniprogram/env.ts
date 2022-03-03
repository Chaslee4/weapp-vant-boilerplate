export enum ENVType {
  /** 开发版 */
  develop = "develop",
  /** 体验版 */
  trial = "trial",
  /** 正式版 */
  release = "release"
}

const DEFAULT_ENV: ENVType = ENVType.release;

const ENV = {
  [ENVType.develop]: {
    BASE_URL: "DEV_URL"
  },
  [ENVType.trial]: {
    BASE_URL: "TEST_URL"
  },
  [ENVType.release]: {
    BASE_URL: "PROD_URL"
  }
};

export function getBaseUrl(): string {
  const { envVersion } = wx.getAccountInfoSync().miniProgram;
  return ENV[envVersion]["BASE_URL"] || ENV[DEFAULT_ENV]["BASE_URL"];
}

export function getCurrentEnv() {
  return DEFAULT_ENV;
}

export function getENVSetting() {
  const { envVersion } = wx.getAccountInfoSync().miniProgram;
  return ENV[envVersion] || ENV[DEFAULT_ENV];
}
