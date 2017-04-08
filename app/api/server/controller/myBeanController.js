var mongoose = require('mongoose'),
    MyBean = require('../model/index').myBean;

exports.createMyBean = function(req, res) {
    var newBean = new MyBean(req.body);
    newBean.save(function(err, myBean) {
        if (err)
            res.send(err);
        res.json(myBean);
    });
};

exports.listAllBeans = function(req, res) {
    MyBean.find({}, function(err, myBeans) {
        if (err)
            res.send(err);
        res.json(myBeans);
    });
};


exports.updateMyBean = function(req, res) {
    MyBean.findOneAndUpdate(req.params.BeanID, req.body, { new: true }, function(err, myBean) {
        if (err)
            res.send(err);
        res.json(myBean);
    });
};



exports.deleteMyBean = function(req, res) {
    MyBean.remove({ ID: req.params.BeanID }, function(err, myBean) {
        if (err)
            res.send(err);
        res.json({ message: 'Bean with ID: ' + req.params.BeanID + ' successfully deleted!' });
    });
};