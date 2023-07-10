function operations(x, y)
{
var sum = x + y;
var difference = x - y;
var product = x * y;
var quotient = x / y;
return {
sum: sum,
difference: difference,
product: product,
quotient: quotient
};}
var result = operations(50, 10);
console.log("Sum:", result.sum);
console.log("Difference:", result.difference);
console.log("Product:", result.product);
console.log("Quotient:", result.quotient);
