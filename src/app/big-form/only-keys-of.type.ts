/**
 * Creates a type with the same keys as the input type,
 * but with values of a type `any`.
 *
 * T - The original type.
 * @example
 * // Input: { key1: string, key2: number, key3: boolean }
 * // Output: { key1: any, key2: any, key3: any }
 * type ResultType = AnyValues<ExampleType>;
 */
export type OnlyKeysOf<T> = {
  [K in keyof T]: any;
};
