var list = document.querySelector("#list");
var input = document.querySelector("#new-task-title");
var form = document.querySelector("new-task-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    console.log('hrrlo');
    e.preventDefault();
    var newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
});
;
var addListItem = function (task) {
    var item = document.createElement('li');
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
};
