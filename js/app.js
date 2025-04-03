document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');

    taskForm.addEventListener('submit', (e) => {
        alert("Se envió el formulario");
    });

});