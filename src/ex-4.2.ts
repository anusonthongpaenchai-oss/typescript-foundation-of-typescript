function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }else {(typeof data === "number") 
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ Error เกิดขึ้นเพราะไม่สามารถเรียกใช้ toUpperCase() กับตัวแปรชนิด unknown ได้ ต้องตรวจสอบชนิดข้อมูลด้วย typeof ก่อนใช้งาน
