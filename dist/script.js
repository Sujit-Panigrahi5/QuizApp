function counter() {
    let count = 0;
    console.log(count,`sujit${count}`)
    return function xt () {
      console.log(count++);
    };
  }
  xt()
  
  const c = counter();
  c();
  c();
  c();

  counter()
  counter()
  counter()