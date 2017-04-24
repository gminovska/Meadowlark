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

## Chapter 6 - The request and response objects

* Anatomy of a URL string (URL - Uniform Resource Locator)
* Ex: http://localhost:3000/about?key=value&name=John#history
    1. **protocol** - http:// (or https, ftp, file etc.)
    2. **hostname** - localhost (or www.google.com - the www is a sub-domain, 
        the .com is a top-level domain)
    3. **port** - by default, post 80 is used for http requests
    4. **path** - typically what we care about and how we do the routing
    5. **querystring** - starts after a ? and it is a key=value pair collection
    6. **fragment** - this is not passed to the server, it is used by browsers

* The HTTP protocol defines a collection of request methods (often referred to as HTTP
verbs) that a client uses to communicate with a server. Far and away, the most common
methods are GET and POST.

* The combination of method, path, and querystring is what your app
uses to determine how to respond.

Request and response headers

* Communicate metadata between the client and the server

* The Content-Type response header is very important as it tells the browser which type of
resource to expect so it knows how to render it. Without it the browser would have to make a guess.The file extension in the url is meaningless for the browser - if .img file is sent, the browser will not know it is an image unless it is specified in the header.

Request Bodies

* In addition to the request headers, a request can have a body (just like the body of a
response is the actual content that’s being returned). Normal GET requests don’t have
bodies, but POST requests usually do.

* To make req.body available, you’ll need middleware that can parse the body(body-parser)

The rest of this chapter talks about:
* the most prominent methods and properties of the request and response object
* where to look up more information (the Express documentation and GitHb repo)
* (very useful) most common usage of Express, with examples (Boiling it Down, p.61)

