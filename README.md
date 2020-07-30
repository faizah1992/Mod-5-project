<h1 align="center">Faizah Ahsan Designs</h1> 

<!-- <p align="center">
  <img max-height: 90% width="100%" src="src/images/readme.png" alt="img of the app">
</p> -->

### Table of Contents 
- [Description](#description)
- [Features](#features)
- [Teach Stack](#techStack)
- [Installing](#installing)

## Description
**Faizah Ahsan Designs** is a shopping website, created by Faizah Ahsan. This website was creatd to showcase and sell traditional South Asian clothing designed by Faizah Ahsan. 

## :arrow_forward: Checkout my demo [here](https://www.youtube.com/watch?v=nT6Gev1Xpfg&t=4s). 

## Features
- Authentication
   - Session is authenticated in the backend. All queries return data that corresponds to the proper user.
   - Users can sign up and log in from any page in the app.
- Create 
   - User can create an order for any item or items
- Add Items
   - Users can add items to their cart 
- Ordered items
   - Users can views past ordered items
- Update/Remove Cart Items
   - Users can update Cart Item quantity
   - Users can delete Cart Items
- Delete
   - Users can delete their account
 
## TechStack 
**Frontend** 
- React.js
- React Router [^5.1.2] - Declarative Routing
- React Router Dom [^5.1.2] - Declarative Routing
- Redux [4.0.5]
- React UI
- Custom CSS3 styling
- React Stripe Checkout [^2.6.3] 

**Backend**
- Ruby 
- Rails 
- Bcrypt [~> 3.1.7] - Gem for encryption and securing user passwords
- Dotenv - Rails gem for securing API Keys
- JWT - securing tokens
- PostgreSQL [>= 0.18, < 2.0] - Database
- Stripe - Stripe Ruby gives access to the Stripe API from applications written in the Ruby language


## Installing
**Backend Installation:**

- Clone backend repo to your local machine git clone <backend-repo-url>
- run bundle install to install required dependencies
- Ensure you have PostgreSQL running
- run rails db:create to create a database locally.
- run rails db:migrate to create tables into the database.
- run rails db:seed to create seed data.
- run rails s -p 3000 to run the server.
   
**Frontend Installation:**

- Clone this repo to your local machine git clone <this-repo-url>
- Ensure your Backend API is running at http://localhost:3000/
- run npm install to install all dependencies
- run npm start to start server
- When prompted, ensure Frontend is running at http://localhost:3000
