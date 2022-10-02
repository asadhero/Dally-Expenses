function getTotalCostsBalance() {

    // Expenses Amount
    const inputFoodCosts = document.getElementById('food');
    const foodCostsValue = parseFloat(inputFoodCosts.value);
    const inputRentCosts = document.getElementById('rent');
    const rentCostsValue = parseFloat(inputRentCosts.value);
    const inputClothesCosts = document.getElementById('clothes');
    const clothesCostsValue = parseFloat(inputClothesCosts.value);
    // Total Income
    const inputIncome = document.getElementById('income');
    const income = parseFloat(inputIncome.value);
    // Expenses Field
    const expensesField = document.getElementById('expenses-field');
    // Balance Field
    const balanceField = document.getElementById('balance-field');
    // Total Expenses
    const totalExpenses = foodCostsValue + rentCostsValue + clothesCostsValue;

    // Error Handling
    if (income < 0) {
        expensesField.innerText = 'Please write a number greater than 0 in your Income input field';
    }
    else if (totalExpenses > income) {
        expensesField.innerText = 'Your expenses is over than your income';
    }
    else if (foodCostsValue < 0) {
        expensesField.innerText = 'Please write a number greater than 0 in your Food input field';

    }

    else if (rentCostsValue < 0) {
        expensesField.innerText = 'Please write a number greater than 0 in your Rent input field';
    }
    else if (clothesCostsValue < 0) {
        expensesField.innerText = 'Please write a number greater than 0 in your Clothes input field';
    }
    else if (isNaN(foodCostsValue)) {
        expensesField.innerText = 'Please write a number in your Food input field';
    }
    else if (isNaN(rentCostsValue)) {
        expensesField.innerText = 'Please write a number in your Rent input field';
    }
    else if (isNaN(clothesCostsValue)) {
        expensesField.innerText = 'Please write a number in your Clothes input field';
    }
    else if (isNaN(income)) {
        expensesField.innerText = 'Please write a number in your Income input field';
    }
    else {
        expensesField.innerText = totalExpenses;
        // Balance
        const balance = income - totalExpenses;
        balanceField.innerText = balance;
    };


};
// Saving Field
function getSaveingMoney() {

    // Savings
    const inputSave = document.getElementById('save');
    const save = parseFloat(inputSave.value);
    // Total Income
    const inputIncome = document.getElementById('income');
    const income = parseFloat(inputIncome.value);
    // Balance Field
    const balanceField = document.getElementById('balance-field');
    const balance = parseFloat(balanceField.innerText);
    // Saving Field
    const savingField = document.getElementById('saving-field');
    // Remaining Field
    const remainingField = document.getElementById('remaining-field');
    // Savings Amount
    const savingAmount = (save * income) / 100;

    // Error Handling
    if (savingAmount > balance) {
        savingField.innerText = "Your account haven't enough money for savings";
    }
    else if (save < 0) {
        savingField.innerText = "Please write a number greater than 0 in your Save input field";
    }
    else if (isNaN(save)) {
        savingField.innerText = 'Please write a number in your Save input field';
    }
    else {

        savingField.innerText = savingAmount;

        const remainingBalance = balance - savingAmount;
        remainingField.innerText = remainingBalance;
    }




}


// Calculate Button
document.getElementById('calculate-button').addEventListener('click', function () {
    getTotalCostsBalance();

});
// Save Button
document.getElementById('save-button').addEventListener('click', function () {
    getSaveingMoney();
});