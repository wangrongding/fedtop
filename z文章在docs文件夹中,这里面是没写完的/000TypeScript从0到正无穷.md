# 前端超人带你一起入门 TypeScript!

为什么要学 TypeScript ? 首先我们一起来看几个简单的代码片段.

```typescript
const str = 'HELLO WORLD'
str.toLocalLowarCase()
```

```typescript
function test() {
  return Math.random < 0.5
}
```

```typescript
const test = 'a'
if (test !== 'a') {
  // do something
} else if (test === 'b') {
  // do something
}
```

你能第一眼就看出这三个代码块中的问题吗?  
如果不可以,那么借助 Typescript,就可以很方便的帮助我们预先防范这些错误的发生,也可以很清晰的查看他们中的错误出现在哪里.

1. toLocalLowarCase 单词拼写错误
2. Math.random 必须调用才能与数值进行对比
3. 逻辑错误

## 如何快速把玩 Typescript？

学习 TypeScript 我们只需要在这个线上网站 👉[TypeScript Playground](https://www.typescriptlang.org/play) 中进行快速的演练。  
Ts 编译与 Ts 配置等内容我放在最后面讲。

## 显示类型与隐式类型

什么是显示类型 ? 就是手动的给变量添加类型

```typescript
// 例如 👇
cosnt a:string="1234"
```

什么是隐式类型 ? 由于 TypeScript 会自动为我们推断数据的类型.

```typescript
// 比如 👇
const b = 'abcd'
```

## 类型断言

非空断言

```typescript

```

```typescript

```

## tsc

生成 Ts 配置文件

```sh
tsc --init
```

监视目标文件,并自动编辑

```sh
tsc -w

```

## Typescript 类型

### 数值类型

```typescript
const test: number = 123
```

### 字符类型

```typescript
const test: string = 'abc'
```

### 布尔类型

```typescript
const test: boolean = false
```

### Symbol 类型

```typescript
const test = Symbol()
```

### 数组类型的定义

```typescript
const arr: number[] = [1, 2, 3]
// or
const arr: Array<number> = ['a', 'b', 'c']
```

### 对象类型

对象类型中通过`;`号分隔每一项的类型定义(不是逗号,不是逗号,不是逗号!)

```typescript
const test: { x: number; y: number } = { x: 1, y: 2 }
```

### any 类型

> 相当于关闭了 ts 对变量的类型检查

将所有类型定义为 any,就失去了使用 Ts 的意义了,不推荐使用(抵制 anyScript 从我做起)

### 函数

函数的入参类型定义在参数右侧,函数的返回值类型定义在函数括号右边

```typescript
function test(name: string): void {
  console.log(123)
}
```

## never 类型

永远都不存在的值，或者总是抛出异常的类型

例如

```typescript
const test = () => {}
```

```typescript
let a: string & number
```

### 联合类型

让类型变得更宽更丰富.

```typescript
let test: string | number = 'abc'
test = 123
```

前提:处理某个具有联合类型的变量时,一定满足多个类型都具备的方法。

```typescript
const test = (str: string | number[]) => {
  return str.slice(0, 2)
}
```

如果不具备以上所述的条件，则我们需要单独对不同类型做出处理。

```typescript
const test = (str: string | string[]): string => {
  if (typeof str === 'string') {
    return str
  } else if (str instanceof Array) {
    return str.join(',')
  }
}
```

## 类型别名

上面写了，很多类型，但是当我们很多地方需要用到同一种类型的时候，总不能在每一个需要定义类型的地方重复写那些复杂的类型吧？

这个时候我们就需要，把类型抽出来，给类型定义别名  
可以通过以下方式 👇

```typescript
type UserInfo = {
  name: string
  age: number
  id: number | string
}
let user: UserInfo

function getUserInfo() {
  apiGetUserInfo().then((res: UserInfo) => {
    // res === { name: "John", age: 30, ID: "123" }
    user = res
  })
}
```

当然也可以用 `interface` 来定义别名，但是 `interface` 只能定义对象形式的类型,关于 `interface` 与 `type` 的区别下一小节会讲到。

```typescript
interface UserInfo {
  name: string
  age: number
  id: number | string
}
let user: UserInfo
```

## interface 与 type 的区别

关于 interface 官方给出的说明是

> 1. An interface can be named in an extends or implements clause, but a type alias for an object type
> 2. literal cannot. An interface can have multiple merged declarations, but a type alias for an object type literal cannot.

所有可以用 interface 定义的类型都可以用 type 来定义

### 扩展接口

interface 扩展接口

```typescript
// 汽车
interface Car {
  type: string
  price: number
  color: string
}
// 特斯拉
interface Tesla extends Car {
  model: string
}
// 实例
const car: Tesla = {
  type: 'electric',
  price: 100,
  model: 'Model S',
  color: 'red',
}
```

type 扩展类型 ， 通过`&`符号链接类型

```typescript
type Car = {
  type: string
  price: number
  color: string
}

type Tesla = Car & {
  model: string
}

const car: Tesla = {
  type: 'electric',
  price: 100,
  model: 'Model S',
  color: 'red',
}
```

### 向类型中添加字段

在 interface 中，重复定义可以将多个接口合并为一个接口，从而实现向类型中添加新的字段

```typescript
interface Test {
  name: string
}
interface Test {
  id: string
}
const test: Test = {
  name: 'abc',
  id: '123',
}
```

而 type 不行，重复定义则会报错

![](https://gitee.com/wangrongding/image-house/raw/master/images/202203312311666.png)

## TS 配置文件

1. 降级向下兼容编译 TS
2. 严格模式编译 Ts  
   strict : 总开关
