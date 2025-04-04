document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = [];
    taskForm.addEventListener('click', (e) => {
        const vti = taskInput.value.trim();
        if (vti !== '') {
            const task = {
                id: Date.now,
                text: vti,
                complete: false
            };
            tasks.push(task);
            console.log(tasks);
            renderTasks();
            taskInput.value = '';
        }
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(
            task => {
                console.log(task);

                const li = document.createElement('li');
                li.innerHTML =
                    '<span>' + task.text + '</span>' +
                    '<div>' +
                    '<button onclick="deleteTask(' + task.id + ')">' +
                    'Eliminar </button>' +
                    '</div>';
                taskList.appendChild(li);
            }

        );
    }

});