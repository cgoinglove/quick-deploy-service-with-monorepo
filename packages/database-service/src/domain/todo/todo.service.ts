import { inject } from '../../helper/di-container';
import { TodoRepository } from './todo.repository';

export class TodoService {
  private todoRepo = inject(TodoRepository);

  async findAll() {
    return this.todoRepo.selectAll();
  }
}
