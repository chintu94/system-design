/**
Rndering Patterns

There are 4 types of rendering patterns :
1. Client Side Rendering (CSR)
2. Server Side Rendering (SSR)
3. Static Site Generation (SSG)
4. Incremental Site Re-Generation (SSG)


What is Pre-rendering ?
No pre-rendering --> In simple react application there is no pre-rendering (CSR). So, the server sends a HTML file to the browser, which only has a div tag with id root and nothing inside it, when the JS is hydrated then our react code runs and it fills that empty div with components. This is a classical example of no pre-rendering, as at the initial app load browser received.

With pre-rendering -->If we have pre-rendering then the server sends a HTML file to the browser which is not empty , it has all the elements. So the content is visible on the intial load and when the JS is hydrated then the app becomes interactive, we can chive pre-rendering by a Next JS application.



 */