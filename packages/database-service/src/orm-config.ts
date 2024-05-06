import 'reflect-metadata';
import '@repo/load-global-env';
import { IS_DEV_MODE, RUNTIME } from '@repo/shared/const';
import { DataSource } from 'typeorm';
import { logger } from './helper/logger';
import { Todo } from './domain/todo/todo.entity';

const {
  GLOBAL_DB_HOST,
  GLOBAL_DB_PORT,
  GLOBAL_DB_USERNAME,
  GLOBAL_DB_PASSWORD,
  GLOBAL_DB_DATABASE,
} = process.env as Record<string, string>;

IS_DEV_MODE &&
  logger.info({
    DESC: 'DB-SOURCE',
    DATA: {
      RUNTIME,
      IS_DEV_MODE,
      GLOBAL_DB_HOST,
      GLOBAL_DB_PORT,
      GLOBAL_DB_USERNAME,
      GLOBAL_DB_PASSWORD,
      GLOBAL_DB_DATABASE,
    },
  });

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: GLOBAL_DB_HOST,
  port: +GLOBAL_DB_PORT,
  username: GLOBAL_DB_USERNAME,
  password: GLOBAL_DB_PASSWORD,
  database: GLOBAL_DB_DATABASE,
  // synchronize: Boolean(IS_DEV_MODE),
  // logging: Boolean(IS_DEV_MODE),
  logging: false,
  entities: [Todo],
});
