const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
// Get the book list available in the shop
public_users.get('/', function (req, res) {
  // Assuming 'books' is an object or array of book entries
  let list = [];
  // If 'books' is an object like: { "1": {...}, "2": {...}, ... }
  for (let key in books) {
    list.push(books[key].title);
  }
  // Send response
  return res.status(200).json(list);
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let isbn=req.params.isbn;
  let info={};
    for(let key in books){
        if(key==isbn)
            { info=books[key]; break;}
    }
  return res.status(300).json(info);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author=req.params.author;
  let details={};
  for(let key in books){
    if(books[key].author==author) {details=books[key]; break;}
  }
  return res.status(300).json(details);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title=req.params.title;
  let ans={};
  for(let key in books){
    if(books[key].title==title){
        ans=books[key];
        break;
    }
  }
  return res.status(300).json(ans);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    let isbn=req.params.isbn;
    let reviews={};
      for(let key in books){
        
          if(key==isbn)
              { reviews=books[key].reviews; break;}
      }
  return res.status(300).json(reviews);
});

module.exports.general = public_users;
