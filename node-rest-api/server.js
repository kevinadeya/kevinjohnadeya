require('./server/config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {JoinCrossing} = require('./models/join');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/join', (req, res) => {
  var join = new JoinCrossing({
    name: req.body.name,
    email: req.body.email,
    birth: req.body.birth,
    city: req.body.city,
    type: req.body.type,
    newsletter: req.body.newsletter
  });

  join.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/join', (req, res) => {
  JoinCrossing.find().then((join) => {
    res.send({join});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/join/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((join) => {
    if (!join) {
      return res.status(404).send();
    }

    res.send({join});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/join/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  JoinCrossing.findByIdAndRemove(id).then((join) => {
    if (!join) {
      return res.status(404).send();
    }

    res.send({join});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/join/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['name', 'mail','birth','city','type','newsletter']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  JoinCrossing.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!join) {
      return res.status(404).send();
    }

    res.send({join});
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};