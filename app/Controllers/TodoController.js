import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";
import Todo from "../Models/Todo.js"

//TODO Create the draw function
function _drawTodos() {
  document.getElementById('todos').innerHTML = `${Todo.Card()}`
}

export default class TodoController {
  constructor() {
    ProxyState.on('todos', _drawTodos)
    todoService.getTodos();
    _drawTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    debugger
    e.preventDefault();
    let form = e.target;
    //TODO build the todo object from the data that comes into this method
    let todo = {
      description: form.newTodo.value
    };
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be toggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}