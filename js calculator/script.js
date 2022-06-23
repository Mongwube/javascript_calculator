//calc input
let num1 = parseInt (prompt("Enter the First Number: "));
let opera = prompt("Enter the Operator/Symbol: ");
let num2 = parseInt (prompt("Enter the Second Number: "));

//calcu processing and output
if(opera == "+"){
    alert("the sum of " +num1+ " and " +num2+ " is "+ (num1+num2));
}
else if(opera == "-"){
    alert("the product of " +num1+ " and " +num2+ " is "+ (num1-num2));
}
else if(opera == "/"){
    alert("the division of " +num1+ " and " +num2+ " is "+ (num1/num2));
}
else if(opera == "*"){
    alert("the difference of " +num1+ " and " +num2+ " is "+ (num1*num2));
}
//if you put the wrong operator then you get "invalid operator"
else{
    alert("Invalid operator / symbol");
}

