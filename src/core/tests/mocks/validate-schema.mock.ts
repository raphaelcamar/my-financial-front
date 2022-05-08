export class ValidateSchema<T, K> {
  constructor(private schema: T | any, private data: K) {}

  async validate() {
    const isValid = await this.schema.isValid(this.data);

    return isValid;
  }
}
