import { AppDataSource } from '../orm-config';
import { logger } from './logger';
import { storageFactory } from './metadata-storage';

const ProxyForDatabaseInitialize = <T extends object>(obj: T): T =>
  new Proxy(obj, {
    get(t, k) {
      const value = t[k as keyof typeof t];
      if (typeof value == 'function')
        return new Proxy(value, {
          apply(fn, self, args) {
            const result = fn.apply(self, args);
            if (!AppDataSource.isInitialized && result instanceof Promise)
              return result.catch(() =>
                AppDataSource.initialize().then(() => fn.apply(self, args)),
              );
            return result;
          },
        });

      return value;
    },
  });

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class RepositoryContainer {
  private static container = storageFactory('database-repository');

  /**
   *  target 생성자에 args 사용하지 않는 클래스만 사용
   */
  static inject<T>(target: { new (): T }): T {
    if (!RepositoryContainer.container.has(target)) {
      throw new Error(`${target.name} 등록되지 않는 Class 입니다.`);
    }

    return RepositoryContainer.container.get(target) as T;
  }

  static register<T>(Target: { new (): T }) {
    if (RepositoryContainer.container.has(Target)) return;
    try {
      const instance = new Target();
      RepositoryContainer.container.set(
        Target,
        ProxyForDatabaseInitialize(instance as object),
      );
    } catch (e) {
      logger.debug(`${Target.name} register error`);
      throw e;
    }
  }
}

// eslint-disable-next-line @typescript-eslint/unbound-method
export const Repository = RepositoryContainer.register;
// eslint-disable-next-line @typescript-eslint/unbound-method
export const inject = RepositoryContainer.inject;
