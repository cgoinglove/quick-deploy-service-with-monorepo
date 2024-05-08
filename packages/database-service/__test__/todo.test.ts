import { describe, test } from 'vitest';
import 'reflect-metadata';
import { TodoService } from '../src/domain/todo/todo.service';
import { inject } from '../src/helper/di-container';

const todoService = inject(TodoService);

describe('todo', () => {
  //   test('insert', async () => {
  //     const todo = await todoService.insert({
  //       title: 'Test Title',
  //       content: 'Test Content',
  //     });
  //     logger.info(todo);
  //     await todoService.delete(todo);
  //   });

  test('select All ', async () => {
    const todoList = await todoService.findAll();
    console.log(todoList);
  });
});
