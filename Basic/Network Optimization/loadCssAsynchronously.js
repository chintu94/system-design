/**

By default the CSS is treated as a render blocking resource, which means that the browser won't render any processed content until the CSSOM is constructed. CSSOM is css object modal. 
So this means that until and unless the HTML parsing and the CSS parsing os completed we wont see any content on the screen. as both html and css are render blocking resources.

If we have multiple css assets and there is one crtical css which should load first and others can load asynchronously. We can write it as below:

<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'" />
<link rel="stylesheet" href="critical.css" />

as soon as the browser comes to the above line, and browser encounter the media attribute is set for "print", then the CSS is loded asynchronously without blocking the rendering process. and once the load is complete then we set the media back to "all".

now the critical css file will load with more priority then the noncritical css file.

****************************************************************

One other way to make a critical css file load with priority is to use preload

<link rel="preload" href="critical.css" as="style" onload="this.rel='stylesheet'" />

here the critical css file will preload and onces loded its relation attribute will change to "stylesheet", as we will consume it also.

 */