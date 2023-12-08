const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userControll')
const projectController = require('../Controller/projectControll')
const jwtMiddlewear = require('../Middlewares/jwtmiddleware')
const multerConfig = require('../Middlewares/multermiddleware')


//register
router.post('/user/register', userController.register)

//login
router.post('/user/login',userController.login)

//addprojects
router.post('/project/add',jwtMiddlewear,multerConfig.single('projectImage'),projectController.addprojects)

//getuserprojects
router.get('/user/all-projects',jwtMiddlewear,projectController.allUserProjects)

//deleteproject
router.delete('/projects/remove/:id',projectController.deleteProjectController)

module.exports = router