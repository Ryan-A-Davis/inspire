import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { todoApi } from "../Services/AxiosService.js"




class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    //TODO Handle this response from the server
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await todoApi.post("", todo);
    //TODO Handle this response from the server
    let temp = ProxyState.todos
    temp.push(new Todo(res.data))
    ProxyState.todos = temp
    console.log(ProxyState.todos)
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    console.log(todo)
    if (todo.completed == true) {
      todo.completed = false
    } else {
      todo.completed = true
    }

    let res = await todoApi.put("/" + todoId, todo);
    //TODO how do you trigger this change
    let temp = ProxyState.todos
    let indextoRemove = temp.findIndex(t => t.id == todo.id)
    temp.splice(indextoRemove, 1, new Todo(res.data))

  }

  async removeTodo(todoId) {
    let res = await todoApi.delete("/" + todoId)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;