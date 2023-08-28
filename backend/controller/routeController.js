// to get all goals
const getGoal = (req,res)=>{
    res.status(200).json({msg: "the goals"})
}


// to create new goals
const setGoal=(req,res)=>{
    res.status(200).json({msg: "goal created"})
}


// to update a specific goal
const updateGoal=(req,res)=>{
    res.status(200).json({msg: `goal with id of ${req.params.id} has been updated`})
}


// to delete a specific goal
const deleteGoal=(req,res)=>{
    res.status(200).json({msg: `goal with id of  ${req.params.id} has been deleted`})
}

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}