import { request, upload } from "../utils/request";

export function login(data: object) {
  return request({
    url: "/login",
    method: "POST",
    data
  });
}

export function uploadVideo(filePath: string, data: object) {
  return upload("/upload", filePath, data);
}
