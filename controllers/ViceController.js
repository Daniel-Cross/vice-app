const ViceModel = require('../models/ViceModel');
// Create a new vice
exports.post = (req, res) => {
  const viceModel = new ViceModel({
    name: req.body.name,
    amount: req.body.amount,
  });
  viceModel.save((err, viceCreated) => {
    res.json(viceCreated);
  });
};
// Finding all vices and returning a list
exports.list = (req, res) => {
 ViceModel.find({}, (err, viceList) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(viceList);
  });
};

exports.get = (req, res) => {
 ViceModel.findById(req.params.viceId, (err, viceModel) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(viceModel);
  });
};

exports.put = (req, res) => {
  ViceModel.findById(req.params.viceId, (err, viceModel) => {
    if (err) {
      res.json('Something went wrong');
    }

    viceModel.set({ name: req.body.name });
    viceModel.set({ amount: req.body.amount });

    viceModel.save((updateErr, viceUpdated) => {
      if (updateErr) {
        res.json('Could not update');
      }

      res.json(viceUpdated);
    });
  });
};

exports.delete = (req, res) => {
  ViceModel.findByIdAndRemove(req.params.viceId, (err) => {
    if (err) {
      res.json('Something went wrong');
    }

    res.json('Vice deleted');
  });
};