const express=require("express");
const router=express.Router();
const {getGoal,setGoal,updateGoal,deleteGoal, getGoalById}= require('../controller/routeController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal).get(getGoalById)





module.exports=router