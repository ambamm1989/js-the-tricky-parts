function createAccount(pin, amount) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        }, 
        deposit(inputPin, newAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += newAmount;
            return `Succesfully deposit ${newAmount}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, withdrawAmount) {
        if (inputPin !== pin) return "Invalid PIN.";
        if (withdrawAmount > amount)
        return "Withdrawal amount exceeds limit. Transaction cancelled.";
        amount -= withdrawAmount;
        return `Successfully withdraw $${withdrawAmount}. Current balance: $${amount}.`;
},
changePin(oldPin, newPin) {
    if (oldPin !== pin) return "Invalid PIN.";
    pin = newPin;
    return "PIN successfully changed!";
    }
};
}

module.exports = { createAccount };
