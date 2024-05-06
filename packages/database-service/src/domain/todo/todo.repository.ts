import { Repository } from '../../helper/di-container';
import { AppDataSource } from '../../orm-config';
import { Todo } from './todo.entity';

@Repository
export class TodoRepository {
  private todoRepo = AppDataSource.getRepository(Todo);

  async selectAll() {
    return this.todoRepo.find({});
  }

  async insert(todo: Pick<Todo, 'title' | 'content'>) {
    return this.todoRepo.save({ ...todo, complete: false });
  }

  async delete(todo: Todo | Todo['id']) {
    return this.todoRepo.delete(todo);
  }
}
