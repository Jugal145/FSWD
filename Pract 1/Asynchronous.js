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
function AsyncOperation(callback) {
setTimeout(function() {
var result = "Operation completed.";
callback(result); }, 2000);
}
function handleResult(result) {
console.log("Result:", result);}
console.log("Starting asynchronous operation...");
AsyncOperation(handleResult);
console.log("Asynchronous operation initiated.");
</script>
</body> </html>
