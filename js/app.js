document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');

    taskForm.addEventListener('submit', (e) => {
        var vti = taskInput.value.trim();
        alert("Se envió el formulario: " + vti);
    });

});