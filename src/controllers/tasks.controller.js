import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
   const tasks = await Task.find({
    user: req.user.id //esto es para que se traigan solo las tareas del usuario que esta logueado, que viene del token
   }).populate('user', 'username'); //populate es para que se traiga el username del usuario que creo la tarea, que viene del modelo User
   //el primer parametro es el campo que se quiere poblar, y el segundo es el campo que se quiere traer del modelo User
   res.json(tasks);
};

export const createTask = async (req, res) => {
    const { title, description, date} = req.body  //esto sera lo que se recibe del body de la peticion
    const newTask = new Task({
         title, 
         description, 
         date,
         user: req.user.id //esto es para que se guarde el id del usuario que creo la tarea, que viene del token
        }); //creando una nueva tarea con los datos recibidos
    const savedTask = await newTask.save(); //guardando la nueva tarea en la base de datos
    res.json(savedTask); //enviando la tarea guardada como respuesta
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id) //buscando la tarea por su id que se recibe como parametro
    if (!task) return res.status(404).json({ message: 'Task not found' }); //si no se encuentra la tarea, se devuelve un error 404
    res.json(task).populate('user', 'username'); //si se encuentra la tarea, se devuelve como respuesta
};

export const updateTask = async (req, res) => {    //new>true sirve para que se devuelva el objeto actualizado
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true}) //buscando la tarea por su id que se recibe como parametro y se actualiza
    if (!task) return res.status(404).json({ message: 'Task not found' }); //si no se encuentra la tarea, se devuelve un error 404
    res.json(task);
};

export const deleteTask = async (req, res) => {
            const task = await Task.findByIdAndDelete(req.params.id) //buscando la tarea por su id que se recibe como parametro y eliminandola
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return  res.status(204).send(); //si se elimina la tarea, se devuelve un codigo 204 sin contenido
};