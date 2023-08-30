const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// to get all goals
const getGoal = asyncHandler(async(req,res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// to get a specific goal
const getGoalById= asyncHandler(async (req,res)=>{
    const goalId =req.params.id 
    const goal= await Goal.findById(goalId);

    if(!goal){
        res.status(400);
        throw new Error(`No goal with the id of ${goalId}`)
    }
    res.status(200).json(goal)
} )


// to create new goals
const setGoal= asyncHandler(async(req,res)=>{
    // for you to create a goal you have to use a middleware in the server.js 

    if(!req.body.text){
        res.status(400)
        throw new Error("Please fill the text field");
    }
    const goals= await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goals)
})


// to update a specific goal
const updateGoal= asyncHandler(async(req,res)=>{
    const goal= await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})


// to delete a specific  goal
const deleteGoal= asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id);

    if (!goal){
        res.status(400);
        throw new Error("Goal not found")
    }
    await goal.deleteOne()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
    getGoalById
}