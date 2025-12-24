type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age? user.age >= 18: false;
}

const result = isAdult({ id: "u01", name: "John"});
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// เงื่อนไขผิด ถ้าเกิดไม่ใส่ค่า user.scores เข้าไป code จะไม่สามารถนำ boolean มาเปรียบเทียบได้
// ดังนั้นเลยเพิ่มเงื่อนไขให้เช็คก่อนว่ามี user.age ไหม ถ้าไม่ก็ค่อยนำไป เข้าเงื่อนไข user.age >= 18 เมื่อ age ไม่ถึง 18 หรือไม่มี user.age ค่าจะค่อยออกมาเป็น false
