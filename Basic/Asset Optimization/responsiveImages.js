/**

 It is unfair to load high density images on low end devices.

The user can have high performance device and certain users can also have low end devices. So, if the device is high end its ok to render high quality images but if it is low end then its better to render low quality images. 

We need a set of different dimentions of the same image and based on the Density Pixcel Ration (DPR) of the device the user is using.

In the image tag we have a srcset attribute which can take multiple image paths divided by a comman and the DRP is mentioned after the path before the comman, just like below

 <img src="cat.jpg" srcset="cat.jpg, cat2.jpg 2x, cat3.jpg 3x" />

By doing this the image will automatically update based on the DPR of the device user is using.

We can also change the image account to the actual image width in the viewport, as shown below  :
 <img src="cat.jpg" srcset="cat.jpg 500w, cat2.jpg 1000w, cat3.jpg 1500w" />
here w stands for width

 */