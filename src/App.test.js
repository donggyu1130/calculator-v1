import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("시나리오 6번", () => {
  render(<App />);
  // #17: App 이라는 react 컴포넌트를 그려라!

  const button1 = screen.getByText(1);
  // #20: 화면에, 글자 1이 담긴 HTML 태그가 있다.
  // 그걸 button1이라고 부르겠다!
  expect(button1).toBeInTheDocument();
  // #23: expect, 예상하건데, 기대하건데 (=테스트 과정)
  // button1이, html 문서에 있을 것이다!

  const number = screen.getByRole("number");
  // #27: 화면에 있는 HTML 태그중에 role="number" 라는게 있다.
  // 그걸 number라고 부르겠다!
  expect(number).toBeInTheDocument();
  // #30: 마찬가지로, 예상컨데, number가 html 문서에 있을 것이다!

  fireEvent.click(button1);
  // #33: fireEvent=이벤트를 발생시켜라
  // 어떤 이벤트? click 이벤트를 발생시켜라
  // 어디에? button1에 click 이벤트를 발생시켜라!
  expect(number).toHaveValue(1);
  // #37: 기대하건데, number는 value가 1이 되어 있을 것이다!
});

test("시나리오 8번", () => {
  render(<App />);

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);
});

test("시나리오 10번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(1);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(3);
});

test("시나리오 12번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(2);
});

test("시나리오 14번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(2);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(4);
});

test("시나리오 17번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);
});

test("시나리오 19번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(button1);
  expect(number).toHaveValue(111);
});

test("시나리오 21번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(11);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(12);
});

test("시나리오 22번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(11);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(13);
});

test("시나리오 23번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(button2);
  expect(number).toHaveValue(22);
});

test("시나리오 24번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button2);
  expect(number).toHaveValue(12);
});

test("시나리오 26번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(button1);
  expect(number).toHaveValue(21);
});

test("시나리오 27번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(button1);
  expect(number).toHaveValue(21);

  fireEvent.click(button2);
  expect(number).toHaveValue(212);

  fireEvent.click(button1);
  expect(number).toHaveValue(2121);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(2121);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(2122);
});

test("시나리오 28번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(11);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(22);
});

test("시나리오 29번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(11);

  fireEvent.click(button2);
  expect(number).toHaveValue(112);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(112);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(button2);
  expect(number).toHaveValue(22);

  fireEvent.click(button1);
  expect(number).toHaveValue(221);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(333);
});

test("시나리오 31번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(2);
});

test("시나리오 33번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(1);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(2);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(3);
});

test("시나리오 34번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(2);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(4);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(6);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(7);
});

test("시나리오 35번", () => {
  render(<App />);

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);
});

test("시나리오 36번", () => {
  render(<App />);

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(6);
});

test("시나리오 37번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(button2);
  expect(number).toHaveValue(12);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(12);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(button3);
  expect(number).toHaveValue(23);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(35);
});

test("시나리오 38번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(6);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(9);
});

test("시나리오 39번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(3);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(5);

  fireEvent.click(button1);
  expect(number).toHaveValue(1);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(6);
});

test("시나리오 40번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(6);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(8);

  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(10);
});

test("시나리오 42번", () => {
  render(<App />);

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(33);
});

test("시나리오 43번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(33);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(33);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(33);

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(66);

  fireEvent.click(button3);
  expect(number).toHaveValue(3);

  fireEvent.click(button3);
  expect(number).toHaveValue(33);

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(99);
});

test("시나리오 43번 (2)", () => {
  render(<App />);

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  // =>3을 누른다-3이 출력됨
  // 3을 누른다-33이 출력됨
  // +를 누른다-변화없음
  fireEvent.click(button3);
  expect(number).toHaveValue(3);
  fireEvent.click(button3);
  expect(number).toHaveValue(33);
  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(33);

  // 3을 누른다-3이 출력됨
  // 3을 누른다-33이 출력됨
  // +를 누른다-66이 출력됨
  fireEvent.click(button3);
  expect(number).toHaveValue(3);
  fireEvent.click(button3);
  expect(number).toHaveValue(33);
  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(66);

  // 3을 누른다-3이 출력됨
  // 33을 누른다-33이 출력됨
  // =을 누른다-99가 출력됨
  fireEvent.click(button3);
  expect(number).toHaveValue(3);
  fireEvent.click(button3);
  expect(number).toHaveValue(33);
  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(99);
});

test("시나리오 44번", () => {
  render(<App />);

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  // => 1을 누른다-1이 출력됨
  //  +를 누른다-1이 출력됨
  fireEvent.click(button1);
  expect(number).toHaveValue(1);
  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(1);

  //  2를 누른다-2가 출력됨
  fireEvent.click(button2);
  expect(number).toHaveValue(2);

  //  =을 누른다-3이 출력됨
  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(3);

  //  +를 누른다-3이 출력됨
  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(3);

  //  1을 누른다-1이 출력됨
  //  =으르 누른다-4가 출력됨
  fireEvent.click(button1);
  expect(number).toHaveValue(1);
  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(4);
});

test("시나리오 45번", () => {
  render(<App />);

  const buttonMinus = screen.getByText("-");
  expect(buttonMinus).toBeInTheDocument();
});

test("시나리오 46번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonMinus = screen.getByText("-");
  expect(buttonMinus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button3);
  expect(number).toHaveValue(3);
  // '='>3을 누른다'-'3이 출력됨

  fireEvent.click(buttonMinus);
  expect(number).toHaveValue(3);
  // '-'을 누른다'-'변화없음

  fireEvent.click(button1);
  expect(number).toHaveValue(1);
  // 1을 누른다'-'1이 출력됨

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(2);
  // '='을 누른다'-'2가 출력됨
});

test("시나리오 49번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonMinus = screen.getByText("-");
  expect(buttonMinus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);
  // 1을 누른다-1이 출력됨

  fireEvent.click(buttonMinus);
  expect(number).toHaveValue(1);
  //   -를 누른다-변화 없음

  fireEvent.click(button2);
  expect(number).toHaveValue(2);
  //   2를 누른다-2가 출력됨

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(-1);
  //   =을 누른다=-1이 출력됨
});

test("시나리오 50번", () => {
  render(<App />);

  const button1 = screen.getByText(1);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(2);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(3);
  expect(button3).toBeInTheDocument();

  const buttonPlus = screen.getByText("+");
  expect(buttonPlus).toBeInTheDocument();

  const buttonMinus = screen.getByText("-");
  expect(buttonMinus).toBeInTheDocument();

  const buttonEqual = screen.getByText("=");
  expect(buttonEqual).toBeInTheDocument();

  const number = screen.getByRole("number");
  expect(number).toBeInTheDocument();

  fireEvent.click(button1);
  expect(number).toHaveValue(1);
  // 1을 누른다-1이 출력됨

  fireEvent.click(buttonMinus);
  expect(number).toHaveValue(1);
  // '-'를 누른다-변화 없음

  fireEvent.click(button3);
  expect(number).toHaveValue(3);
  // 3을 누른다-3이 출력됨

  fireEvent.click(buttonPlus);
  expect(number).toHaveValue(-2);
  // '+'를 누른다-'-'2가 출력됨
  //+를 눌렀을때 -2가 나올줄 알았지만 4가 나왔다

  fireEvent.click(button2);
  expect(number).toHaveValue(2);
  // 2를 누른다-2가 출력됨

  fireEvent.click(buttonEqual);
  expect(number).toHaveValue(0);
  // '='을 누른다-0이 출력됨
});
