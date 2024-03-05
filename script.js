let form = document.querySelector('form');
let title = document.getElementById("title");
let description = document.getElementById('textArea');
let container = document.querySelector('.container');
let src = './Asset/success-1-6297.mp3';
let taskArray = [];

form.addEventListener("submit", (e) => {
    removeTask();
    e.preventDefault();
    addData();
    });

//Adding a new Task to the array
const addData = () => {
        taskArray.push({
        title: title.value,
        description: description.value
    })
    showData(taskArray);
}


// Displaying tasks in the browser
const showData = (taskArray) => {
    taskArray.forEach((task) => {
        let title = (task.title).toUpperCase();;
        let descriptionn = (task.description).toUpperCase();
        let addtask = document.createElement('div');
        addtask.setAttribute('class', 'addTask');
        container.append(addtask);
        let Task = document.createElement('div');
        Task.setAttribute('class', 'task');
        Task.innerHTML = `<h2>Tasks:-</h2><p>${title}</p><i class="fa-solid fa-trash"></i> `;
        addtask.append(Task);
        let description = document.createElement('div');
        description.setAttribute('class', 'description');
        description.innerHTML = `<h2>Description:-</h2><p>${descriptionn}</p>`;
        addtask.append(description);
        let dltbtn = addtask.querySelector('.fa-trash');
        dltbtn.addEventListener("click", () => {
            addtask.remove();
            let mySound = new Audio('./Asset/success-1-6297.mp3')
            mySound.play()
            alert(`
            Task Accomplished Successfully
            Task Name:-  ${title}
            Description:-  ${descriptionn}`)
            taskArray.splice(taskArray.indexOf(task), 1);
        });
    });
};
const removeTask=()=>{
    taskArray.forEach(()=>{
        let div = document.querySelector(".addTask");
        div.remove();
    })
}

