/**
 * Created by Hernan Y.Ke on 2015/5/25.
 */
'use strict';

var IndexModel =require('../models/index');

module.exports = function(router){
    var model = new IndexModel();

    router.get('/',function(req,res){
        res.render('index',model);
    });
};