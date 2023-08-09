// function saveInput(){
//     console.log("Button clicked from onclick attribute!")
// }
let myLeads = [];
//let lead1 = "www.someleads.com";

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// const tab = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click", function(){
    //Saving from the chrome tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    
        //console.log(tab[0].url);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    });
});

if(leadsfromLocalStorage){
    myLeads = leadsfromLocalStorage;
    render(myLeads);
} 
// console.log(leadsfromLocalStorage);

function render(lead){
    let listItems = "";
    for(let i=0; i < lead.length; i++){

        //Method 1
        //ulEl.innerHTML += "<li>" + myLeads[i] +"</li>";
        //Method 2
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);

        //Method 3
        // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>" + myLeads[i] +"</a></li>"; 
        listItems += `
        <li>
            <a target='_blank' href='${lead[i]}'> ${lead[i]}</a>
        </li>`; 
        //console.log(listItems);
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
    let inputVal = document.querySelector("input").value;
    myLeads.push(inputVal);
    setTimeout(function(){
        document.getElementById("input-el").value = "";
    },1000);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    //reset();
    render(myLeads);
    //console.log(localStorage.getItem("myLeads"))
})
delBtn.addEventListener("dblclick", function(){
    localStorage.clear();

    //First method
    // localStorage.removeItem("myLeads");
    // ulEl.innerHTML = "";

    // Second method
    myLeads = [];
    render(myLeads);
})

// function reset(){
//     document.getElementById("input-el").value = "";
// }


