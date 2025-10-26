Favorite Movies & TV Shows API

A simple RESTful backend service built with Node.js, Express, Prisma, and MySQL to manage a list of favorite movies and TV shows.
Supports CRUD operations, pagination, input validation, and search (bonus).


Features

Add, list, update, and delete movie/TV show entries
Pagination (page & limit)
Input validation with Zod
Search by title (case-insensitive)
Database seeding with sample data
Clean, modular code structure


Tech Stack

Technology,Purpose
Node.js,Runtime
Express,Web framework
MySQL,Database
Prisma ORM,Database access & migrations
Zod,Schema validation


Setup Instructions
1. Clone & Install Dependencies
git clone <this-repo-url>
cd server (if not inside server folder)
npm install


2. Configure the Database
Start MySQL and create a database:
CREATE DATABASE favorites;

Create a .env file in the root:
DATABASE_URL="mysql://root:your_password@localhost:3306/favorites"

3. Run Database Migrations
npx prisma migrate dev --name init

4. Seed the Database
node prisma/seed.js

5. Start the Server
Development (with auto-restart) -> npm run dev
Production -> npm start


API Endpoints

Method    Endpoint                       Description
POST      /api/entries                   Add a new entry
GET       /api/entries                   List entries with pagination
PUT       /api/entries/:id               Update an entry
DELETE    /api/entries/:id               Delete an entry
GET       /api/search?title=...          Search by title (bonus)