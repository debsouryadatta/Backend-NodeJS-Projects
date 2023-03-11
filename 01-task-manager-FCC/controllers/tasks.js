const Task = require('../models/Task') // importing mongoose model
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//! Refactoring the code to use async Wrapper

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        // Setting up the custom error class object for the 404 errors
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        // Setting up the custom error class object for the 404 errors
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true, // If we don't provide these 2 properties, we will not get the new value in the response and also validation will not work
    })
    if (!task) {
        // Setting up the custom error class object for the 404 errors
        return next(createCustomError(`No task with id : ${taskID}`, 404))
        // return res.status(404).json({ msg: `No task with id ; ${taskID}`})
    }
    res.status(200).json({ task })
})



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}