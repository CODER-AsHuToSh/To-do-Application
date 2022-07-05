import express from 'express';
import { createTodo, deleteTodo, readTodos, updateTodo,readTodo } from '../controller/todos.js';

const router = express.Router();
router.get('/', readTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo)
router.get('/:id', readTodo)
router.delete('/:id', deleteTodo);
export default router;