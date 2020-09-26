function cal(value, a, b) {
    switch(value)
    {
        case "addition": //multipal case similar output
        case "add":
        case 1:
            return a + b;
            break;
        case "subtraction":
            return a - b;
            break;
        case "multiplication":
            return a * b;
            break;
        case "division":
            return a / b;
            break;
        default:
            return "Enter valid value";
    }
}
console.log(cal("addition", 5, 4));
