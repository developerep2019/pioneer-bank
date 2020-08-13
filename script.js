// login button event handdler
const login = document.getElementById('login');
login.addEventListener('click', function() {
    document.getElementById('login-area').style.display = 'none';
    document.querySelector('#transection-area').style.display = 'block';
});

// Deposit Button event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function() {
    const depositValue = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositValue);
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositAmount').value = '';
    const totalBalance = document.getElementById('balanceArea').innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    document.getElementById('balanceArea').innerText = totalBalanceNumber + depositNumber;
})

// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const withdrawArea = document.getElementById('withdrawArea').innerText;
    const withdrawAreaNumber = parseFloat(withdrawArea);
    document.getElementById('withdrawArea').innerText = withdrawAreaNumber + withdrawNumber;
    document.getElementById('withdrawAmount').value = '';

    const totalBalance = document.getElementById('balanceArea').innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    document.getElementById('balanceArea').innerText = totalBalanceNumber - withdrawNumber;
})