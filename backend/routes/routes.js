const express = require("express");
const router = express.Router();
const book=require("../model/book");
const booksController = require("../controllers/book-controller");


router.get("/", booksController.getAllBooks);
router.post("/", booksController.addbook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;