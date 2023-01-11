
const savedSpace = document.getElementById('savedSpace');


const showSaved = () => {

    if (sessionStorage.getItem("savedContent") === null) {
        sessionStorage.setItem("savedContent", {});
    } else {
        let savedCon = JSON.parse(sessionStorage.getItem('savedContent'))
    
    for (const key in savedCon) {
        let divy = document.createElement('div');
        divy.innerHTML = (savedCon[key]);
        let bin = document.createElement('i');
        bin.className = "fa fa-trash";
        divy.append(bin);
        savedSpace.append(divy);
         
    } 
        
    }



   
   
};  


const deleteItem = () => {
    
    {
        delete savedContent[key];
        sessionStorage.setItem('savedContent', JSON.stringify(savedContent));
        console.log(sessionStorage.getItem('savedContent'));  
    }  
}