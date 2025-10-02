// 📂 Task 2: Basic CRUD Operations

// 🔍 1. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" })

// 🔍 2. Find books published after a certain year (e.g., after 2000)
db.books.find({ published_year: { $gt: 2000 } })

// 🔍 3. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" })

// ✏️ 4. Update the price of a specific book (e.g., "1984")
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
)

// 🗑️ 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" })



// 📂 Task 3: Advanced Queries

// 🔍 6. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// 🎯 7. Use projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

// 🔼 8. Sort books by price ascending
db.books.find().sort({ price: 1 })

// 🔽 9. Sort books by price descending
db.books.find().sort({ price: -1 })

// 📄 10. Pagination: 5 books per page
// Page 1 (first 5 books)
db.books.find().limit(5).skip(0)

// Page 2 (next 5 books)
db.books.find().limit(5).skip(5)



// 📂 Task 4: Aggregation Pipeline

// 📊 11. Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avgPrice: { $avg: "$price" }
    }
  }
])

// 🏆 12. Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// 📆 13. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: ["$_id", 10] } },
          "s"
        ]
      },
      count: 1,
      _id: 0
    }
  }
])



// 📂 Task 5: Indexing

// ⚡ 14. Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

// ⚡ 15. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 🧪 16. Use explain() to demonstrate performance improvement with indexes
db.books.find({ title: "The Alchemist" }).explain("executionStats")