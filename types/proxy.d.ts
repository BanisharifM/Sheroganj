interface MyProxyHandler<T extends object, K extends keyof T = keyof T, R = typeof T[K]> {
  getPrototypeOf?(target: T): object | null;

  setPrototypeOf?(target: T, v: any): boolean;

  isExtensible?(target: T): boolean;

  preventExtensions?(target: T): boolean;

  getOwnPropertyDescriptor?(target: T, p: K): PropertyDescriptor | undefined;

  has?(target: T, p: K): boolean;

  get?(target: T, p: K, receiver: any): R;

  set?(target: T, p: K, value: R, receiver: any): boolean;

  deleteProperty?(target: T, p: K): boolean;

  defineProperty?(target: T, p: K, attributes: PropertyDescriptor): boolean;

  enumerate?(target: T): K[];

  ownKeys?(target: T): K[];

  apply?(target: T, thisArg: any, argArray?: any): any;

  construct?(target: T, argArray: any, newTarget?: any): object;
}

interface MyProxyConstructor {
  revocable<T extends object, K extends keyof T = keyof T, R = typeof T[K]>(
    target: T,
    handler: MyProxyHandler<T, K, R>
  ): {proxy: T; revoke: () => void};

  new <T extends object, K extends keyof T = keyof T, R = typeof T[K]>(target: T, handler: MyProxyHandler<T, K, R>): {
    [key in keyof T]: R;
  };
}

declare var MyProxy: MyProxyConstructor;
