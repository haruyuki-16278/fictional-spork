export function counterInit() {
  console.log('counterInit')
  Alpine.data('counter', () => ({
    count: 0,
    increment() {
      this.count++;
    }
  }));
}
