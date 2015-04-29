/**
 * Created by Hernan Y.Ke on 2015/4/29.
 */
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db=require('monk')('localhost/nodeblog');

/* GET home page. */
router.get('/add', function(req, res, next) {
    res.render('addcategory',{
        "title":"Add Category"
    });
});


router.post('/add',function(req,res,next){
    var title =req.body.title;

    req.checkBody('title','Title is required').notEmpty();

    var errors=req.validationErrors();

    if(errors){
        res.render('category',{
            "errors":errors,
            "title":title

        });
    }else{
        var categories=db.get('categories');
        categories.insert({
            "title":title
        },function(err,category){
            if(err){
                res.send("Error happened");
            }else{
                req.flush('success','Categories submitted');
                res.location('/');
                res.redirect('/');
            }
        })
    }
});


module.exports = router;
