
let savedContent = {};

if (sessionStorage.getItem("savedContent") === null) {
    savedContent = {};
} else {
     savedContent = JSON.parse(sessionStorage.getItem("savedContent"))
    }
    


const saveContent = (key, event) => {

    let element = (event.currentTarget.closest(".saveable"));
    let words = element.innerHTML
   
    
        event.currentTarget.classList.toggle("saved");

    

            if (event.currentTarget.classList.contains("saved")) {
                
                savedContent = {
                   ...savedContent,
                   [key]: words 
                 };
               sessionStorage.setItem('savedContent', JSON.stringify(savedContent)); 

                 let count = 0;
                for(let items in savedContent) {
                    ++count;
                }

               alert(`Item saved for later. \nThere are ${count} items in the saved list.`)
       
           }    else {
                alert("Item unsaved for later")
               delete savedContent[key];
               sessionStorage.setItem('savedContent', JSON.stringify(savedContent));  
           }  
};


