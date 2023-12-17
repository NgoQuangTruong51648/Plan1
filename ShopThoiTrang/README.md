React là một thư viện JavaScript được phát triển bởi Facebook, được sử dụng để xây dựng giao diện người dùng (UI) cho các ứng dụng web. Dưới đây là một số khái niệm và lý thuyết cơ bản liên quan đến React:

1. Components:
Functional Components: Là hàm JavaScript trả về một phần tử React, thường được sử dụng cho các component đơn giản và chỉ render UI.
jsx

const MyComponent = () => {
  return <div>Hello, World!</div>;
};
Class Components: Là các lớp JavaScript mở rộng từ React.Component, thường chứa trạng thái (state) và các phương thức (methods).
jsx

class MyClassComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
2. JSX (JavaScript XML):
JSX là một cú pháp mở rộng của JavaScript, giúp mô tả cấu trúc của giao diện người dùng trong React.
jsx

const element = <h1>Hello, World!</h1>;
3. Props (Properties):
Là cách truyền dữ liệu từ component cha đến component con.
jsx

const Greet = (props) => {
  return <div>Hello, {props.name}!</div>;
};
4. State:
Là dữ liệu được quản lý bởi một component và có thể thay đổi trong quá trình thực thi ứng dụng.
jsx

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
5. Lifecycle Methods:
React cung cấp các phương thức vòng đời như componentDidMount, componentDidUpdate, và componentWillUnmount để thực hiện các hành động tại các điểm cụ thể trong vòng đời của một component.
6. Event Handling:
Xử lý sự kiện trong React thông qua các hàm xử lý sự kiện được truyền vào các component.
jsx

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
7. Conditional Rendering:
Sử dụng các biểu thức điều kiện để render các phần khác nhau của giao diện dựa trên điều kiện nào đó.
jsx

const ShowMessage = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
};
8. Lists and Keys:
Sử dụng map để render danh sách và cung cấp key để giúp React hiệu quả hơn quản lý các phần tử trong danh sách.
jsx

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>{number}</li>);
9. Hooks:
Là các hàm đặc biệt được giới thiệu trong React 16.8 để sử dụng trạng thái và các tính năng của lớp trong functional components.
jsx

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
10. Context API:
Cho phép truyền dữ liệu qua nhiều component mà không cần truyền props qua tất cả các cấp con.
11. Redux (Tùy chọn):
Thư viện quản lý trạng thái cho ứng dụng lớn, giúp quản lý trạng thái và tương tác giữa các component.
12. React Router (Tùy chọn):
Thư viện giúp quản lý định tuyến và điều hướng trong ứng dụng React.
