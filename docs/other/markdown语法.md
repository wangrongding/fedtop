---
title: markdown语法
date: 2018-02-01
tags:
  - 其他
categories:
  - other
---

> markdown 语法

<!-- more -->

- ### 标题

<details>
    <summary>点击查看详情:</summary>

    # 一级标题

    ## 二级标题

    ### 三级标题

    #### 四级标题

    ##### 五级标题

    ###### 六级标题

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

</details>

- ### 列表

<details>
    <summary>点击查看详情:</summary>
    
    //形式一
    -   a
    -   b
    -   c
    //形式二
    *   d
    *   e
    *   f
    //形式三
    -   g
    -   h
    -   i

    -   有序列表

    1. abc
    2. bcd
    3. cde

//形式一

- a
- b
- c //形式二

* d
* e
* f //形式三

- g
- h
- i

- 有序列表

1. abc
2. bcd
3. cde

</details>

- ### 引用

<details>
    <summary>点击查看详情:</summary>
    
    > 一级引用
    >> 二级引用
    >>> 三级引用
    >>>> 四级引用
    >>>>> 五级引用
    >>>>>> 六级引用
> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用

</details>

- ### 代码块

<details>
    <summary>点击查看详情:</summary>
    
     ` 少量代码 `
     
` 少量代码 `

    ```
    大量代码大量代码大量代码大量代码大量代码大量代码
    大量代码大量代码大量代码大量代码大量代码大量代码
    大量代码大量代码大量代码大量代码大量代码大量代码
    大量代码大量代码大量代码大量代码大量代码大量代码
    ```

```
 大量代码大量代码大量代码大量代码大量代码大量代码
 大量代码大量代码大量代码大量代码大量代码大量代码
 大量代码大量代码大量代码大量代码大量代码大量代码
 大量代码大量代码大量代码大量代码大量代码大量代码
 大量代码大量代码大量代码大量代码大量代码大量代码
```

    ``` javascript
    //指定语言
    ```

```javascript
//指定语言
```

</details>

- ### 链接

<details>
    <summary>点击查看详情:</summary>

- 行内式 [汪荣顶](https://www.fedtop.com 'alt信息'), title 文本
- 参数式

  > 链接的文字放在[]中，链接地址放在随后的:后，链接地址后面空一格，然后用引号引起来

  [简书]: https://www.jianshu.com '创作你的创作'

  [简书]是一个创作社区,任何人均可以在其上进行创作。用户在简书上面可以方便的创作自己的作品,互相交流。 //参数定义的其他写法 [简书]: https://www.jianshu.com '创作你的创作' [简书]: https://www.jianshu.com (创作你的创作) [简书]: <https://www.jianshu.com> "创作你的创作"

</details>

- ### 图片

<details>
    <summary>点击查看详情:</summary>

- 行内式

  > 和链接的形式差不多，图片的名字放在[]中，图片地址放在随后的()中，title 属性（图片地址后面空一格，然后用引号引起来）,注意的是[]前要加上!

  ![my-logo.png](https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo')

- 参数式

  > 图片的文字放在[]中，图片地址放在随后的:后，title 属性（图片地址后面空一格，然后用引号引起来）,注意引用图片的时候在[]前要加上!

  [my-logo.png]: https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo'

  ![my-logo.png] //参数定义的其他写法

  [my-logo.png]: https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo'
  [my-logo.png]: https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo'
  [my-logo.png]: https://upload-images.jianshu.io/upload_images/13623636-6d878e3d3ef63825.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'my-logo'

</details>

- ### 分割线

<details>
    <summary>点击查看详情:</summary>

    分割线可以由* - _（星号，减号，底线）这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以

```
---
- - -
------
***
* * *
******
___
_ _ _
______
```

---

---

---

---

---

---

---

---

---

</details>

- ### 转义

<details>
    <summary>点击查看详情:</summary>

    >分割线可以由* - _（星号，减号，底线）这3个符号的至少3个符号表示，注意至少要3个，且不需要连续，有空格也可以

    ```
    \\
    \*
    \+
    \-
    \`
    \_
    ```

</details>

- ### 表格

<details>
    <summary>点击查看详情:</summary>

    ```
    //例子一
    |123|234|345|
    |:-|:-:|-:|
    |abc|bcd|cde|
    |abc|bcd|cde|
    |abc|bcd|cde|
    //例子二
    |123|234|345|
    |:---|:---:|---:|
    |abc|bcd|cde|
    |abc|bcd|cde|
    |abc|bcd|cde|
    //例子三
    123|234|345
    :-|:-:|-:
    abc|bcd|cde
    abc|bcd|cde
    abc|bcd|cde
    ```

//例子一 |123|234|345| |:-|:-:|-:| |abc|bcd|cde| |abc|bcd|cde| |abc|bcd|cde| //例子二 |123|234|345| |:---|:---:|---:| |abc|bcd|cde| |abc|bcd|cde| |abc|bcd|cde| //例子三 123|234|345 :-|:-:|-: abc|bcd|cde abc|bcd|cde abc|bcd|cde

</details>
