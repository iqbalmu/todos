
const inputNewTodo = document.getElementById('newTodo')
const addBtn = document.querySelector('.add')
const list = document.querySelector('.list')

function add(){
    // ambil nilai input
    let newTodo = inputNewTodo.value;
    
    if(newTodo != ''){
        // tambahkan li di ul
        // beri nilai dari input
        let li = `<li><span>${newTodo}</span><span class='remove' onclick="rm(this)">&#10008</span><span class='done' onclick="done(this)">&#10004</span></li>`;
    
        list.insertAdjacentHTML("afterbegin",li);
    }else{
        alert('emg ga mau ngerjain apa2?');
    }

    // bersihkan field input 
    inputNewTodo.value = "";
}

function done(e){
    const el = e.parentNode;
    el.classList.toggle('right');
    console.log(el);
}

function rm(e){
    e.parentNode.remove();
}

