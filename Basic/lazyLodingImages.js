/**

Suppose the website has around 20-30 images, and the user loads the website then all the images are downloaded, however as a user I have looked at only 5 images, then downloding those extra images will put unnessasary pressure on the network alos while the images are downloaded, it blocks the rendering for the user, as soon as html sees a src tag inside image attribute, it directly downloads the file right away.

So to avoide this, we can use an attribute named "loading" which takes a value of "Lazy" and this goes in the img tag. this will enable the downloading of the image only when the user has the img tag in the browser's viewport or is about to come to the viewport. This is very important to optimize network calls going out.

Loading attribute takes two values , one is egar which is by default and then its Lazy.

 */