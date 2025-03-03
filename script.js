// Function to handle "Run" button for Sum of Digits
function runSumOfDigit() {
    var num = prompt("Enter the number :");
   // Check if the input is a valid number
    if (isNaN(num) || num.trim() === "" || num.includes(".") ) {
        alert("❌ Please enter a valid number.");
        return;
    }
    
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    alert("Sum of digits is : " + sum);
}

// Function to handle "Run" button for Armstrong Number
function runArmstrongNumber() {
    var num = prompt("Enter the number :");

    // Validate input to ensure it is a number
    if (isNaN(num) || num.trim() === "" || num.includes(".")) {
        alert("❌ Please enter a valid whole number.");
        return;
    }
    var sum = 0;
    var temp = num;
    var digits = num.length;
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = parseInt(temp / 10);
    }
    if (sum == num) {
        alert('✅' + num + "  is an Armstrong number.");
    } else {
        alert('❌' + num + "  is not an Armstrong number.");
    }
}

// Function to handle "Run" button for Prime Number
function runPrimeNumber() {
    var num = prompt("Enter the number :");

    // Check if the input is a valid number
    if (isNaN(num) || num.trim() === "" || num.includes(".") ) {
        alert("❌ Please enter a valid number.");
        return;
    }
    var flag = 1;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        alert('✅' +num + "  is a Prime number.");
    } else {
        alert('❗️' +num + "  is Composite number.");
    }
}

// Function to handle "Run" button for Even or Odd Number
function runEvenOrOdd() {
    var num = prompt("Enter the number :");
    // Check if the input is a valid number
    if (isNaN(num) || num.trim() === "") {
        alert("❌ Please enter a valid number.");
        return;
    }
    if (num % 2 == 0) {
        alert('✅' + num + " is an Even number.");
    } else {
        alert('❗️' + num + " is an Odd number.");
    }
}

// Function to show the code in the modal
function showCode(task) {
    var code = "";
    if (task == "sumOfDigit") {
        code = `<script>
        // Validate input to ensure it is a number
        // num.includes(".")) Checks for decimal input
        //(isNaN(num) ensures it's a number 
        //num.trim() === "" prevent empty input
        
        var num = prompt("Enter the number:"); 

        if (isNaN(num) || num.trim() === "" || num.includes(".") ) {
        alert("❌ Please enter a valid number.");
        return;
        }
        
        var sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10); // parseInt(num) converts num into integer
        }
        alert("Sum of digits is: " + sum);
</script>`;
    } else if (task == "armstrongNumber") {
        code = `<script>
        // Validate input to ensure it is a number
        // num.includes(".")) Checks for decimal input
        //(isNaN(num) ensures it's a number 
        //num.trim() === "" prevent empty input
        
        var num = prompt("Enter the number:"); 
        
        if (isNaN(num) || num.trim() === "" || num.includes(".")) {
        alert("❌ Please enter a valid whole number.");
        return;
        }

        var sum = 0;
        var temp = num;
        var digits = num.length;
        
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits); // Math.pow(base, exponent) 
        temp = parseInt(temp / 10); // // parseInt(num) converts num into integer
        }
    if (sum == num) {
            alert('✅' +num + "  is an Armstrong number.");
        } else {
            alert('❌' +num + "  is not an Armstrong number.");
        }
</script>`;
    } else if (task == "primeNumber") {
        code = `<script>
        // Validate input to ensure it is a number
        // num.includes(".")) Checks for decimal input
        //(isNaN(num) ensures it's a number 
        //num.trim() === "" prevent empty input
        
        var num = prompt("Enter the number:"); 
        
        if (isNaN(num) || num.trim() === "" || num.includes(".") ) {
        alert("❌ Please enter a valid number.");
        return;
        }
        var flag = 1;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            alert('✅' +num + " is a Prime number.");
        } else {
            alert('❗️' +num + " is Composite number.");
        }
</script>`;
    } else if (task == "evenOrOdd") {
            code = `<script>
        // Validate input to ensure it is a whole number
        // num.includes(".")) Checks for decimal input
        //(isNaN(num) ensures it's a number 
        //num.trim() === "" prevent empty input 
        
        var num = prompt("Enter the number:");
        
        if (isNaN(num) || num.trim() === "" || num.includes(".") ) {
          alert("❌ Please enter a valid number.");
           return;
        }
        if (num % 2 == 0) {
            alert('✅' +num + " is an Even number.");
        } else {
            alert('❗️' +num + " is an Odd number.");
        }
</script>`;
    }
    document.getElementById('codeContent').textContent = code;
    var codeModal = new bootstrap.Modal(document.getElementById('codeModal'));
    codeModal.show();
}

// Function to copy code to clipboard
function copyCode() {
    var codeContent = document.getElementById('codeContent').textContent;
    navigator.clipboard.writeText(codeContent).then(function() {
        alert("Code copied to clipboard!");
    }, function(err) {
        alert("Failed to copy code: " + err);
    });
}
