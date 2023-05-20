const data = [{
    img: "photos/prsn1.jpg",
    name: "Peter Parker",
    job: "General Manager",
    detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit  dolore unde ipsum natus, ducimus minima est quis perspiciatis! Id, aliasasperiores. Beatae fuga et officiis eos facere tempora quis similique odio!"
},
{
    img: "photos/prsn2.jpg",
    name: "Raj Kundra",
    job: "Sales Manager",
    detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum voluptatum ad sunt expedita neque culpa tempora sed error sit dolorem sint nemo qui dolore, possimus quaerat voluptate iure natus!"
},
{
    img: "photos/prsn3.jpg",
    name: "Alice Chopra",
    job: "Marketing Head",
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab amet dolores perferendis atque recusandae, illum corrupti impedit minus laborum quos similique at quisquam sunt commodi accusamus eius, consequatur eveniet sint? Harum, itaque nulla?"
},
{
    img: "photos/prsn4.jpg",
    name: "Bob Prat",
    job: "CEO",
    detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem  maiores  quae . Adipisci molestiae blanditiis aperiam, aspernatur, consectetur nihil culpa in consequatur quisquam quibusdam esse tenetur non."
}]
const gc = "rgb(0,150,100)"
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.getElementsByClassName("fa-circle")

let i = 0;
dots.item(i).style.color=gc
dots.item(i).style.scale="1.5"

document.getElementById("image").src = data[0].img
document.getElementById("name").innerText = data[0].name
document.getElementById("job").innerText = data[0].job
document.getElementById("details").innerText = data[0].detail
next.addEventListener('click', function () {
    if(i<3){i++}
    document.getElementById("image").src = data[i].img
    document.getElementById("name").innerText = data[i].name
    document.getElementById("job").innerText = data[i].job
    document.getElementById("details").innerText = data[i].detail
    if (i == 3) {
        next.style.color = "grey"
    }
    else {
        prev.style.color = gc
    }
    for(let j=0; j<4; j++ ){
        dots.item(j).style.color="gray"
        dots.item(j).style.scale="1"
    }
    dots.item(i).style.color=gc
    dots.item(i).style.scale="1.5"


})
prev.addEventListener('click', function () {
    if(i>0){i--}
    document.getElementById("image").src = data[i].img
    document.getElementById("name").innerText = data[i].name
    document.getElementById("job").innerText = data[i].job
    document.getElementById("details").innerText = data[i].detail
    if (i == 0) {
        prev.style.color = "grey"
    }
    else {
        next.style.color = gc
    }
    for(let j=0; j<4; j++ ){
        dots.item(j).style.color="gray"
        dots.item(j).style.scale="1"
    }
    dots.item(i).style.color=gc
    dots.item(i).style.scale="1.5"

})