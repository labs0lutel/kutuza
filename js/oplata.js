function calculateCommission() {
    const amount = parseFloat(document.getElementById('summa').value) || 0;
    const commission = amount * 0.2;
    const total = amount + commission;

    document.getElementById('comuss').innerText = commission.toFixed(2);
    document.getElementById('tootal').innerText = total.toFixed(2);
}

function saveAmount(event) {
    event.preventDefault(); 
    const total = document.getElementById('tootal').innerText;
    localStorage.setItem('totalAmount', total);
    window.location.href = './oplata.html'; 
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('summa').addEventListener('input', calculateCommission);
    document.getElementById('replenish-form').addEventListener('submit', saveAmount);
});