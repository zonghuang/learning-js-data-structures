function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return
  {
    bar: "hello"
  };
}

foo1();
foo2();
