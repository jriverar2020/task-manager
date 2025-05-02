document.addEventListener('DOMContentLoaded', () => {

    const categoryList = document.getElementById('category-list');

    function loadCategories() {

        categoryList.innerHTML = '';
        console.log("Runing");
        fetch('/task-manager/server/user/session_info.php')
            .then(res => res.json())
            .then(data => {
                if (data.user_id) {
                    console.log('Sesión activa para usuario:', data.user_id);
                    fetch('/task-manager/server/category/filter_by_user.php?user_id=' + data.user_id)
                        .then(response => response.json())
                        .then(ctg => {
                            console.log(ctg);
                            ctg.forEach(
                                category => {
                                    console.log(category);

                                    const row = document.createElement('tr');

                                    row.innerHTML =
                                        '<td>' + category.id + '</td>' +
                                        '<td>' + category.name + '</td>' +
                                        '<td>' + category.created_at + '</td>';

                                    categoryList.appendChild(row);
                                }
                            );
                        });
                } else {
                    console.warn(data.error);
                    window.location.href = '../login.php';
                }
            });
    }


    loadCategories();

    document.getElementById('category-form').addEventListener('submit',
        function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const message = document.getElementById('message');

            fetch('/task-manager/server/category/create.php',
                {
                    method: 'POST',
                    body: formData
                })
                .then(resp => resp.json())
                .then(data => {
                    if (data.success) {
                        message.textContent = data.message;
                        message.style.color = 'green';
                        this.reset();
                        loadCategories();
                    }
                    else {
                        message.textContent = data.message;
                        message.style.color = 'orange';
                    }
                })
                .catch(err => {
                    message.textContent = err.message;
                    message.style.color = 'red';
                })
        });

});

