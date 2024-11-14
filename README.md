# Angular E-commerce Admin Dashboard

This project is an e-commerce admin dashboard built using Angular and the FakeStore API. It allows an admin to manage products and users by handling tasks like authentication, CRUD operations, and basic dashboard functionalities.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
- [Requirements](#requirements)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Additional Notes](#additional-notes)
- [License](#license)


## Objective
The main objective of this project is to create a fully functional e-commerce admin dashboard where users can log in, view, add, edit, and delete products, and view users. This project aims to demonstrate knowledge of Angular fundamentals, routing, form handling, HTTP requests, and error handling.

## Features
### User Authentication
- Login functionality with token-based authentication.
- Redirect to the main dashboard after successful login.
- Authorization to protect routes from unauthorized access.

### Product Management
- **Product List**: Fetch and display all products from the API.
- **Product Details**: Display detailed information about a selected product.
- **Add Product**: Add a new product with a form submission.
- **Update Product**: Edit an existing product’s details.
- **Delete Product**: Remove a product from the database.

### User Management
- **User List**: Display all users with basic details like username and email.

### Additional Features
- Error handling with user-friendly messages for failed API calls.
- Search and filter products in the product list.
- Pagination for product and user lists.
- Responsive design for mobile-friendliness.

## Requirements
- Angular CLI for setting up and running the Angular project.
- Node.js and npm for managing packages.
- API credentials (username/password) for testing authentication with the FakeStore API.

## Technologies Used
- **Angular**: Framework for building web applications.
- **Angular Material** (optional): For UI components and styling.
- **FakeStore API**: Mock API for products and users.
- **Local Storage**: For storing authentication tokens.

## Setup and Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed on your machine.

1. Clone the repository:
    ```bash
    git clone https://github.com/nkululeko111/e-commerce-admin-dashboard.git
    cd e-commerce-admin-dashboard/e-commerce-admin-dashboard
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    ng serve
    ```
    - Navigate to `http://localhost:4200/` in your browser.

4. Configure environment variables in `src/environments/environment.ts` for any API keys or custom settings.

## API Endpoints
These endpoints are provided by the FakeStore API:

| Feature                  | Endpoint                                       | Method |
|--------------------------|-----------------------------------------------|--------|
| Login                    | `/auth/login`                                  | POST   |
| Get All Products         | `/products`                                    | GET    |
| Get One Product          | `/products/{id}`                               | GET    |
| Add Product              | `/products`                                    | POST   |
| Update Product           | `/products/{id}`                               | PUT    |
| Delete Product           | `/products/{id}`                               | DELETE |
| List All Users           | `/users`                                       | GET    |

## Folder Structure

```plaintext
src
├── app
│   ├── components         # Individual components (e.g., ProductList, UserList)
│   ├── services           # API services for data fetching and handling
│   ├── guards             # AuthGuard for route protection
│   ├── models             # TypeScript interfaces and types
│   ├── pages              # Login, Dashboard, Product Management, User Management
│   └── app-routing.module.ts  # Route configurations
├── assets                 # Static assets like images and fonts
└── environments           # Environment settings for dev and prod
```

## Usage

### Authentication
1. Visit the login page and enter your credentials.
2. Upon successful login, a token is stored in local storage and the user is redirected to the dashboard.
3. The app uses an Auth Guard to ensure only logged-in users can access certain routes.
 or 

For the FakeStore API, the default credentials are:

Username: mor_2314

Password: 83r5^_

### Product Management
- Navigate to the **Products** section to view all available products.
- Select a product to view more details or edit its information.
- Use the **Add Product** button to create new products.

### User Management
- Navigate to the **Users** section to view the list of users.

## Additional Notes
- **Error Handling**: The app displays friendly error messages in case of any API failures.
- **Authentication Token**: For simplicity, the token is stored in local storage, but for production use, consider a more secure storage solution.
- **Environment**: Configure the API base URL in `environment.ts` to switch between development and production.

## License
This project is licensed under the MIT License.


