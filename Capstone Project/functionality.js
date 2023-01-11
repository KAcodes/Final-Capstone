

/* const saveContent = (key, event) => {
    

    let element = (event.currentTarget.closest(".saveable"));
    let words = element.innerHTML
    let savelist = JSON.parse(sessionStorage.getItem('savedContent'))
    
    if (savelist == null) {

        event.currentTarget.classList.toggle("saved");

        if (event.currentTarget.classList.contains("saved")) {
           
          
   
            savedContent = {
               ...savedContent,
               [key]: words 
             };
           sessionStorage.setItem('savedContent', JSON.stringify(savedContent)); 
   
       }    else {
           delete savedContent[key];
           sessionStorage.setItem('savedContent', JSON.stringify(savedContent));  
       }  
       
        
    } else if (savelist[key] == null){

        event.currentTarget.classList.toggle("saved");

        if (event.currentTarget.classList.contains("saved")) {
           
          
   
            savedContent = {
               ...savedContent,
               [key]: words 
             };
           sessionStorage.setItem('savedContent', JSON.stringify(savedContent)); 
   
       }    else {
           delete savedContent[key];
           sessionStorage.setItem('savedContent', JSON.stringify(savedContent));  
       }  

    } else {
        alert("already there")
    }

    
}; */

let isSaved = {};

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
                alert("Saved")
                savedContent = {
                   ...savedContent,
                   [key]: words 
                 };
               sessionStorage.setItem('savedContent', JSON.stringify(savedContent)); 

       
           }    else {
                alert("Unsaved")
               delete savedContent[key];
               sessionStorage.setItem('savedContent', JSON.stringify(savedContent));  
           }  
       

        


     
       
};


