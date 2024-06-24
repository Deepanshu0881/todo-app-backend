const Todo = require('../models/todo');

//create a new todo
exports.createTodo = async (req,res)=>{
    try{
        const todo = new Todo({
            title:req.body.title,
        });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};


//get all todos
exports.getTodos = async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

//Update a todo
exports.updateTodo = async (req,res)=>{
    try{
        const updateTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json(updateTodo);
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};


//Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Todo deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };