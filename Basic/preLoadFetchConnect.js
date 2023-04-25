/**

Regular style sheets and JS which are imported using <link> tags in the haed tag. Priority wise the html file will have the highest priority, then line by line files will be loaded.

PRELOAD
However If we have some scripts and styles files which are very critical and this should be loaded with the highest priority, then we have to use "preload". It looks like below:
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="script.js" as="script" />
So what preload does is, it pre downloads the file but the execution only happens when the file is consumed.

PREFETCH
We need to apply prefetch to only those assests which we are 100 % sure that the user will be visiting them, for example , a 3 step sign up form we can prefetch the assets for step 2 in step 1 and step 3 in step 2. 
<link rel="prefetch" href="script1.js" as="script" />
This will have the lowest priority, as its to be consumed later on. This gets saved in the prefetch cache, and the user can notice no delay in viewing the prefetched assets.

PRECONNECT
Suppose our website loads contents from some other domain or CDN , and we know that at some point in my application we are going to make a network call to fetch assets from that CDN. First step will be a handshake between our app and the external CDN, then only the assets are sent from the CDN to our app. So If we use preload we will be able to make this handshake before hand itself so that when we need to make a network call we don't have to worry about the handshake as its already done before due to using preload. It optimizas the network call.
<link rel="preload" href="script.js" as="script" />

 */