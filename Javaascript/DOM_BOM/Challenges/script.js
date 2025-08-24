//exaple 1



document.getElementById("changeTextButton").addEventListener("click", () => {
  let res = document.getElementById("myParagraph");

  res.textContent = "iam changed guys";
});

//example 2

document.getElementById("highlightFirstCity").addEventListener("click", () => {
  let citesLists = document.getElementById("citesList");

  citesLists.firstElementChild.classList.add("highlight");
});

//example 3

document.getElementById("changeOrder").addEventListener("click", () => {
  let change = document.getElementById("coffeeType");
  change.textContent = "expresso";
  change.style.color = "red";
});

// <!-- example-4 creating and inserting elements -->

document.getElementById("addNewItem").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});



//example-5 removing dom element



document.getElementById("removeLastTask").addEventListener("click", () => {
  let res = document.getElementById("taskList");

  res.lastElementChild.remove();
});



// example-6: event handing in DOM

document.getElementById("clickMeButton").addEventListener("dblclick",()=>{

    alert('helloooo')
})



//example 7 event delegation


document.getElementById("teaList").addEventListener('click',(event)=>{
    
    if (event.target && event.target.matches(".teaItem")) {
      alert("you are selected  " + event.target.textContent);
    }
})


//exaple 8 feedback form

document.getElementById("feedbackform").addEventListener('submit',(e)=>{

event.preventDefault()

let feedback = document.getElementById("feedbackInput").value



document.getElementById("feedbackDisplay").textContent=`feedback is: ${feedback}` 

document.getElementById("feedbackDisplay").style.color = "red";

})



//exaple 9

document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("domStatus").textContent='dom fully loaded'
})


//exaple 10

document.getElementById("toggleHighlight").addEventListener("click",()=>{

    let res = document.getElementById("decriptionText")

    res.classList.toggle('highlight')
})