import {Router} from 'express'  //importando enrutador de express
import {authRequired} from '../middlewares/validateToken.js'
import {getTasks, getTask, createTask, deleteTask, updateTask} from '../controllers/tasks.controller.js' //importando controladores

const router = Router()   //ejecutando router 

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired, createTask);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router 