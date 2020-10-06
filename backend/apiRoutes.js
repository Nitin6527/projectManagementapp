const express = require('express');
const adminControllerUser = require('./controllers/user');
const adminControllerClient = require('./controllers/client');
const adminControllerManager = require('./controllers/manager');
const router = express.Router();

router.post('/signup',adminControllerUser.signup);
router.post('/login_Manager',adminControllerUser.login_Manager);
router.post('/login_Client',adminControllerUser.login_Client);
router.get('/client/task',adminControllerClient.getTask);
router.get('/client/task/:id',adminControllerClient.getTask);
router.post('/client/update_Progress/:id',adminControllerClient.updateProgress);
router.get('/manager/task',adminControllerManager.getTask);
router.post('/manager/update_task/:id',adminControllerManager.UpdateTask);
router.get('/manager/update_task/:id',adminControllerManager.getTask);
router.get('/manager/manager_Info',adminControllerManager.getManager);

module.exports = router;