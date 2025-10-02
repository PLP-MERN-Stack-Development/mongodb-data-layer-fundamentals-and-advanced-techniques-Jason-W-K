# 📚 PLP Bookstore MongoDB Assignment

// ============================================
// 🚀 OBJECTIVE
// ============================================
// Learn MongoDB fundamentals:
// - Setup and connection
// - CRUD operations
// - Advanced queries (projection, sorting, pagination)
// - Aggregation pipelines
// - Indexing and performance analysis

// ============================================
// 🛠️ SETUP INSTRUCTIONS
// ============================================

// ✅ REQUIREMENTS:
// - Node.js installed
// - MongoDB Community Edition installed and running locally
// - MongoDB Compass (optional, for visual interface)

// ✅ STEP 1: Clone your GitHub Classroom repository
git clone <your-repo-url>
cd <your-repo-folder>

// ✅ STEP 2: Initialize Node.js project
npm init -y

// ✅ STEP 3: Install MongoDB Node.js driver
npm install mongodb

// ✅ STEP 4: Run the data insertion script
node insert_books.js

// This script will:
// - Connect to MongoDB
// - Create database: plp_bookstore
// - Create collection: books
// - Insert 10+ sample book documents

// ============================================
// 📜 HOW TO RUN QUERIES
// ============================================

// OPTION 1: MongoDB Compass
// - Open Compass and connect to: mongodb://localhost:27017
// - Navigate to: plp_bookstore > books
// - Use the "Filter" tab to run queries from queries.js
// - Use the "Aggregation" tab for pipelines

// OPTION 2: MongoDB Shell (mongosh)
mongosh
use plp_bookstore
// Paste queries from queries.js directly into the shell

// ============================================
// 📂 FILES INCLUDED
// ============================================
// insert_books.js   --> Node.js script to insert sample book data
// queries.js        --> MongoDB queries for CRUD, advanced, aggregation, indexing
// README.md         --> Setup and usage instructions
// screenshot.png    --> Screenshot showing Compass with sample data

// ============================================
// 📸 SCREENSHOT INSTRUCTIONS
// ============================================
// Open MongoDB Compass and show:
// - The plp_bookstore database
// - The books collection
// - At least 3 visible documents
// Save the image as: screenshot.png

// ============================================
// ✅ SUBMISSION CHECKLIST
// ============================================
// [x] Accept GitHub Classroom invitation
// [x] Clone your personal repository
// [x] Add all required files:
//     - insert_books.js
//     - queries.js
//     - README.md
//     - screenshot.png
// [x] Commit and push your changes:
git add .
git commit -m "Week 1 MongoDB project complete"
git push

// Your submission will be auto-graded and reviewed by your instructor.