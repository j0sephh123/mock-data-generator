export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown> | Array<unknown>
    ? DeepReadonly<T[K]>
    : T[K];
};

export type Debug<T extends string | number | symbol> = { [K in T]: K };
