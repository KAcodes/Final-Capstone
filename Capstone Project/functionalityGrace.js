let savedContent = {};

const saveContent = (key, event) => {
    //console.log(event.currentTarget)
    event.currentTarget.classList.toggle("saved");

     if (event.currentTarget.classList.contains("saved")) {
        
        //let element = (event.currentTarget.closest(".section"));
        let element = (event.currentTarget.closest(".section"))
        let words = element.innerHTML

        savedContent = {
            ...savedContent,
            [key]: words
          };
        sessionStorage.setItem('savedContent', JSON.stringify(savedContent));
        console.log(sessionStorage.getItem('savedContent'));

    }   else {
        delete savedContent[key];
        sessionStorage.setItem('savedContent', JSON.stringify(savedContent));
        console.log(sessionStorage.getItem('savedContent'));  
    } 

  
};



const savedSpace = document.getElementById('savedSpace');



const showSaved = () => {
   
    
    let savedCon = JSON.parse(sessionStorage.getItem('savedContent'))
    
    for (const key in savedCon) {
        let divy = document.createElement('div');
        divy.innerHTML = (savedCon[key]);
        savedSpace.append(divy);
        
    } 
}; 