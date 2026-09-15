function openModal(title, problemText, solutionText) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = problemText;
    document.getElementById('modalSolution').innerText = solutionText;
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function closeModalOutside(event) {
    if (event.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
}