const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

// Enable CORS for all requests
app.use(cors());

// Middleware to check Authorization header
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader !== "whatever-you-want") {
    return res.status(403).json({ error: "Unauthorized access" });
  }
  next();
});

// Books Data
const books = [
  { title: "The Pragmatic Programmer", authors: ["Andrew Hunt", "David Thomas"], category: "Programming" },
  { title: "Clean Code", authors: ["Robert C. Martin"], category: "Software Development" },
  { title: "The Art of Computer Programming", authors: ["Donald Knuth"], category: "Computer Science" },
  { title: "Introduction to Algorithms", authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"], category: "Algorithms" },
  { title: "Deep Learning", authors: ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"], category: "Artificial Intelligence" },
  { title: "Design Patterns: Elements of Reusable Object-Oriented Software", authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"], category: "Software Engineering" },
  { title: "You Don't Know JS", authors: ["Kyle Simpson"], category: "JavaScript" },
  { title: "Python Crash Course", authors: ["Eric Matthes"], category: "Programming" },
  { title: "The Mythical Man-Month", authors: ["Frederick P. Brooks Jr."], category: "Software Engineering" },
  { title: "Refactoring: Improving the Design of Existing Code", authors: ["Martin Fowler", "Kent Beck"], category: "Software Development" },
  { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"], category: "JavaScript" },
  { title: "Code Complete", authors: ["Steve McConnell"], category: "Software Development" },
  { title: "The C Programming Language", authors: ["Brian W. Kernighan", "Dennis M. Ritchie"], category: "Programming" },
  { title: "JavaScript: The Good Parts", authors: ["Douglas Crockford"], category: "JavaScript" },
  { title: "Artificial Intelligence: A Modern Approach", authors: ["Stuart Russell", "Peter Norvig"], category: "Artificial Intelligence" },
  { title: "Grokking Algorithms", authors: ["Aditya Y. Bhargava"], category: "Algorithms" },
  { title: "Soft Skills: The Software Developer's Life Manual", authors: ["John Sonmez"], category: "Career Development" },
  { title: "Database System Concepts", authors: ["Abraham Silberschatz", "Henry F. Korth", "S. Sudarshan"], category: "Databases" },
  { title: "Computer Networking: A Top-Down Approach", authors: ["James F. Kurose", "Keith W. Ross"], category: "Networking" },
  { title: "Programming Pearls", authors: ["Jon Bentley"], category: "Programming" }
];

// Books endpoint
app.get("/books", (req, res) => {
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
