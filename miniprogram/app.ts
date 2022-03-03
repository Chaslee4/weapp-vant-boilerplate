// app.ts
import { initGlobalData } from "./store/index";

App<IMiniAppOption>({
  globalData: initGlobalData(),
  onLaunch() {}
});
