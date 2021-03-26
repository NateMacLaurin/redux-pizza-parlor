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
