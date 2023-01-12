
    //initialise a savedcontent object which if the session storage is empty then object is empty but if there is content in the storage then this data is assigned to the savedcontent object
    let savedContent = {};
    if (sessionStorage.getItem("savedContent") === null) {
        savedContent = {};
    } else {
        savedContent = JSON.parse(sessionStorage.getItem("savedContent"));
    }
    

    //Function makes a save for later function which uses session storage to store all items a user has saved in there which is retrievable later, also option to remove it 
    const saveContent = (key, event) => {

        //closest saveable object to save button is assigned to variable, and classlist saved is toggled which thurns icon blue
        let element = (event.currentTarget.closest(".saveable"));
        let elementContent = element.innerHTML;
        event.currentTarget.classList.toggle("saved");

        //if the icon is pressed and now saved then this object is added to the savedcontent object which is then set as a new storage item
        if (event.currentTarget.classList.contains("saved")) {
                
            savedContent = {
                ...savedContent,
                [key]: elementContent 
            };
            sessionStorage.setItem('savedContent', JSON.stringify(savedContent)); 

            //for loop counts how many items are in object and alerts user the number of items in saved list 
            let count = 0;
            for(let items in savedContent) {
                ++count;
            };

            alert(`Item saved for later. \nThere are ${count} items in the saved list.`);

        //if class of the icon was saved previously and now is toggled to off when clicked, then this unsaves item and deletes it from session storage
        }   else {
                alert("Item unsaved for later");
                delete savedContent[key];
                sessionStorage.setItem('savedContent', JSON.stringify(savedContent));  
            };  
    };


        //Create a like button which user presses and colour changes
        const heart = (event) => {
        event.currentTarget.classList.toggle("liked-heart");
        };
