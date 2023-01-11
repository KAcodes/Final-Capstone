let savedContent = {};

const saveContent = (key, value, event) => {
    //console.log(event.currentTarget)
    event.currentTarget.classList.toggle("saved");

     if (event.currentTarget.classList.contains("saved")) {
        
        let element = (event.currentTarget.closest(".section"));
        console.log(element)
        savedContent = {
            ...savedContent,
            [key]: value
          };
        sessionStorage.setItem('savedContent', JSON.stringify(savedContent));
        //console.log()
        console.log(sessionStorage.getItem('savedContent'));

    }   else {
        delete savedContent[key];
        sessionStorage.setItem('savedContent', JSON.stringify(savedContent));
        //console.log(sessionStorage.getItem('savedContent'));  
    } 

    /* const showSaved = () => {
        for (const key in savedContent) {
            savedSpace.append(savedContent[key]);
        }
    }; */


};

const deleteItem = (key) => {
    
}

const savedSpace = document.getElementById('savedSpace');

const showSaved = () => {
    for (const key in savedContent) {
        savedSpace.append(savedContent[key]);
    }
};