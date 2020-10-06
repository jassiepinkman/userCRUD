const express = require('express');
const mongoose  = require('mongoose');
const userData = mongoose.model('userData');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('user/addOrEdit', {
        listTitle : 'Add New User'
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    insertUser(req, res);
});

function insertUser(req, res){
    const user = new userData();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.superHeroName = req.body.superHeroName;
    user.email = req.body.email;
    user.gender = req.body.gender;
    user.age = req.body.age;
    user.save((error, doc) => {
        if(!error)
        res.redirect('user/list');
        else{
            console.log('error : ' +error)
        }
    });
};

router.get('/list', (req, res) => {
    userData.find((err, docs) => {
        if(!err){
            res.render('user/list', {
            list : docs
        });
      }
      else{
        console.log('err : ' +err);
      }
    })
});

router.get('/delete/:id', (req, res) => {
    userData.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/user/list')
        }
        else{
            console.log('error :'+err);
        }
    })
});

router.get('/list', (req, res) => {
    if(req.query.search){
        userData.find({"firstName" :  {$regex: req.query.search, $options: 'i'}}.toArray((err, doc) => {
            if(!err){
                res.render("user/list", {
                list:doc
            })
        }
          else{
                console.log(err);
           }
        })
    )};
})

module.exports = router;

