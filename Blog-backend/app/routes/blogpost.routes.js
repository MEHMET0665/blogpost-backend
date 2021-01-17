module.exports = app => {
  const blogposts = require("../controllers/todoitem.controller.js");

  var router = require("express").Router();

  // Create a new todo item
  router.post("/", blogposts.create);

  // Retrieve all todo items
  router.get("/", blogposts.findAll);

  // Retrieve all completed todo items
  router.get("/completed", blogposts.findAllCompleted);

  // Retrieve a single todo item with id
  router.get("/:id", blogposts.findOne);

  // Update a todo item with id
  router.put("/:id", blogposts.update);

  // Delete a todo item with id
  router.delete("/:id", blogposts.delete);

  // Delete all todo items
  router.delete("/", blogposts.deleteAll);

  app.use('/api/blogposts', router);
};