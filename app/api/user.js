module.exports = (app, db) => {
  app.get( "/users", (req, res) =>
    db.User.findAll().then( (result) => res.json(result) )
  );

  app.get( "/user/:id", (req, res) =>
    db.User.findById(req.params.id).then( (result) => res.json(result))
  );

  app.post("/user", (req, res) =>
    db.User.create({
      username: req.body.Username,
      password: req.body.password
    }).then( (result) => res.json(result) )
  );

}
