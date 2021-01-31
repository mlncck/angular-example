import { Injectable } from '@angular/core';

export class LocalStorageUtil {

  static getItem<T>(key: string, defaultValue: T) {
    try {
      if (localStorage.hasOwnProperty(key)) {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
      } else {
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  }

  static setItem(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) { }
  }

  static removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) { }
  }
}

// If there is any default value assigned to property (=) it will change value of LocalStorage data!!!
export function LocalStorage<T>(key: string, defaultValue: T) {
  return function (target: any, propertyName: string) {
    Object.defineProperty(target, propertyName, {
      ...target[propertyName],
      get(): T | unknown {
        return LocalStorageUtil.getItem(key, defaultValue);
      },
      set(value: T): void {
        LocalStorageUtil.setItem(key, value);
      }
    });
  };
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  getItem<T>(key: string, defaultValue: T) {
    return LocalStorageUtil.getItem<T>(key, defaultValue);
  }

  setItem(key: string, value: any) {
    LocalStorageUtil.setItem(key, value);
  }

  removeItem(key: string) {
    LocalStorageUtil.removeItem(key);
  }
}
