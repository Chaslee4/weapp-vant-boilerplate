export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
};

const formatNumber = (n: number) => {
  const s = n.toString();
  return s[1] ? s : "0" + s;
};

export function getURLData(url: string) {
  const urlPart = url.split("?");
  const host = urlPart[0];
  const params: any = {};
  if (urlPart[1]) {
    const queryParts = urlPart[1].split("&");
    queryParts.forEach(part => {
      const param = part.split("=");
      params[param[0]] = param[1];
    });
  }

  return { params, host };
}
