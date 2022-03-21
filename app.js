let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let tbody = document.querySelector("#tbody");
let submitBTN = document.querySelector("#submitbtn");
let newFN = document.createElement("td")

//listen for click on button
submitbtn.addEventListener("click", function(){

    //if FN or LN are blank set alert
    if(firstName.value.trim() == "" || lastName.value.trim() == ""){
        alert("Enter your name!")
    }
    else{

        //Else add info to the table

        //creates a new row for users input data in table row
        let newRow=document.createElement("tr");

        //create new varialbes for new FN and LN
        //creates new Table Data (td) to table rows FN and LN
        let newFN = document.createElement("td");
        let newLN = document.createElement("td");

        //grabs the new FN/LN to the users input for FN/LN from html doc
        newFN.innerHTML=firstName.value;
        newLN.innerHTML=lastName.value;

        //adds users input to the new row created 
        newRow.appendChild(newFN);
        newRow.appendChild(newLN);

        //adds users input to table
        tbody.appendChild(newRow)

        //clears user input after every submition
        firstName.value = "";
        lastName.value = "";
    }
})
