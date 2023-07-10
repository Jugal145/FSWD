<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<script>
function checkPositiveNumber(number) {
if (number < 0) {
throw new Error("Number must be positive.");
}
return number;
}
try {
var result = checkPositiveNumber(-5);
console.log("Result:", result);}
catch (error) {
console.log("Error:", error.message); }
</script>
</body> </html>
