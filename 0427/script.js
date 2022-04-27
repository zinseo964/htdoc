let nextId = 4;
let selectedId = null;
function navHandler(e){
    e.preventDefault();
    selectedId = Number(e.target.id); 
    read();
}
async function nav(){
    document.querySelector('nav>ol').innerHTML = 'Loading ... '
    let response = await fetch('http://localhost:3000/topics');
    let topics = await response.json();
        
    const tag = topics.map((e)=>`
        <li>   
            <a href="/read/${e.id}" id="${e.id}" onclick="navHandler(event)">
                ${e.title}
            </a>
        </li>`).join('');
    document.querySelector('nav>ol').innerHTML = tag;
}
    
function welcome(){
    document.querySelector('article').innerHTML = `<h2>Welcome</h2>Hello, WEB`;
    selectedId=null;
    control();
}

async function read(){ 
    let res = await fetch('http://localhost:3000/topics/'+selectedId);
    let topic = await res.json();   
    const content = `<h2>${topic.title}</h2>${topic.body}`;
    document.querySelector('article').innerHTML = content;
    control();

}

async function createHandler(e){
    e.preventDefault();
    const t = e.target.title.value;
    const b = e.target.body.value;
    let res = await fetch('http://localhost:3000/topics',{
        method:'POST',
        headers:{
            'Content-Type' :'application/json'
        },
        body:JSON.stringify({title:t, body:b})
    })
    let data = await res.json();
    nav();
    selectedId = data.id;
    read();
}

function create(){
    const content = `
        <form onsubmit="createHandler(event);">
            <p><textarea rows="1" name="title" placeholder = "Title"></textarea></p>
            <p><textarea name="body" placeholder="Text"></textarea></p>
            <input type="submit" value="create">
        </form>
    `;
    document.querySelector('article').innerHTML = content;
}

async function updateHandler(e){
    e.preventDefault();
    const t = e.target.title.value;
    const b = e.target.body.value;
    const res = await fetch('http://localhost:3000/topics/'+selectedId,{
        method:'PUT',
        headers:{
            'Content-Type' :'application/json'
        },
        body:JSON.stringify({title:t, body:b})
    })
    let data = await res.json();
    nav();
    selectedId = data.id;
    read();
}

async function update(){
    const res = await fetch('http://localhost:3000/topics/'+selectedId);
    let topic = await res.json();
    const content = `
        <form onsubmit="updateHandler(event);">
            <p><textarea rows="1" name="title" placeholder = "Title">${topic.title}</textarea></p>
            <p><textarea name="body" placeholder="Text">${topic.body}</textarea></p>
            <input type="submit" value="update">
        </form>`;
    document.querySelector('article').innerHTML = content;
    control();
}

async function del(){
    const res = await fetch('http://localhost:3000/topics/'+selectedId,{
        method:'DELETE'
    })
    let data = res.json();
    nav();
    selectedId = null;
    welcome();
}

function control(){
    let contextUI = '';
    if(selectedId!==null){
        contextUI = `
        <li><a href="/update" onclick="event.preventDefault(); update();">Update</a></li>
        <li><a href="/delete" onclick="event.preventDefault(); del();">Delete</a></li>`;
    }
    document.querySelector('#control').innerHTML = `
        <li><a href="/create" onclick="event.preventDefault(); create();">Create</a></li>
        ${contextUI}
    `;
}
nav();
welcome();
control();