//* higher order function is a function active in other function as an argument or a value

//! javascipt treats function as an object

//? why we use higher order function to make a simple function

function repeatLog(n: number) {
  for (let i = 0; (i = n); i++) {
    console.log(i);
  }
}

repeatLog(100);

function repeat(n: number, action: any) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, alert);
repeat(10, console.log);
