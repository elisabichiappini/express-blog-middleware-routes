const express = require("express");
const router = express.Router();

//importiamo qui il controller perchè ci saranno due rotte con "/" in get e post
const postsController = require("../controllers/posts.js");

//settiamo il bodyparser, con extended true per leggere array e oggetti se no li legge come stringhe
router.use(express.urlencoded({extended: true}));

//rotta /posts
router.get("/", postsController.show);
router.post("/", postsController.store);

//per esportazine
module.exports = router;