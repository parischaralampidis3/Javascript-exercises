Html Dom Tree of Object

When a web page is loaded, the browser creates a Document Object Model of the page.

Html Dom model is constructed as a tree of objects:

The HTML DOM is a standard object model and programming interface for HTML.It defines:

The HTML elements as objects
The properties of an HTML elements
The methods to access all HTML elements
The events for all HTML elements

What is DOM Traversing?

The Document Object Model is a tree-like representation of an HTML document.It provides an API that allows you, as a web developer, to interact within a website using Javascript.

Every item in the DOM is known as a node. Only through the DOM can you manipulate your HTML document structure, content and style.

Dom traversal is the act of selecting nodes in the DOM tree from other nodes.You're propably already familiar with several methods for accessing elements in the DOM tree by their id, class or tag name.

Once you have access to a given node in the DOM tree, you can access related nodes in different ways.You can move downwards, upwards or sideways in the DOM tree from your selected node.

The first method involves searching for an element starting with a top-most node(like the document node) and moving downwards.

The second method is the opposite: you move from an inner element up the tree, searching for an outer element.
The last method is when you search for an element from another element at the same level in the document tree.


