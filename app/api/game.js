module.exports = (app, db) => {
  app.get( "/games", (req, res) =>
    db.Game.findAll().then( (result) => res.json(result) )
  );

  app.get( "/game/:id", (req, res) =>
    db.Game.findById(req.params.id).then( (result) => res.json(result))
  );

  app.post("/game", (req, res) =>
    db.Game.create({
      title: req.body.title,
      price: req.body.price,
      details: req.body.details,
      image: req.body.image,
      genre: req.body.genre
    }).then((result) => res.json(result))
  );

  app.put( "/game/:id", (req, res) =>
    db.Game.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  app.delete( "/game/:id", (req, res) =>
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
}
