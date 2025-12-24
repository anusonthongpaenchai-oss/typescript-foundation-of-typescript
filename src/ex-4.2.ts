function processData(data: unknown): string {
  return typeof data === 'string'? data.toUpperCase(): 'Not a string';
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// ทุกครั้งที่ประกาศ unknown เวลาจะนำไปใช้ ต้องมีการตรวจสอบ typeof ทุกครั้ง ว่าสามารถนำไปใช้งานตามที่เราต้องการได้ไหม
