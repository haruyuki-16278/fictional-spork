export function counterInit() {
  console.log('counterInit')
  window.Alpine.data('counter', () => ({
    count: 0,
    increment() {
      this.count++;
    }
  }));
}
