# Introducing Web APIs for Dual Screen and Foldable Devices

By [Microsoft Edge Team](https://blogs.windows.com/msedgedev/author/msedgeteam/)

The browser is one of the most used apps on any device, and today it’s running on a completely new hardware category: dual-screen and foldable devices.

With a variety of new dual-screen and foldable devices coming to market, including [last week’s launch of the new Surface Duo](https://devblogs.microsoft.com/surface-duo/microsoft-surface-duo-is-released/), there’s never been a better time to start thinking about how your site can embrace these form factors.

Today, we are pleased to announce the availability of two new experimental features that will help web developers effectively lay out content in a browser window that spans multiple display regions and create responsive websites that are a natural fit for this new class of device:

-   CSS [screen-spanning media feature](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Foldables/explainer.md) and a set of environment variables to describe the geometry of the fold.

-   JavaScript [window segments enumeration API](https://github.com/webscreens/window-segments/blob/master/EXPLAINER.md), a companion API to the CSS primitives, useful when working with non-DOM targets like Canvas2d and WebGL.

## The foldable device class

Broadly speaking, there are two variants of foldable devices: dual-screen devices, and single-screen devices that take advantage of the flexible display technology. Both have a lot in common: they are portable, multi-posture devices that allow users to rotate, flip and fold.

[![Illustration of dual-screen and single-screen foldable devices](https://blogs.windows.com/msedgedev/wp-content/uploads/sites/33/2020/09/image003-1024x407.png)](https://blogs.windows.com/msedgedev/wp-content/uploads/sites/33/2020/09/image003.png)

On this form factor, applications can reside on one side, or can be spanned across both display regions. A website that responds to this spanned state integrates with the semantics and intent of logically splitting the presented content.

[![A dual-screen foldable device in various postures such as book mode, tent mode, and others.](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image006-1024x560.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image006.png)

The expansive screen real-estate and unique postures enabled by this device category allow web developers to unlock unprecedented experiences on the web in a device that can fit in your pocket or purse.

## Transitioning from traditional contiguous screens to dual-screens and foldables

Although existing websites will continue to work out-of-the-box, making sites aware of the foldable nature of the device can greatly enhance the user experience.

To better illustrate the opportunity and demonstrate how the newly created browser capabilities work, we’ll take you through enhancing an example e-mail client layout.

Showing a list-view of the inbox and the content of an email side-by-side is a common pattern that is naturally great for wider viewing areas. When the browser window is spanned across the two display regions on a dual-screen device, the overall viewport width is likely to be comparable to that of a traditional landscape tablet device.

[![Examples of an email client with and without optimizations for a dual-screen layout](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image007-1024x384.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image007.png)

Unmodified, the email client will continue to work as it always has. However, the experience could be dramatically improved if we could align the inbox and the email columns with the fold, keeping each within the boundaries of a single display region. That way, neither content area will be cut or masked by the device hinge or rendered over the fold of a flexible display.

To achieve the desired layout, we are introducing a new screen-spanning media feature and a set of pre-defined environment variables that allow web developers to treat foldable devices as another responsive web design target. Developers can now create layouts that adapt to every device category without taking a hard dependency on specific hardware parameters. This flexibility improves scalability because it does not require duplication of work for each new device type.

## Detecting display regions

The CSS `screen-spanning` media feature will help web developers test if the root viewport is being spanned across multiple adjacent display regions, and provide details about the configuration of these adjacent display regions (e.g. stacked or side-by-side).

### Syntax

The `screen-spanning` media feature is specified as a value describing the number of folds (or hinges) the device has, as well as their postures. If the device is not a foldable device, the value is `none`. If it is a foldable, it can have one of these two values:

-   `Single-fold-vertical`: matches a device with a single fold (two display regions) and the fold posture is vertical.

-   `Single-fold-horizontal`: matches a device with a single fold (two display regions) and the fold posture is horizontal.

[![Comparison between single-fold-vertical and single-fold-horizontal values for screen-spanning.](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image005-1024x564.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image005.png)

## Calculating display regions geometry

It’s not safe to assume that when in the `screen-spanning` state, the fold is always going to divide the viewport exactly in half. Additionally, some window managers may choose to mask the web content behind the fold. To help web developers calculate the size of each display region and ensure they know how much their content, if any, needs to be padded to avoid the mask, we are adding four predefined CSS environment variables.

-   `env(fold-top)`

-   `env(fold-left)`

-   `env(fold-width)`

-   `env(fold-height)`

[![illustration labelling environment variables on different display regions](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image002-5f5fae5514cc2-1024x415.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image002-5f5fae5514cc2.png)

The values of these variables are expressed in CSS pixels and are relative to the layout viewport (i.e. are in the client coordinates, as defined by CSSOM Views). When evaluated in content that is not in one of the spanning states, these values will be treated as if they don’t exist, and the browser will use the fallback value as passed to the env() function.

## Enhancing our e-mail example app for dual-screen and foldable experiences

[![A side by side example showing a mail app with content occluded by a hinge gap, and with a layout that accounts for the hinge gap](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image001-5f5fae6619385-1024x415.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image001-5f5fae6619385.png)

Let’s put the CSS screen-spanning media feature and the fold geometry environment variables into practice and enhance the reader view of our email client:

```css
@media screen and (min-width: 799px) {
	/* rules specific to screens that are wider than tablet */
}

@media screen and (min-width: 799px) and (screen-spanning: single-fold-vertical) {
	/* main is an element wrapping the 3 flex items highlighted in the figure above */
	main {
		display: flex;
		flex-direction: row;
	}
	.navigation {
		/* 
        ** flex direction is row, so flex-basis acts like this flex item width
        ** according to the design, the desired width on foldables / dual-screens is 60px
        */
		flex-basis: 60px;

		flex-grow: 0;
		flex-shrink: 0;
	}

	.inbox {
		/* 
        ** inbox width consumes the entire width of the first display region, ex
        ** inbox width = display-region-1-width - 60px (navigation column width)
        */
		flex-basis: calc(env(fold-left) - 60px);

		/* 
        ** some devices have a mask, so we need to add a margin or a gap after this column
        ** env(fold-width) = 28 CSS-pixels on surface Duo.
        ** env(fold-width) = 0 CSS-pixels on devices that does not mask content.
        */
		margin-inline-end: env(fold-width);

		flex-grow: 0;
		flex-shrink: 0;
	}

	.email-content {
		/* 
        ** the email content column should "grow" to fill the rest of the space
        ** but to demonstrate how to calculate the width of the 2nd display region
        ** we will manually set the width
        */
		flex-basis: calc(100vw - (env(fold-left) + env(fold-width)));

		flex-grow: 0;
		flex-shrink: 0;
	}
}
```

## Enumerating the window segments in JavaScript

When working with non-DOM targets like Canvas2d or WebGL, you can get the geometry of each display region using the new Window Segments Enumeration API.

getWindowSegments() is a method on the Window object that returns an array of 1 or more DOMRects representing the geometry and position of each display region.

The returned array is an immutable snapshot of the display regions’ state at the time the method was called. If the user transitions from a spanning state to a non-spanning state, or rotates the device, the window segments previously retrieved will be invalid.

```js
const segments = window.getWindowSegments();

// case 1: desktops, traditional touch screen devices, foldable device not spanned
console.log(segments.length); // 1

// case 2: dual-screen and foldable
console.log(segments.length); // 2
```

Pages should listen to window resize event or orientationchange event to detect whether the browser was resized, or the device was rotated and retrieve the updated display regions.

```js
let segments = window.getWindowSegments();

// state 1: browser is spanned across 2 displays and fold is vertical.
console.log(segments.length); // 2

// state 2: user decided to rotate the device, browser is still spanned but fold is now *horizontal*
// on window resize, both resize and orientationchange events fire
// resize events will also fire when user go in or out of spanned state.
window.addEventListener("resize", () => {
	// segments we initially retrieved are no longer
	// update with latest information representing segments the 2 when the fold is horizontal
	segments = window.getWindowSegments();
});
```

There are no explicit methods to learn whether the fold posture is vertical or horizontal, as this information can easily calculated from the DOMRects returned:

```js
function isSingleFoldHorizontal() {
	const segments = window.getWindowSegments();

	// single fold means the device has 1 fold and 2 display regions
	if (segments.length !== 2) {
		return false;
	}

	// horizontal fold means 1st segment top is smaller than 2nd segment top
	if (segments[0].top < segments[1].top) {
		return true;
	}

	// if we reach this point, the fold is vertical
	return false;
}
```

Same applies for the fold-width, web developers can use information provided by getWindowSegments() to learn whether the window manager is masking content rendered behind the fold, and the fold width is greater than zero pixels, or not.

```js
function foldWidth() {
	const segments = window.getWindowSegments();

	// if there's 1 segment, fold mask is not applicable, return 0
	// if there's more than 2 segments, we don't deal with this kind of device, yet, return 0
	if (segments.length !== 2) {
		return 0;
	}

	// fold is vertical
	// device looks like this: [][]
	if (segments[0].top === segments[1].top) {
		return segments[1].left - segments[0].right;
	}

	// if we reach this point, the fold is horizontal
	return segments[1].top - segments[0].bottom;
}
```

## Future-proofing

As developers, we tend to plan for the future when creating for today, so a minimum amount of refactoring is needed to unlock scenarios that are likely to arise down the road.

[![An imaginary three-screened device](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image004-1024x467.png)](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/09/image004.png)

An imaginary device with 2 folds and 3 screens

Unlike CSS, JavaScript has the concepts of arrays, loops and conditionals which make the mapping between the Window Segments Enumeration API and a device with `N` display regions more direct. For the imaginary device illustrated above, when the browser is spanned across all 3 display regions, calling the `getWindowSegments()` method will return an array of 3 DOMRects and using simple language primitives like a loop or the built-in array methods you could learn more about how the display regions are configured (e.g. are all screen of the same width?, etc.)

In CSS, the current plan is to simply add new values to the `screen-spanning` media feature representing new screen topologies.

## Start enhancing your websites for foldable experiences today

The CSS screen-spanning media feature and the Window Segment Enumeration API are available behind an experimental flag, you can enable them at edge://flags/#enable-experimental-web-platform-features.

Starting in Microsoft Edge 86, web developers can use [Microsoft Edge DevTools to emulate dual-screen & foldable](https://docs.microsoft.com/en-us/dual-screen/web/desktop-developer-tools) devices on Windows and Mac desktop platforms. Alternatively, you can download and install the new [Surface Duo emulator preview](https://docs.microsoft.com/dual-screen/android/get-duo-sdk) (version 2020.806.1 or newer) to test and debug using the built-in Edge browser after enabling experimental platform features flag.

Both the JavaScript Window Segments Enumeration API and the CSS screen-spanning media features are available as Origin Trials, where you can acquire tokens and safely experiment with these new primitives in production in exchange for providing us with feedback about the APIs. [Sign up for an Origin Trial if you’re interested in testing out these APIs!](https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/dual-screen-and-foldable-devices-css-and/detail/)

## The road ahead

These APIs are available for you to experiment with today after many iterations and improvements with the collaboration of the Chromium project, Google, Intel, W3C’s CSSWG, Second-screen WG and many others.

We have contributed both the CSS and JavaScript primitives for desktop platforms to the Chromium open-source project and now the DevTools’ foldable and dual-screen devices emulation is available not only in Edge, but also in Chrome and soon in other Chromium-based browsers. We are currently working on upstreaming the Android implementation so all Chromium-based browsers on Android OS can support web developers delivering exciting new experiences for this flexible device category.

If you have feedback about either one of the APIs, please let us know by [opening an issue on GitHub](https://github.com/MicrosoftEdge/MSEdgeExplainers/issues/new/choose) or alternatively you can reach out to us on Twitter ([@\_zouhir](https://twitter.com/_zouhir) or [@MSEdgeDev](https://twitter.com/MSEdgeDev)).

– Zouhir Chahoud, Program Manager  
– Daniel Libby, Principal Software Engineering Manager
