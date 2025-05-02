document.addEventListener('DOMContentLoaded', () => {

    const categoryList = document.getElementById('category-list');

    function loadCategories() {

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
                    window.location.href = 'login.php';
                }
            });
    }


    loadCategories();

});