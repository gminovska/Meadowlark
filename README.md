# Web Development with Node & Express - E.Brown
#### Notes & Sample App

This is a textbook for the Seattle Central's ITC230 class - Advanced JavaScript. 
I will be posting my notes on this file, organized by chapters, and I code 
along the book to create a sample app - Meadowlark Travel.

## Chapter 1 - Introducing Express

...

## Chapter 2 - Getting Started with Node

...

## Chapter 3 - Saving time with Express

This chapter starts with an attempt to explain what is the purpose of Express by
introducing words such as scaffolding, collection of templates, boilerplate code, framework and mentioning Ruby on Rails as the pioneer.

**Every project has some common functionality need not be coded 
from scratch every single time. This is what frameworks such as Express do for us**

* The author likes custom names for the app entry point, not the standard index.js or app.js. 

* Note that app.VERB  doesn’t care about the case or trailing slash, and it doesn’t consider the querystring when performing the match. 
So the route for the About page will work for /about, /About, /about/, /about?foo=bar, /about/?foo=bar, etc.

* app.use() is the method by which Express adds **middleware**. (More on middleware in Chapter 10)

* the order of the routes and the middleware matters!!

### Views & Layouts

* Express expects the views in a view folder, and the layouts(partials) 
in a views/layouts folder
* A view is what gets delivered to the user, and it does not have to be static
* *View engines* (template engines) is what allows for dynamic views
    * The default engine Express uses is Jade. It has high lever of abstraction, no HTML.
    * The book uses another engine - Handlebars
* The default extension handlebars uses is .handlebars, but that can be changed 
and set to whatever we want.