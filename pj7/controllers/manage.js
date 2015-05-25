/**
 * Created by Hernan Y.Ke on 2015/5/25.
 */
'use strict';


module.exports = function(router){


    router.get('/',function(req,res){
        res.render('index');
    });

    router.get('/details/:id',function(req,res){
        res.render('books/details');
    });
};