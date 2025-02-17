# Food Delivery Frontend Application

## Overview
This is a fully responsive **Food Delivery Frontend Application** built with React.js and Redux Toolkit. The application allows users to view real-time food items available in the store, add them to the cart, remove items, and place orders seamlessly.

## Features
- **Real-time item listing**: Fetches food items dynamically from a backend or a predefined dataset.
- **Category filtering**: Users can filter food items based on categories.
- **Cart management**: Add, remove, and update items in the cart.
- **Order placement**: Users can proceed to checkout and place an order.
- **Responsive design**: Fully optimized for mobile and desktop users.

## Tech Stack
- **Frontend**: React.js, Redux Toolkit
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/food-delivery-frontend.git
   cd food-delivery-frontend
   ```
2. **Install dependencies**
   ```bash
   npm create @vitelatest
   cd project_folder
   npm install
   npm install -D tailwindcss@3 postcss autoprefixer npx tailwindcss init -p 

npm install react-icons
npm install @reduxjs/toolkit react-redux
   ```
3. **Run the application**
   ```bash
   npm run dev
   ```
## Folder Structure
```
food-delivery-frontend/
├── src/
│   ├── components/
│   │   ├── Nav.js
│   │   ├── Card.js
│   │   ├── Card2.js
│   ├── pages/
│   │   ├── Home.js
│   ├── context/
│   │   ├── UserContext.js
│   ├── redux/
│   │   ├── cartSlice.js
│   ├── assets/
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md
```

## Redux Store Implementation
- **cartSlice.js** manages the cart state using Redux Toolkit.
- Users can add or remove items, and quantities update in real-time.

## How It Works
1. **Browse Food Items**
   - Users can see available food items with images, names, and prices.
2. **Filter by Category**
   - Clicking on a category filters the items accordingly.
3. **Add Items to Cart**
   - Clicking on a food item adds it to the cart.
   - Quantity updates dynamically.
4. **Remove Items**
   - Items can be removed individually.
5. **Place Order**
   - After reviewing the cart, users can proceed to checkout.

## Future Enhancements
- **Backend Integration**: Connect with a database for real-time order tracking.
- **User Authentication**: Login/signup functionality.
- **Payment Gateway**: Integrate Razorpay, Stripe, or PayPal.

## Contributing
Feel free to contribute by submitting pull requests or reporting issues.

## License
This project is licensed under the MIT License.

