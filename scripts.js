document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButton = document.getElementById('close');
    const modal = document.getElementById('modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
