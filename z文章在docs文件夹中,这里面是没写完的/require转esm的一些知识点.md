```javascript
// 暂时不稳定的写法，换成下面的那种了
// import pkg from "./package.json" assert { type: "json" };
// const { default: pkg } = await import("./package.json", {
//   assert: {
//     type: "json",
//   },
// });

// ESM规范下混用CommonJs规范的模块
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const pkg = require(path.join(cwd(), "package.json"));
```

出口未在 ES 模块范围内定义  
https://stackoverflow.com/questions/71478604/exports-is-not-defined-in-es-module-scope

Fix - ReferenceError: exports is not defined in TypeScript  
https://bobbyhadz.com/blog/typescript-uncaught-referenceerror-exports-is-not-defined#nodejs---referenceerror-exports-is-not-defined

TypeScript: Cannot use import statement outside a module  
https://bobbyhadz.com/blog/typescript-cannot-use-import-statement-outside-module

Fix - Cannot use import statement outside module in JS  
https://bobbyhadz.com/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module

搭建一套支持 TS 的 Node 运行环境  
https://juejin.cn/post/6996834929401151525

用 typescript 开发 Node.js 应用  
https://www.jianshu.com/p/68eed441694e

使用 ts-node 运行 TypeScript  
http://www.tastones.com/stackoverflow/typescript/getting-started-with-typescript/running_typescript_using_ts-node/

How to import JSON files in ES modules (Node.js)  
https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

https://nodejs.org/dist/latest-v16.x/docs/api/documentation.html#stability-index
