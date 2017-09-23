class Tarea {
    constructor(title, id) {
        this.id = id;
        this.userId = 1;
        this.title = title;
        this.completed = false;
    }
}

class ToDoList {
    constructor() {
        this.arrContent = [
            {
                "userId": 1,
                "id": 1,
                "title": "Mercado",
                "completed": false
            }
        ];
    }
    add(tasks) {
        this.arrContent.push(tasks);
    }
    show(content) {

        $("ul").append(`<div class="col-md-12 col-md-12 col-xs-12">\
                            <li>${content}   <i class="fa fa-times-circle close" aria-hidden="true"></i></li>\
                        </div>`);

        $("ul").attr('contenteditable', 'true');
    }
    ShowList() {
        for (let i in this.arrContent) {
            let datos = this.arrContent[i];
            this.show(datos.title);
        }
    }
    isChecked() {
        let list = document.getElementsByTagName('li');
        for (let i = 0; i < list.length; i++) {
            list[i].onclick = function (ev) {
                if (ev.target.tagName === 'LI') {
                    ev.target.classList.toggle('checked');
                }
                let ListValue = event.target.textContent;
                for (let i in this.arrContent) {
                    if (this.arrContent[i].title == ListValue) {
                        this.arrContent[i].completed = true;
                    }
                }
            };
        }
    }
    closeIt() {
        let close = document.getElementsByClassName("close");
        let i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
    clean() {
        $("#activity").val("");
    }
}

let list = new ToDoList();
let id = 11;

list.ShowList();
list.isChecked();
list.closeIt();
$("#addIcon").click(function () {
    let content = $("#activity").val();
    if (content == "") {
        alert("Debes agregar una actividad");
    }
    else {
        list.add(new Tarea(content, id));
        list.show(content);
        list.isChecked();
        list.closeIt();
        id++;
        list.clean();

    }
    return false;
});

