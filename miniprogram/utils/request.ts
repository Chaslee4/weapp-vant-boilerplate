import { getBaseUrl } from "../env";
export function request({
  url,
  method = "GET",
  data = {}
}: {
  url: string;
  method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
  data: object;
}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: getBaseUrl() + url,
      data: data,
      method: method,
      header: {
        "Content-Type": "application/json"
      },
      success: function (res: any) {
        if (res.statusCode === 200) {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            console.log(res);
            reject(res.data);
          }
        } else {
          wx.showToast({
            icon: "none",
            title: res.data.message || "网络错误"
          });
          reject(res.data);
        }
      },
      fail: function (err) {
        wx.hideToast();
        wx.showToast({
          icon: "none",
          title: "请求失败"
        });
        reject(err);
        console.log("failed" + err);
      }
    });
  });
}

export function upload(url: string, filePath: string, data: object = {}) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: getBaseUrl() + url,
      filePath: filePath,
      name: "file",
      formData: data,
      header: {},
      success(res) {
        const data = JSON.parse(res.data);
        if (data.code === 200) {
          resolve(data);
        } else {
          reject(data);
        }
      },
      fail(res) {
        reject(res);
      }
    });
  });
}
