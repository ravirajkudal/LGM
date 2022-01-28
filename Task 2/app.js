function myfun(){
    fetch("https://reqres.in/api/users?page=1").then((data)=>{
    return data.json()
}).then((jsondata)=>{

    let data1 = "";
    jsondata.data.map((values)=>{
        data1 +=`<div class="card newcard">
        <img class="card-img-top" src="${values.avatar}" alt="Avatar">
            <div class="card-body"><h2>${values.first_name} ${values.last_name}</h2>
                <p class="card-text">${values.email}</p>
                <button>Contact</button>
            </div>
        </div>`
    });
    document.getElementById("cards").innerHTML=data1;
    
}).catch((err)=>{
    console.log(err);
})

}

let btn=document.getElementById("get-user");
btn.addEventListener('click',myfun)