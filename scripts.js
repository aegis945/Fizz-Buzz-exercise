var answer = prompt("Please enter a number");
        while (isNaN(answer)) {
            console.log(answer + " is not a number");
            var answer = prompt("Only numbers are allowed. Please enter a number");
        }

for (let i=1; i <= parseInt(answer); i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
