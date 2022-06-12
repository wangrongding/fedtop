# 用ASCII码画图

<iframe height="500" style="width: 100%;" scrolling="no" title="Rotating ASCII Globe" src="https://codepen.io/thykka/embed/JEqwXE?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/thykka/pen/JEqwXE">
  Rotating ASCII Globe</a> by thykka (<a href="https://codepen.io/thykka">@thykka</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


```html
<!DOCTYPE html>
<!-- <pre id=p><svg onload=a=[alert(11)]></svg></pre> -->
<!-- <pre id=p><svg onload=a=[setInterval('h="";for(a[I++*I%17+578]=i=89;i++<630;h+=i%30?"`*"[a[i]=~~((a[i]+a[i+1]+a[i+29]+a[i+30])/4)]||8:"\\n")p.innerHTML=h',I=30)]></630></svg></pre> -->

<!-- <pre id="p"></pre><svg onload=a=[alert(11)]></svg> -->

<!-- 火焰 -->
<!-- <pre id="p"></pre>
    <svg/onload=a=[setInterval('h="";for(a[I++*I%17+578]=i=89;i++<630;h+=i%30?"`*"[a[i]=~~((a[i]+a[i+1]+a[i+29]+a[i+30])/4)]||8:"\\n")p.innerHTML=h',I=30)]> -->

<!-- 呼吸描记 -->
<svg
    onload="T=0;setInterval('t=++T/1e3;s=Math.sin;for(x=[],i=18;i--;)x[i]=\'\'+[s(t+i*t)*75+150,s(t+i*t+5)*75+75];p.setAttribute(\'d\',\'M\'+x.join(\'L\')+\'Z\')',1)"
>
    <path id="p" stroke="#fff" />
</svg>

<!-- 恶意测试 -->
<img/src="x" onerror=document.body.innerHTML=location.href />
<img src=x onerror=prompt(1)>
```


画布转字符画
https://asciiflow.com/#/

https://codepen.io/oj8kay/pen/bOMLOW
https://codepen.io/oj8kay/pen/JwvpZz

https://www.cnblogs.com/jelly7723/p/5657891.html

https://blog.csdn.net/weixin_34128411/article/details/92045979
