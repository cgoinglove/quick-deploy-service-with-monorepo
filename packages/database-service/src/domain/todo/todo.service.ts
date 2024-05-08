import { InjectAble } from '../../helper/di-container';

import { TodoRepository } from './todo.repository';

@InjectAble
export class TodoService {
  constructor(private todoRepo: TodoRepository) {}

  async findAll() {
    return this.todoRepo.selectAll();
  }
}
