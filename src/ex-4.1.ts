type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ 
// user.age สามารถมีค่าเป็น undefined จึงไม่สามารถนำไปเปรียบเทียบกับ 18 ที่เป็นค่า number ไม่สามารถทำได้ เลยเกิด error
