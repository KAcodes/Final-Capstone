
    
    const savedSpace = document.getElementById('savedSpace');

    //This function loads the saved page with all the items that have been saved by obtaining session storage object
    const showSaved = () => {

        //if there is nothing saved then object is empty and nothing will render on page
        if (sessionStorage.getItem("savedContent") === null) {
            sessionStorage.setItem("savedContent", {});
        } else {
        //if there are objects in session storage, for every item in object, this is assigned to the innerHTML of a new created div which is appended to the containing div savedspace     
            let savedCon = JSON.parse(sessionStorage.getItem('savedContent'))
            for (const key in savedCon) {
                let newSavedItem = document.createElement('div');
                newSavedItem.innerHTML = (savedCon[key]);
                savedSpace.append(newSavedItem);
            }     
        }

        //All the icons are removed from this page as they are not needed using remove() method
        let takeOutInteractions = document.querySelectorAll("i")
        takeOutInteractions.forEach(save => save.remove())
    };  


