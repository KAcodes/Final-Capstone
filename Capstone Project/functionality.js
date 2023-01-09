let liked = document.querySelectorAll("i.fa-heart");

liked.forEach(heart => heart.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("liked-heart")
}))




let savedItems = [];

function preLoad() {
        
    //if no items are in session storage an empty array is created and this is set as a "books" storage item
    //otherwise this "books" item is taken from session storage and create item is called for each object within books array
  
    if (localStorage.getItem("Saved") === null) {
        localStorage.setItem("Saved", JSON.stringify(savedItems));
    } else {
        savedItems = JSON.parse(localStorage.getItem("Saved"));
        savedItems.forEach((thisItem) => {
            
            let body = document.querySelector("main-content");
            body.append(thisItem);
        })
        
    }
}

let save = document.querySelectorAll("i.fa-save");

save.forEach(heart => heart.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("saved")
    if (e.currentTarget.classList.contains("saved") == true) {
        console.log("saved")
        console.log(e.currentTarget.closest(".section"))
    }   else {
        console.log("unsaved")
        console.log(e.currentTarget)
    }
}))


function preLoad() {
        
    //if no items are in session storage an empty array is created and this is set as a "books" storage item
    //otherwise this "books" item is taken from session storage and create item is called for each object within books array
    let savedItems = [];
    if (localStorage.getItem("Saved") === null) {
        localStorage.setItem("Saved", JSON.stringify(savedItems));
    } else {
        savedItems = JSON.parse(localStorage.getItem("Saved"));
        savedItems.forEach((thisItem) => {
            
            let body = document.querySelector("main-content");
            body.append(thisItem);
        })
        
    }
}