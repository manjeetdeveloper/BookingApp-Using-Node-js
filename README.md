# Hotel Booking System

A professional hotel booking system built with Node.js, Express, and MongoDB. This system allows users to manage hotels, rooms, and bookings efficiently.

## Features

- **Hotel Management**
  - Create, read, update, and delete hotels
  - Hotel details including name, type, city, address, photos, and ratings
  - Featured hotels highlighting
  - Price tracking with cheapest price feature

- **Room Management**
  - Room creation and management for each hotel
  - Room details including title, price, capacity, and description
  - Room availability tracking
  - Room numbers with unavailable dates tracking

- **User Management**
  - User registration and authentication
  - User profile management
  - Booking history

- **Booking System**
  - Room booking functionality
  - Date-based availability checking
  - Booking confirmation and management

## Tech Stack

- **Backend Framework:** Node.js with Express
- **Database:** MongoDB with Mongoose ODM
- **Environment Variables:** dotenv
- **Development Tools:** nodemon

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bookingapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8500
```

4. Start the development server:
```bash
npm start
```

## API Endpoints

### Hotels
- `GET /api/hotels` - Get all hotels
- `POST /api/hotels` - Create a new hotel
- `GET /api/hotels/:id` - Get hotel by ID
- `PUT /api/hotels/:id` - Update hotel
- `DELETE /api/hotels/:id` - Delete hotel

### Rooms
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms/:hotelId` - Create a new room
- `GET /api/rooms/:id` - Get room by ID
- `PUT /api/rooms/:id` - Update room
- `DELETE /api/rooms/:id` - Delete room
- `GET /api/rooms/hotel/:hotelId` - Get rooms by hotel

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Authentication
- `GET /api/auth` - Authentication endpoint
- `GET /api/auth/register` - User registration endpoint

## Database Schema

### Hotel Schema
- name (String)
- type (String)
- city (String)
- address (String)
- distance (Number)
- photos (Array)
- description (String)
- title (String)
- rating (Number)
- rooms (Array)
- cheapestPrice (Number)
- featured (Boolean)

### Room Schema
- title (String)
- price (Number)
- maxPeople (Number)
- description (String)
- roomNumbers (Array)
- hotelId (ObjectId)

### User Schema
- name (String)
- phone (String)
- password (String)

## Error Handling

The application includes comprehensive error handling for:
- Database connection errors
- Invalid requests
- Not found resources
- Server errors

## Development

The application uses nodemon for development, which automatically restarts the server when changes are detected.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License -

---------------------------------------------------------------

## Frist Commit :-Project Setuop ,Database Connect and Backend Connect
## Second commit:- Get Data and post Data using Dabase and show all data which we get and post
![Screenshot 2025-03-30 185206](https://github.com/user-attachments/assets/44ae84d3-9f19-4ec4-8480-1e79a297bc16)
