# 在 JavaScript 中使用颜色的 13 个必备代码片段!

> 在 JavaScript 中使用颜色，需要对颜色格式和转换有一定的了解。这个 13 个代码片段能满足大部分日常的需求，从随机生成十六进制的颜色，到在十六进制和 RGB 值之间转换，甚至一些更高级的技巧，比如使用 HSL 格式来改变颜色的亮度等等。。。

## 随机生成十六进制颜色

```javascript
//随机生成十六进制颜色
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

//使用
randomHexColorCode(); // '#e34155'
```

## RGB 转十六进制

```javascript
//RGB转十六进制
const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

//使用
RGBToHex(255, 165, 1); // '#ffa501'
```

## 将 3 位颜色扩展为 6 位颜色

```javascript
//将 十六进制 3 位颜色扩展为 6 位颜色
const extendHex = (shortHex) =>
  "#" +
  shortHex
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map((x) => x + x)
    .join("");

//使用
extendHex("#03f"); // '#0033ff'
extendHex("05a"); // '#0055aa'
```

## 将 rgb()颜色字符串转换为具有每种颜色值的对象。

```javascript
// 将rgb()颜色字符串转换为具有每种颜色值的对象。
const toRGBObject = (rgbStr) => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
  return { red, green, blue };
};

//使用
toRGBObject("rgb(255, 12, 0)"); // {red: 255, green: 12, blue: 0}
```

## 十六进制转 RGB

```javascript
//十六进制转RGB
const hexToRGB = (hex) => {
  let alpha = false,
    h = hex.slice(hex.startsWith("#") ? 1 : 0);
  if (h.length === 3) h = [...h].map((x) => x + x).join("");
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    "rgb" +
    (alpha ? "a" : "") +
    "(" +
    (h >>> (alpha ? 24 : 16)) +
    ", " +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ", " +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : "") +
    ")"
  );
};

//使用
hexToRGB("#27ae60ff"); // 'rgba(39, 174, 96, 255)'
hexToRGB("27ae60"); // 'rgb(39, 174, 96)'
hexToRGB("#fff"); // 'rgb(255, 255, 255)'
```

## 将 rgb()颜色字符串转换为数组

```javascript
//将 rgb()颜色字符串转换为数组
const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);

//使用
toRGBArray("rgb(255, 12, 0)"); // [255, 12, 0]
```

## 将 RGB 颜色元组转换为 HSB 格式。

```javascript
// 将 RGB 颜色元组转换为 HSB 格式。
const RGBToHSB = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0
      ? 0
      : n && v === r
      ? (g - b) / n
      : v === g
      ? 2 + (b - r) / n
      : 4 + (r - g) / n;
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
};

//使用
RGBToHSB(252, 111, 48);
// [18.529411764705856, 80.95238095238095, 98.82352941176471]
```

## 将 HSB 颜色元组转换为 RGB 格式。

```javascript
// 将 HSB 颜色元组转换为 RGB 格式。
const HSBToRGB = (h, s, b) => {
  s /= 100;
  b /= 100;
  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return [255 * f(5), 255 * f(3), 255 * f(1)];
};

//使用
HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]
```

## 将 RGB 颜色元组转换为 HSL 格式。

```javascript
//将 RGB 颜色元组转换为 HSL 格式。
const RGBToHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};

//使用
RGBToHSL(45, 23, 11); // [21.17647, 60.71428, 10.98039]
```

## 将 HSL 颜色元组转换为 RGB 格式。

```javascript
//将 HSL 颜色元组转换为 RGB 格式。
const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

//使用
HSLToRGB(13, 100, 11); // [56.1, 12.155, 0]
```

## 更改 hsl()颜色字符串的亮度值。

```javascript
//更改hsl()颜色字符串的亮度值。
const changeLightness = (delta, hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  );
  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
};

//使用
changeLightness(10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 60%)'
changeLightness(-10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 40%)'
```

## 将 hsl()颜色字符串转换为值数组。

```javascript
// 将hsl()颜色字符串转换为值数组。
const toHSLArray = (hslStr) => hslStr.match(/\d+/g).map(Number);

//使用
toHSLArray("hsl(50, 10%, 10%)"); // [50, 10, 10]
```

## 将 hsl()颜色字符串转换为具有每种颜色值的对象。

```javascript
//将hsl()颜色字符串转换为具有每种颜色值的对象。
const toHSLObject = (hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
  return { hue, saturation, lightness };
};

//使用
toHSLObject("hsl(50, 10%, 10%)"); // { hue: 50, saturation: 10, lightness: 10 }
```
