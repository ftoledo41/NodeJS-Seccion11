import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const todoController = new TodosController();

    // No va el path (api/todos for example) esto asume que la ruta que envia el middleware, / sera el punto de partida y lo que viene despues, puede ser cualquier cosa, api2/todos, api/v2/todo, etc....
    router.get('/', todoController.getTodos);
    router.get("/:id", todoController.getTodoById);
    router.post("/", todoController.createTodo);
    router.put("/:id", todoController.updateTodo);
    router.put("/:id", todoController.deleteTodo);
    

    return router;
  }
}
