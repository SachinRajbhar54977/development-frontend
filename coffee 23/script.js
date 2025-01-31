
// Simulate live order counter
const ordersContainer = document.getElementById('orders');

function simulateOrderClick() {
    ordersContainer.innerHTML += '1 drink ordered';
    setTimeout(() => ordersContainer.innerHTML += '<br>2 more drinks ordered', 100);
    requestAnimationFrame(simulateOrderClick);
}

// Add click handler to the form
document.querySelector('.signup-btn').addEventListener('click', simulateOrderClick);

// Initialize forms for signup and order placing
const form = {
    onSubmit: function() { simulateOrderClick(); }
};
document.createElement('form');
document.body.appendChild(form);
