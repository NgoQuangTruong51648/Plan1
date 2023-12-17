Arrow Functions:

Cú pháp ngắn gọn hơn so với hàm truyền thống.
Không có this riêng, nó lấy giá trị this từ phạm vi bên ngoài.
Ví dụ:

const add = (a, b) => a + b;
Template Literals:

Cho phép nhúng biểu thức vào chuỗi với cú pháp ${expression}.
Giúp làm cho mã nguồn dễ đọc hơn khi kết hợp với biểu thức.
Ví dụ:

const name = "John";
console.log(`Hello, ${name}!`);
Destructuring Assignments:

Giúp rút gọn cú pháp khi truy cập và gán giá trị từ các đối tượng và mảng.
Ví dụ:

const person = { name: "Alice", age: 25 };
const { name, age } = person;
Classes và Modules:
Classes:

Cung cấp cách để định nghĩa các đối tượng và phương thức của chúng trong JavaScript.
Sử dụng constructor để khởi tạo đối tượng.
Định nghĩa các phương thức bằng cú pháp hàm trong class.
Ví dụ:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("Alice", 25);
person.sayHello();
Modules:

Giúp tách chia mã nguồn thành các phần độc lập để quản lý dễ dàng hơn.
Mỗi module có phạm vi (scope) riêng.
Import và export giúp chia sẻ mã nguồn giữa các file.
Ví dụ:

// File: module1.js
export const add = (a, b) => a + b;

// File: module2.js
import { add } from './module1.js';
Promises và async/await:
Promises:

Được sử dụng để xử lý các tác vụ bất đồng bộ và tránh callback hell.
Có ba trạng thái: pending, resolved (fulfilled), và rejected.
Ví dụ:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};
async/await:

Giúp viết mã bất đồng bộ dễ đọc như mã đồng bộ.
Sử dụng async trước một hàm để tạo một hàm async.
Sử dụng await để đợi một Promise trả về kết quả.
Ví dụ:

const fetchData = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};