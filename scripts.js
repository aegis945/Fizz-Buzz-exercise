let answer = parseInt(prompt("Please enter a number"));

for (let i=1; i<=answer; i++) {
    if (i % 3===0){
        console.log("Fizz")
    }
    console.log(i);
}