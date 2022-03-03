import StoreManager from "../../store/index";
const store = StoreManager.getInstance();

Page({
  data: {
    count: store.getter("count")
  },
  onChange(e: any) {
    const count = e.detail;
    this.setData({
      count
    });
    store.setCount(count);
  }
});
