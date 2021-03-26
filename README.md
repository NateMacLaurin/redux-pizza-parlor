# React Pizza Parlor

A react web app pizza ordering system.

## Installation/Setup

Create a `pizza_parlor` database in PostgreSQL. Import `database.sql` in PostgreSQL to create and fill tables with starter data.

```
npm install
npm run server
```
```
npm run client
```

## Usage

1. Home Page - From the home page, Users may add or remove each pizza they would like to order. A details button will display details for each pizza.

![Home/Select View](wireframes/screen-one.png)

2. Order Page - Collect user information, *name*, *street address*, *city* and *zip*. This page should have an option to select pickup vs. delivery. The total cost of the order should appear in the top right of this page. This page should have a next button that brings the user to the **checkout** page.

![Order View](wireframes/screen-two.png)

3. Checkout Page - Users are able to enter pickup or delivery and enter their delivery information here.

![Checkout View](wireframes/screen-three.png)

4. Admin Page - (Requires admin user authorization). From this page, authorized users can see past orders and delivery information for customers. 

```
http://localhost:3000/admin
```

![Admin View](wireframes/screen-admin.png)


## STRETCH GOALS

- Improve the styling of the app using Material-UI cards, buttons, nav bar and icons.
- Allow the user to go back to previous pages (until they've completed checkout).
- Display a list of pizzas for each order on the orders page.
- Add pictures to the `public/images` folder and update the image url for each pizza in the database.
- Add a button on the orders page to track delivery status.
- Allow admins to click on an order and see all of the details for that order (which pizzas were a part of that particular order). For the details of the order with `id` of `1`, it will be available to anyone with the url [http://localhost:3000/order/1](http://localhost:3000/order/1). This route is not built on the server, so you will need to create it.
