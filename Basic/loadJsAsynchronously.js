/**

! This is used for Network Optimization

First: way is to add script tag after the body tag or at the end of the body tag. So this will work in following steps: Html starts Parsing once its over then the script tag comes , so the JS file is downloaded and then its executed.

Second: If we move script tag inside the head tag. The steps will be : Browser starts html parsing till it encounters the script tag in the head, then the html parsing is stopped and JS file is downloaded and then executed, post that html parsing resumes. This is a very bad experience as the DOM tree creation/parsing process is stopped.

? we can add either async or defer attribute to the script tag and the behavior of html parsing, script download and execution changes accordingly, lets explain both attributes.

Third: If we move script tag inside the head tag and this time we pass async attribute to the script tag. Now the Steps will be : Browser starts html parsing, when it encounters the script tag with a async attribute in it. Browser starts downloading the JS file without stopping the HTML parsing process, once the JS file is downloaded, HTML parsing stops and the JS execution starts, once the execution is completed then HTML parsing is resumed.

Fourth: If we move script tag inside the body tag and this time we pass defer attribute to the script tag. Now the Steps will be : Browser starts html parsing, when it encounters the script tag with a defer attribute in it, Browser starts downloading the JS file without stopping the HTML parsing process, even after the JS file is downloaded if the html parsing is not completed it will continue to parse till HTML parsing is completed and then only the JS file is executed.


So by following the fourth step we optimize the network by pre fetching JS in the html parsing stage and not pausing the html parsing for the JS execution.

 */