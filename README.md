# ShopModern Account & Orders

A user account and order management microfrontend built with Lit, TypeScript, Vite, and Material Web. The project includes authentication pages, a user dashboard, order history, wishlist management, and product reviews.

## Features

- Login page
- Registration page
- User dashboard with account statistics and recent activity
- Order history with:
  - Order status filtering
  - Order search
  - Pagination UI
- Wishlist with:
  - Saved products
  - Remove from wishlist
  - Add to cart
  - Recommended products
- Product reviews with:
  - Pending reviews
  - Product rating
  - Review comments
  - Submit review
- Account sidebar navigation
- Reusable Lit components
- Material Web components
- Responsive layout
- Mock data for users, orders, wishlist items, reviews, and dashboard information

## Pages

### Login

Users can log in using their email and password.

### Register

New users can create an account by entering their name, email, phone number, password, and accepting the terms.

### Dashboard

Displays:

- User profile information
- Account statistics
- Recent orders
- Recent activity
- Membership information

### Order History

Displays the user's orders with options to filter orders by status and search for specific orders.

### Wishlist

Displays saved products and allows users to remove items or add them to the cart. It also includes a recommended products section.

### Product Reviews

Displays products that are waiting for a review. Users can select a rating, write a comment, and submit their review.

## Tech Stack

- Lit 3
- TypeScript
- Vite
- Material Web
- HTML
- CSS
- JavaScript

## Project Structure

```text
src/
├── components/
│   ├── buttons/
│   ├── cards/
│   ├── inputs/
│   ├── navigation/
│   ├── orders/
│   ├── reviews/
│   ├── wishlist/
│   ├── profile/
│   ├── stats/
│   ├── activity/
│   └── ...
├── events/
│   ├── navigation-events.ts
│   └── account-events.ts
├── models/
│   ├── order.ts
│   ├── review.ts
│   ├── user.ts
│   └── ...
├── pages/
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   ├── order-history/
│   ├── wishlist/
│   └── reviews/
├── router/
│   └── app-router.ts
├── services/
│   ├── account-service.ts
│   ├── dashboard-service.ts
│   ├── order-service.ts
│   ├── wishlist-service.ts
│   ├── review-service.ts
│   └── mock-data.ts
└── app.ts
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create the production build
npm run preview   # Preview the production build
```

## Application Flow

The application starts with the Login page.

After successful login or registration, the user is taken to the Dashboard.

From the account sidebar, the user can navigate between:

- Profile / Dashboard
- Orders
- Wishlist
- Reviews

The pages are handled through the application's custom navigation and routing system.

## Microfrontend Integration

This project represents the Account & Orders microfrontend of the ShopModern E-commerce application.

It is designed to run independently and can also be integrated into the main Shell application together with the other microfrontends.

The application is deployed separately and can be loaded by the Shell during integration.

## Notes

The project currently uses mock data for users, orders, wishlist items, reviews, and dashboard information.

The application was built as an independent microfrontend so that the Account & Orders functionality can be developed and deployed separately from the other parts of the e-commerce application.

## Deployment

The application is deployed using Vercel.

**Live Demo:**  
https://account-orders-microfrontend.vercel.app/

The deployed application can also be used as the Account & Orders microfrontend when integrating the project with the main Shell application.

## License

This project is for educational purposes.

## Author

Built as the Account & Orders part of the ShopModern E-commerce Microfrontend project using Lit and Material Web.
