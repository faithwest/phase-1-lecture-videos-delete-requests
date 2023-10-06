// first choose the card/position where the object is
card.querySelector('#set_free').addEventListener('click', () => {
    card.remove()//or card.innerHTML = "" NO VALUE DELETES IT
    deleteAnimal(animal.id)//invoke the update it with fetch below
});


//we need to update the deletion
function deleteAnimal(id){ //create a function to delete  
    fetch (`url/${id}`, {//THE TAGS ARE BACKFACING
    method: 'DELETE', //WE DELETE
    headers: { //ensures the content we are requesting is json
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())//ensures the server returns response as json
.then(animal => console.log(animal))//callback function to execute a promise
}
