var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function (req, res) {
        console.log("in controller");
        User.create(req.body, function (err, user) {
            if (err) {
                console.log(err);
                res.json({ "status": "error" })
            }
            else {
                console.log("success");
                res.json(user);
            }
        })
    },

    login: function (req, res) {
        console.log("in controller");
        var email = req.body.email;       
        User.findOne({$and:[{ email: email} ,{pwd:req.body.pwd}]}, function (err, user) {
            if (err) {
                res.json({ "status": "Please enter correct username or password" })
            } else {
                console.log('successfully logged in');
                res.json(user);
            }
        })        
    },
    addinterests: function (req, res){
        User.update({_id: req.body.user_id}, { $set: { interests: req.body.result }}, function(err, result){
            if (err){
                console.log(err);
            } else {
                console.log("successfully added model");
            }
        });
    },
    findOne: function (req, res){
        User.findOne({ email: req.body.email }, function(err, user){
            if (err){
                console.log(err);
            } else {
                console.log("got user");
                res.json(user);
            }
        });
    },
    addRequest: function (req, res){
        User.update({_id: req.params.id}, { $push: { requests: req.body.user_id }}, function(err, result){
            if (err){
                console.log(err);
            } else {
                console.log("successfully added request");
            }
        });
    },
    getRequestedUsers: function (req, res){
        User.find({ _id: { $in: req.body.requests } }, function(err, users){
            if (err){
                console.log(err);
            } else {
                console.log('successfully found users');
                res.json(users);
            }
        });
    },
    linkAccount: function (req, res){
        //welcome to hell
        User.findOne({_id: req.body.accept_id}, function(err, user_accepting){
            if (err){
                console.log(err);
            } else {
                User.findOne({_id: req.body.request_id}, function(err, user_requesting){
                    if (err){
                        console.log(err);
                    } else {
                        user_accepting._partner = user_requesting._id;
                        user_accepting.save(function(err){
                            if (err){
                                console.log(err);
                            } else {
                                console.log("successfully saved user accepting")
                                user_requesting._partner = user_accepting._id;
                                user_requesting.save(function(err){
                                    if (err){
                                        console.log(err);
                                    } else {
                                        console.log("successfully saved user requesting");
                                    }
                                });
                            }
                        })
                    }
                });
            }
        });
    }
}