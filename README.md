# Drive-Now Frontend

![Drive Now Home Page](https://github.com/vinudasenith/drive-now-frontend/blob/ecb338c273ff9c2608214dc3c4d94dd643d2acaa/screenshots/drive-now-frontend-seven.vercel.app_.png)


## 🔎 Overview
Drive-Now is a full-stack car rental service built using the MERN stack. This repository contains the frontend of the application, developed with React.js. The frontend provides an intuitive and responsive user interface for customers to browse vehicles, book rentals, and manage their bookings, as well as an admin dashboard for managing vehicles, users, and orders.

## ⭐ Features
### 👤 User Features
- **Browse Vehicles**: View a list of available vehicles with details such as model, price, and availability.
- **Book a Vehicle**: Select a vehicle, choose rental dates, and confirm bookings.
- **Review Management**: Submit  reviews for vehicles to share feedback and rate your experience.
- **Booking Management**: View and manage active and past bookings.
- **User Authentication**: Secure login and registration using JWT-based authentication.
- **Responsive Design**: Optimized for both desktop and mobile devices.

### 🛠️ Admin Features
- **Vehicle Management**: Add, update, or remove vehicles from the inventory.
- **User Management**: View and block/unblock users.
-**Review Management**: View, approve, block, or activate user reviews to maintain quality and relevance.
- **Order Management**: Confirm or cancel user bookings.
- **Dashboard**: Centralized interface to monitor and manage all operations.

## 🧰 Technologies Used
- **React.js**: Frontend library for building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For client-side routing and navigation.
- **Tailwind CSS**: For responsive and modern styling.
- **JWT**: For secure user authentication.


## ⚙️ Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher)
- Access to the Drive-Now backend API (ensure the backend server is running)

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/vinudasenith/drive-now-frontend.git
   cd drive-now-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   VITE_BACKEND_URL=http://localhost:3000/api
   ```
   Replace `http://localhost:3000/api` with the URL of your backend API.

4. **Run the Application**
   ```bash
   npm start
   ```
   The application will start at `http://localhost:5173`.

5. **Build for Production**
   ```bash
   npm run build
   ```
   This generates a production-ready build in the `build` folder.

## 📂 Project Structure
```
drive-now-frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/      
│   ├── components/        # Reusable React components   
│   ├── pages/             # Page components (e.g., Home, VehicleList, Booking)
│   ├── utils/             # store setup, and reusable state logic
│   ├── App.jsx            # Main app component
│   ├── main.jss           # Entry point
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # This file
```

## 📜 Available Scripts
- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## 📄 License
This project is licensed under the MIT License.

## Screenshots of webpages

![Drive Now Login Page](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/drive-now-frontend-seven.vercel.app_contact%20(1).png)
![Drive Now Register Page](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/drive-now-frontend-seven.vercel.app_register.png)
![Drive Now gallery Page](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/drive-now-frontend-seven.vercel.app_gallery.png)
![Drive Now contact Page](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/drive-now-frontend-seven.vercel.app_contact.png)
![Drive Now vehicle Page](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/drive-now-frontend-seven.vercel.app_vehicle.png)
![Drive Now admin users](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/Screenshot_3-8-2025_21727_localhost.jpeg)
![Drive Now admin reviews](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/Screenshot_3-8-2025_21719_localhost.jpeg)
![Drive Now admin vehicles](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/Screenshot_3-8-2025_21712_localhost.jpeg)
![Drive Now admin orders](https://github.com/vinudasenith/drive-now-frontend/blob/master/screenshots/Screenshot_3-8-2025_2171_localhost.jpeg)





