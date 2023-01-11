
const savedSpace = document.getElementById('savedSpace');



const showSaved = () => {

    if (sessionStorage.getItem("savedContent") === null) {
        sessionStorage.setItem("savedContent", {});
    } else {
        
        let savedCon = JSON.parse(sessionStorage.getItem('savedContent'))
    
        for (const key in savedCon) {
            let divy = document.createElement('div');
            divy.innerHTML = (savedCon[key]);
            savedSpace.append(divy);
         
        } 
        
        
    }

    let takeOutSaves = document.querySelectorAll("i")
    takeOutSaves.forEach(save => save.remove())
        
    
};  


