/*The getElementById Method
The most common way to access an HTML element is to use the id of the element.

In the example above the getElementById method used id="demo" to find the element.*/


/*The easiest way to get the content of an element is by using the innerHTML property.

The innerHTML property is useful for getting or replacing the content of HTML elements. */

//difference between innerHTML and textcontext
/*InnerHTML will return you all the content inside of the element, while textContent basically is trying to parse the content(get rid of the tags) when you access the element. 

What I guess the reason for the first point is, Google and Mozilla did some optimization to the innerHTML, using a pointer instead of heap obj as the reference, and that's why it is faster(pointer assignment vs obj manipulation). I assume FF/Chrome would have better performance than other browsers for innerHTML tag.

Seems the textContent trying to access its children nodes every time you access it.

for the second part, from the code you provided, js did the children nodes 

removal before calling textContent.
 As I said textContent is trying to access its children nodes and parse them while calling, it will be faster if it detects there's no child node appended.
*/

//getElementsByClassName()
/*the getElementsByClassName() method of document interface returns an array-like object of all child elements which have all of the given class name(s). */

const listBtn = document.getElementById('btn');
let listItem = document.getElementsByClassName("list-item");

const title = document.getElementById("card-title");

const div = document.getElementById("section");
console.log(div)


const childList = document.querySelector(".child-list")
console.log(childList);

//using parent element or parent node.
/* Both parentElement or parentNode properties let you select the selected element's parent node one level up.
The critical difference is that parent element only chooses parent node that is an element.
On the other hand parentNode can select a parent regardless of whether it's an element or different node type. */

const parentDiv = childList.parentElement;
console.log(parentDiv)

/*the children property selects all child elements that are under the given element.
Unlike the children property, child nodes returns all direct child nodes.if you are interensted only 
in child elements, say list items only, using the childen property.
You should use closest(), in order find an element that can be multiple levels above the current element.*/

const findTitle = title.closest("#card-title");
console.log(findTitle)

//const children = childList.children;
//console.log(children);

//Using special lastChild and firstChild Properties 
/* These two methods are not robust as the first two. As their names suggest, the last child and first child properties return an element's first and last child nodes.
*/

const firstChild = childList.previousElementSibling.style.background = "aquamarine";
const lastChild = childList.lastElementChild;

console.log(firstChild);
console.log(lastChild);

//Sibling nodes
/* The siblings of a node are any node of the same tree level in the DOM. Siblings do not have to be the same type of node-text element comment nodes can all be siblings
Sibling properties work the same way as the children nodes, in that there is a set of properties to traverse all nodes, and a set of properties for only element nodes.
 previousSibling and nextSibling will get the next node that immediately precedes or follows the specified node, and previousElementSibling and nextElementSibling will only get element nodes. 
*/



//closest method
/* The closest() method of the element interface traverses the element and its parents until it finds
a node that matches the specified css selector */


//create and add an element

const paragraph = document.createElement("p");
paragraph.textContent = "This is another paragraph";
div.appendChild(paragraph);

div.removeChild(paragraph);




document.getElementById('card-title').innerHTML = "To-do bucket";

listBtn.addEventListener('click', function(){
//listItem[2].innerHTML = 'i need a job';

})
