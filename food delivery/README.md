# React + Vite  


npm create vite@latest                                                                                                                then type project name and select react and javascript                                                                                    change directory to current project folder:commad-> cd project name                                                                      npm install                                                                                                                             npm run dev ...>vite+react              .........is installed in system                                                                and now set the tailwind css:                                                                                                          npm install -D tailwindcss@3 postcss autoprefixer npx tailwindcss init -p      ....run this command for tailwind css styling           now your project folder contains tailwindcss config file                                                                                in tailqind css config file :content can be modified with: content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

change index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;




Overview:
This is a fully responsive Food Delivery Frontend Application built with React.js and Redux Toolkit. The application allows users to view real-time food items available in the store, add them to the cart, remove items, and place orders seamlessly.

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
        |---store.js
│   ├── assets/
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md

Redux Store Implementation:
cartSlice.js manages the cart state using Redux Toolkit.Users can add or remove items, and quantities update in real-time.


How It Works:

1..Browse Food Items:
Users can see available food items with images, names, and prices.

2...Filter by Category:
Clicking on a category filters the items accordingly.

3....Add Items to Cart:
Clicking on a food item adds it to the cart.

4.....Quantity updates dynamically:

5...Remove Items:
Items can be removed individually.

6...Place Order:
After reviewing the cart, users can proceed to checkout


Features:
1..Real-time item listing: Fetches food items dynamically from a backend or a predefined dataset.
2...Category filtering: Users can filter food items based on categories.
3..Cart management: Add, remove, and update items in the cart.
4..Order placement: Users can proceed to checkout and place an order.
5..Responsive design: Fully optimized for mobile and desktop users.

Tech Stack:

Frontend: React.js, Redux Toolkit

State Management: Redux Toolkit

Styling: Tailwind CSS

Icons: React Icons,Toastify




