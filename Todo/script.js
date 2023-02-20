const $ = document.querySelector.bind(document);




function addtodo(){
    var d = document.createElement('div'); // create div, d
    $(".currenttodos").appendChild( d ); // add d to place
    d.innerHTML = $("#newtodo").value // add text to d
    d.className="todo"
    $('#newtodo').value=""
    d.addEventListener('click', function(){ // add onclick to d
        d.classList.add('completed'); // change d class
    });
}

$("#addtodo").addEventListener('click', addtodo);

