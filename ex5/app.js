// console.log("a");

// console.log("b");

// setTimeout(() => console.log("c"), 3000);

// setTimeout(() => console.log("d"), 0);

// console.log("e");

// Challenge

// Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here

// Expected Output

// a

// b

// c

// d

// e

async function print() {
  try {
    let printc = await new Promise((res, reject) => {
      setTimeout(() => {
        res("c");
      }, 3000);
    });

    let printd = await new Promise((res, reject) => {
      setTimeout(() => {
        res("d");
      }, 0);
    });

    console.log("a");

    console.log("b");

    console.log(printc);

    console.log(printd);

    console.log("e");
  } catch (err) {
    console.log(err);
  }
}

print();
