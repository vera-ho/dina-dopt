# Dina-Dopt
Check out the live app [here.](https://dina-dopt.herokuapp.com/) \
For design documentation, see wiki [here.](https://github.com/vh71886/dina-dopt/wiki)

## Introduction
Dina-Dopt is a MERN stack web application that allows users to adopt and review prehistoric pets. It is created for educational purposes only. Please do not enter any sensitive data while exploring Dina-Dopt.

### Technologies Used
* Frontend: `React and Redux`
    - `react-redux`
    - `redux-thunk`
    - `react hooks`
* Backend: `Express`
    - `bcryptjs` - user authentication`
    - `passportjs`
    - `jsonwebtoken`
* Database: `MongoDB`
* Languages
    - `Javascript`
    - `HTML and CSS`
* Hosting: Heroku

## Functionality and Features
The following are completed features for Dina-Dopt:
* `User` authenticaion
* `Pet` listing and details
* `Review` creation and listing
* `Cart` CRUD

Key features for the completed project, including 1 full `CRUD` cycle: 
* Users:
    - User authentication - register, signin, logout
    - Ability to:
        - `View` pets and pet details
        - `Create`, `Read`, `Update` and `Destroy` cart items
        - `Create` and `Read` reviews
* Pets:
    - `Searchable` by pet name and type
    - `Show` pet details
        - Basic information: name, type, description
        - Media: Pet images, hosted on AWS S3
* Cart:
    - 
* Reviews:
    - Reviews for a pet are shown on the pet's details page, from all users
    - Reviews for a pet can be written on the pet's details page
    - To create a review, a user must be logged in

More information for each feature can be found below.

### Users
Users are able to register for an account, login, and logout as needed on the website. The user authentication on the backend uses Express with BCrypt to secure password information. 

### Pets
Users are able to search pets by their names or pet types in the index page and see pet details on the pet details page. The pet details page will show the pet's name, type, description, and price. 

### Cart
Pets can be added to the cart on both the pets index page and pet details page by clicking the `Add to Cart` button. 

### Reviews
Reviews are created and shown on the pet details page. 