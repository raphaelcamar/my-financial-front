export interface RequestAdapter {
  request(base: unknown): unknown;
  response(base: unknown): unknown;
}
