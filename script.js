// skapa en ul i en body

const body = document.body;
const ul = document.createElement("ul");
body.append(ul)
//skapa en li


let array=["måla","sy", "pyssla", "odla", "rita"];

for (let i = 0; i < array.length; i++){
    let li = document.createElement("li")
    li.innerHTML = array[i]
if(i%2===0){
    li.style.backgroundColor ="pink"
}
    ul.append(li)
};

//få listan in i en LI i ul


