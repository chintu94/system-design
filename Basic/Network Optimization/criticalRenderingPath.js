/**

 The Critical Rendering Path is the sequence of steps that the browser goes through to convert the HTML, CSS and JavaScript code into pixels on the screen. Optimizing the critical render path improves render performance. There are 5 steps:
  1. Creation of DOM (Document Object Model)
  2. Creation of CSSOM (CSS Object Model)
  3. Render Tree
  4. Layout
  5. Paint

 Creation of DOM -> It is incremental. The HTML response is turned into tokens which turns into nodes which turns into the DOM Tree.

 Creation of CSSOM -> The process is same, The CSS is turned into tokens which turns into nodes which turns into the CSS object model. The properties of a parent is cascaded down to its childrens, this is why we call it Cascading Style sheet. This is not incremental to avoid layouting and painting again.

 Render Tree -> The DOM and CSSOM are together formed a Render Tree. Any element with display none will be omited from the Render Tree, though its a part of the DOM tree.

 Layout -> Layout steps determines where the elements will be positioned in the screen.

 Paint -> This is the step when we are able to see the elements on the screen.

 */