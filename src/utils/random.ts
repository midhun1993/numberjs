// Todo: Rewrite this with some good logic.
// This is only for just to test
export function random(start?: number, end?: number) {
  if (end) {
    return Math.floor(Math.random() * end);
  }
  return Math.floor(Math.random());
}
