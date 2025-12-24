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

// Error ที่เจอคือ age สามารถเป็น undefinded ได้จาก optional parameter แต่ที่ตอนเรียกใช้ age มาเทียบกับ 18 ที่เป็น number ไม่สามารถทำได้ เลยเกิด error
