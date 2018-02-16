# EatDaBurger

### Overview

I've created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I'm following the MVC design pattern; using Node and MySQL to query and route the data in the app, and Handlebars to generate the HTML.

-----------------------------------------
#### February 2018 


-----------------------------------------

Current Version 1.0

---

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* This app will store every burger in a database, whether devoured or not.

* [Check out this web site to see it in action!](https://blooming-meadow-36699.herokuapp.com/.

---

## Screenshots

<table>
    <tr>
        <td>
            <img alt="Splash" src="images/screenshot1.png">
        </td>
    </tr>
</table>

## How you can help

* Please let us know if you find any errors or if you have ways to achieve better efficiency.

-----------------------------------------


### How does the app work?

1. The app uses the express node app to serve the pages.

2. The routing is done in javascript using the express module, handlebars and ORM.

3. The app is hosted on heroku.


## Dependencies
    
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "express-handlebars": "^3.0.0",
    "method-override": "^2.3.10",
    "mysql": "^2.15.0"


## History

This project was created for a homework assignment on 2/15/2018 for the University of Richmond Programming Bootcamp.

## License

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).