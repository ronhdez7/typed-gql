/**
 * Creates a variable that will be required in the variables object
 *
 * @param name Name of variable. If undefined, the field name where it is implemented will be used
 */
export class Variable<
  V = any,
  T extends string | undefined = string | undefined
> {
  constructor(private readonly name?: T) {}

  getName(): T | undefined {
    return this.name;
  }
}

export function v<V = any, T extends string | undefined = string | undefined>(
  name?: T
): Variable<V, T> {
  return new Variable(name);
}
