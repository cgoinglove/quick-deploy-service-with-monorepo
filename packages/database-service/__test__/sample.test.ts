import { beforeAll, describe, test } from 'vitest';
import { AppDataSource } from '../src/orm-config';
import { Todo } from '../src/domain/todo/todo.entity';

describe('sample', () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });
  test('first test', async () => {
    const todoRepo = AppDataSource.getRepository(Todo);

    const todoList = await todoRepo.find();
    console.log(todoList);
  });
});
