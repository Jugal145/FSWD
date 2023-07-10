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
function Salary(salaries){
var minSalary = salaries[0];
var maxSalary = salaries[0];
for (var i = 1; i < salaries.length; i++) {
if (salaries[i] < minSalary)
{
minSalary = salaries[i]; }
if (salaries[i] > maxSalary)
{
maxSalary = salaries[i];
} }
return{
min:minSalary,
max:maxSalary
};}
var salaries = [50000, 60000, 45000, 70000, 55000];
var result1 = Salary(salaries);
console.log("Minimum Salary:", result1.min);
console.log("Maximum Salary:", result1.max);
</script></body></html>
