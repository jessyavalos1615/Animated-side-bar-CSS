const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('content').classList.toggle('active');
});