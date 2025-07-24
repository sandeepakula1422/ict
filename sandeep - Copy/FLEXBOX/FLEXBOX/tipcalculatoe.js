document.addEventListener('DOMContentLoaded', function() {
    
    const billInput = document.getElementById('Bill');
    const percentageInput = document.getElementById('Percentage');
    const tipAmountInput = document.getElementById('Tip amount'); 
    const totalInput = document.getElementById('Total');
    const calculateButton = document.querySelector('.but');

    // Add an event listener to the calculate button
    calculateButton.addEventListener('click', function() {
        // Get the numeric values from the 'Bill' and 'Percentage' input fields
        const bill = parseFloat(billInput.value);
        const percentage = parseFloat(percentageInput.value);

        // Input validation: Check if the values are valid numbers and are non-negative
        if (isNaN(bill) || isNaN(percentage) || bill < 0 || percentage < 0) {
            alert('Please enter valid positive numbers for the Bill and Percentage.');
            // Clear the result fields if inputs are invalid
            tipAmountInput.value = '';
            totalInput.value = '';
            return; // Stop the function execution
        }

        // Calculate the tip amount
        const tipAmount = bill * (percentage / 100);

        // Calculate the total amount
        const total = bill + tipAmount;

        // Display the calculated tip amount and total, formatted to two decimal places
        tipAmountInput.value = tipAmount.toFixed(2);
        totalInput.value = total.toFixed(2);
    });
});