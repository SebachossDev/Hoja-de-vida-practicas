// Animación para las barras de progreso
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage;
            
            
            const id = bar.id;
            const percentageText = document.getElementById('percentage' + id.slice(-1));
            if (percentageText) {
                percentageText.textContent = percentage;
            }
        });
    }, 300);
});