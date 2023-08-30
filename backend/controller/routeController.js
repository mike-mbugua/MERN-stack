const asyncHandler = require('express-async-handler')

// to get all goals
const getGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({msg: "the goals"})
})


// to create new goals
const setGoal= asyncHandler(async(req,res)=>{
    // for you to create a goal you have to use a middleware in the server.js 
console.log(req.body)

    if(!req.body.text){
        res.status(400)
        throw new Error("Please fill the text field");
    }
    res.status(200).json({msg: "goal created"})
})


// to update a specific goal
const updateGoal= asyncHandler(async(req,res)=>{
    res.status(200).json({msg: `goal with id of ${req.params.id} has been updated`})
})


// to delete a specific  goal
const deleteGoal= asyncHandler(async(req,res)=>{
    res.status(200).json({msg: `goal with id of  ${req.params.id} has been deleted`})
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}