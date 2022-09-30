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
        expensesField.innerText = 'Please Write A Number Greater Than 0 In Your Income Input Field';
    }
    else if (totalExpenses > income) {
        expensesField.innerText = 'Your Expenses Is Over Than Your Income';
    }
    else if (foodCostsValue < 0) {
        expensesField.innerText = 'Please Write A Number Greater Than 0 In Your Food Input Field';
    }
    else if (rentCostsValue < 0) {
        expensesField.innerText = 'Please Write A Number Greater Than 0 In Your Rent Input Field';
    }
    else if (clothesCostsValue < 0) {
        expensesField.innerText = 'Please Write A Number Greater Than 0 In Your Clothes Input Field';
    }
    else if (isNaN(foodCostsValue)) {
        expensesField.innerText = 'Please Write A Number In Your Food Input Field';
    }
    else if (isNaN(rentCostsValue)) {
        expensesField.innerText = 'Please Write A Number In Your Rent Input Field';
    }
    else if (isNaN(clothesCostsValue)) {
        expensesField.innerText = 'Please Write A Number In Your Clothes Input Field';
    }
    else if (isNaN(income)) {
        expensesField.innerText = 'Please Write A Number In Your Income Input Field';
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

    //Saving Amount
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

    const savingAmount = (save * income) / 100;
    savingField.innerText = savingAmount;

    const remainingBalance = balance - savingAmount;
    remainingField.innerText = remainingBalance;



}


// Calculate Button
document.getElementById('calculate-button').addEventListener('click', function () {
    getTotalCostsBalance();

});
// Save Button
document.getElementById('save-button').addEventListener('click', function () {
    getSaveingMoney();
});