# Complete my Website 

We are going to introduce some new endpoints and functionalities in this webpage.

## 1. Birth-year missing

Notice that the year in which the mascot was born is missing.
Fix the **index.ejs** to also include this information. 

Try to understand how EJS iterates the array and gathers the information for each element.

## 2. Footer missing

The footer is missing in both __Home__ and __About__ pages. You'll have to create a new footer.ejs. You also have to modify both __about.ejs__ and __index.ejs__ pages. Have a look how those pages can include the __header.ejs__ and __head.ejs__ partials.

The text does not really matters; choose one of your choice.

## 2. New form page

Create a new page using the template syntax. We need a form to send a new mascot to our server; so it is displayed in the Home page. Write your file in views/pages/form.ejs. This page must be rendered when the user navigates to **/add-mascot**. Add a new navigation link.

We need this form to:

1. Get from the user the name, organization and year of the new mascot.
2. Perform some basic validation in the form
3. The form's action attribute must set to the endpont **/add-mascot**
4. The form's method attrbiute must set to **POST**

Please notice that this form is created with Bootstrap 5; loaded from the CDN. Take advantage of [this](https://getbootstrap.com/docs/5.0/forms/overview/).

## 3. Add the POST /add-mascot endpoint

We now need to creater a new endpoint for the POST performed by the form.

1. Add a new POST endpoint to '/add-mascot'
2. The endpoint must receive the fields from the form. Remember the field's info will be available in **req.body**
3. Is your **req.body** __undefined__ ? Notice that you'll need to include some [middleware](https://www.geeksforgeeks.org/express-js-express-urlencoded-function/).
4. Add the new mascot to the **mascots** global variable.
5. Explore de Express documentation to learn about how to redirect the user to the homepage.
