# Nozama - Front End Client

<p align="center">
  <b>Team Project By: </b><br><br>
  <a href="https://github.com/Aimeelr08">Aimee Ramirez</a> |
  <a href="https://github.com/ashtrull">Ash Trull</a> |
  <a href="https://github.com/cmigz">Christian Migncca</a> |
  <a href="https://github.com/wjbritton">Will Britton</a>
  <br><br>
</p>


## Introduction

Welcome to the Front End repository for our third project with GA, our team project.  We all learned quite a lot throught the process.  It was a great team effort and we look forward to continue working to really polish it up.

As it stands the site is both user and admin facing with the ability to add products to and empty cart as well as create and delete products from the site.  Our next steps will be to seperate the two.

Our prompt was to build Nozama, a site similar to Amazon.  We decided to act as though we were amazon rolling our a new food shopping piece of their site since they accquired Whole Foods.  We named it Peach.

## Links

- [Deployed Client](https://wdi-team-project.github.io/nozama-client/)

- [API Repo](https://github.com/wdi-team-project/nozama-express-api)

- [Trello](https://trello.com/b/Gk8kc8GI/peach-produce)

- [Google Doc](https://docs.google.com/document/d/17u0y_Ls6DwR3jYA1ZmOtVIrufHcFLOCmnxkV-dhoFUs/edit#heading=h.bm1arf1sz7vv)

## User Stories


- As a user I want to be able to log in, log out so that I can save my products to purchase late
- As a user I want to see what you’re selling so that I know what kind of website I’m at (e-commerce)
- As a user I want to add products to my cart so they can purchase them all at once
- As a user I want ways to navigate out of every page so that I’m never stuck/rat-trapped
- As a user I want to be able to actually purchase my products
- As a user I want my cart to show my products, quantities, costs
- As a user I want to be able to add multiple of one product to my cart or remove products from my cart
- As a user I want to be able to edit my cart so that I can add more or delete from my cart before I check out
- As a user I want to be able to contact customer service if I have any questions about the products or checkout process
- As user I want there to be uniformity in product listings so I can easily find the information I need
- As an admin I want users to only be able to add products to a cart when tehy’re logged in for simplicity of process
- As an admin I want orders to show up in an orders collection when customers purchase their cart


## Technologies Used

- HTML:
  - Used html to build skeleton of page.
- CSS:
  - Used classes/Id to style page.
- Sass:
  - Set Sass keys to keep a consisten color scheme, font, and more
- Bootstrap:
  - Used Grid system to organize the page.
- jQuery:
  - Managed event handlers for user actions as well as displaying information
- AJAX:
  - Make calls to the api
- JavaScript:
  - Multiple functions used for web ui/interaction

## Planning Process / Approach

- Download Browser Template -
- Create a github Repo
- Deploy to github pages
- Create file directory setup
- Create landing page
  - Header
  - Navbar
  - Auth box
  - Search bar
  - Structure for inventory
  - Add image anchors to product listings
  - Expand view/More details option
- Create My Cart page
  - Handlebars table for items stored in cart
- Login functionality
  - Signup (POST)
  - Signin (GET)
  - Signout (DELETE)
  - Change password (PATCH)
  - Click handlers
- Product interface
  - Add to cart (POST)
- Add functionality to My Cart
  - Show My Cart (GET)
  - Change quantity (PATCH)
  - Remove from cart (DELETE)
- Design
  - Design logo
  - Add header with logo
  - Color scheme
  - Add images to products

## Wireframe

![alt text](https://i.imgur.com/rpL2W4D.jpg "WireFrame V1")

## Data Model ERD

![alt text](https://i.imgur.com/rAMbj9f.jpg "WireFrame V1")

## Unsolved Issues

- Need to Integrate stripe
- Need smoother/cleaner user Interactions
- Function getProducts should be refactored and modularized btwn events.js api.js and ui.js. There is ui stuff in the api file
- Seperate User/Admin Actions

## Installation Instructions

If you'd like to fork/clone install dependencies with:
- `npm install`
