# Lab - Delete/Update

## First Step

Come up with a CRUDable model (fruit, human, robot, etc)

1. Fork this repo. Then start to update it into an express app within this repo.
1. Create an express app. `.gitignore` your `node_modules`. Commit.
1. Create an array of your CRUDable objects. Commit.
1. Create an index route that renders a template that displays all your objects. Commit.
1. Make index template contain a form which will make a DELETE request to the server.  Commit.
1. Create a DELETE route that will remove the specified object from the array and redirect to the index page. Commit.

## Second Step

Expand the above app to have the following:

1. An edit route that shows an edit page (template) containing a form populated with the data from the server for one item. Commit.
1. A link to the edit routes on the index page. Commit.
1. A PUT route that will update the correct element of your objects array, as specified by the index in the URL, to according to the data in `req.body`
    - this page should redirect back to the index route, once this is completed.  you could also redirect to that item's show page 
    - the form on the edit page should make a PUT request to this route
    - Did you commit?
    
## Hungry for more?

1. Create a show page/route with links to it from the index page
1. The show page should have a link to the edit page
1. The edit page should have a delete button which will delete the specified item
1. Into back end? Research routing on the documentation page for Express Router and see if you can chain some routes or try something else you see there.
1. Into the "front end" of the back end?  Research EJS Partials (we'll teach you them later, so you'd be on your own for now!) and see if you can add a header and/or footer to your EJS pages.

Also:
>You're committing right?
