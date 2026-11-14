ShopMe – Full-Stack MERN E-Commerce Application

**ShopMe** is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides an online shopping experience with product browsing, user authentication, shopping cart, checkout, order management, product reviews, and an admin dashboard.

## 🚀 Live Demo

**[Visit ShopMe – Live Website](https://shop-me-mern-e-commerce.vercel.app/)**

**GitHub Repository:** [ShopMe – Source Code](https://github.com/AK-Amit-singh/ShopMe-MERN-ECommerce)

## ✨ Features

### User Features
- User registration and secure login.
- Browse and search products.
- View product details, ratings, and reviews.
- Add products to the shopping cart.
- Update product quantities and remove items.
- Manage shipping details.
- Place and view orders.
- Submit product reviews.

### Admin Features
- Admin authentication and protected routes.
- Create, update, and delete products.
- Manage product listings.
- View and manage registered users.
- View and manage customer orders.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Redux Toolkit | State management |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | Database modelling |
| JWT | Authentication |
| Bootstrap | Responsive UI |
| Vercel | Frontend deployment |
| Render | Backend deployment |

## 📂 Project Structure

```text
ShopMe-MERN-ECommerce/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── screens/
│       ├── slices/
│       ├── utils/
│       └── App.js
│
└── README.md
```

⚙️ Installation and Setup

1. Clone the Repository

```bash
git clone https://github.com/AK-Amit-singh/ShopMe-MERN-ECommerce.git

cd ShopMe-MERN-ECommerce
```

2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAGINATION_LIMIT=8
```

### 3. Start the Backend

```bash
npm run server
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Start the Frontend

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## 🔐 Authentication and Security

- JWT-based authentication.
- HTTP-only authentication cookies.
- Protected routes for authenticated users.
- Role-based access control for admin functionality.
- Environment variables for sensitive configuration.

🌐 Deployment

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB |

The frontend communicates with the deployed backend through API rewrite configuration.

🎯 Project Objective

The objective of ShopMe is to build a practical full-stack e-commerce application that demonstrates frontend development, REST API integration, database management, authentication, state management, and deployment.

👨‍💻 Author

Amit Kumar

- GitHub: [AK-Amit-singh](https://github.com/AK-Amit-singh)
- Project: [ShopMe – Live Demo](https://shop-me-mern-e-commerce.vercel.app/)

---

⭐ If you find this project useful, feel free to explore the repository and check out the live application.
