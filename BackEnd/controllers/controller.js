const Model = require('../models/model');

exports.getExpenses = async (req, res, next) =>{
    try{
        // console.log("fetchQuery");
        const expenses = await Model.findAll();
        res.send(expenses);
    }
    catch(err){console.log(err)}
}

exports.deleteExpenses = async (req, res, next) =>{

    try{
        await Model.destroy({
            where: {
              id: req.params.id,
            },
        });
        res.redirect('/');
    }
    catch(err){console.log(err)}
    
}


exports.postExpenses = async (req, res, next) =>{

    try{
        const amount= req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        res.send(await Model.create({
            amount:amount,
            description:description,
            category:category
        }))
    }
    catch(err){console.log(err)}  
}