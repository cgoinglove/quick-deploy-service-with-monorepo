import { describe, test } from 'vitest';

import { TodoService } from '../src/domain/todo/todo.service';

describe('todo', () => {
  const todoService = new TodoService();

  //   test('insert', async () => {
  //     const todo = await todoService.insert({
  //       title: 'Test Title',
  //       content: 'Test Content',
  //     });
  //     logger.info(todo);
  //     await todoService.delete(todo);
  //   });

  test('select All ', async () => {
    console.log(todoService);
    const todoList = await todoService.findAll();
    console.log(todoList);
  });
});
