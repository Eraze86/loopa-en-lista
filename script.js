// skapa en ul i en body

const body = document.body;
const ul = document.createElement("ul");
body.append(ul)

//skapa en lista 

let array=["måla","sy", "pyssla", "odla", "rita"];

// skapa li och koppla i ul, koppla till listan. 

for (let i = 0; i < array.length; i++){
    let li = document.createElement("li")
    li.innerHTML = array[i]
    //i%2 betyder varannan. i%3 är var tredje med början på jämt (0)
if(i%2===0){
    li.style.backgroundColor ="pink"
}
    ul.append(li)
};

//få listan in i en LI i ul


