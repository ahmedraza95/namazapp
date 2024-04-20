
let userName = prompt("plz Type Your Name");

let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#inputID");
let table = document.querySelector(".time-table");
let times = document.querySelector(".times");
let namazTime = document.querySelector(".namaztime");
let userinfo = document.querySelector(".username")
console.log(userName);
userinfo.innerHTML = "";
userinfo.innerHTML += "<h4>Hello,</h4> " + userName + "👋👋" ;
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableOf = input.value;
  table.innerHTML = "";
  namazTime.innerHTML = "";
console.log(namazTime);
let finalValue = input.value;

    if (finalValue === "Karachi" ){
        table.innerHTML += finalValue;
        namazTime.innerHTML +=  `<h1>Fajr : 04:44:31am</h1>
        <h1>Zuhar : 12:30:29pm</h1>
        <h1>Asar :  05:06:35pm</h1>
        <h1>Maghrib : 06:57:40pm</h1>
        <h1>Isha : 08:17:00pm</h1>`;
        

    } else {
        document.write("IN PROGRESS")
    }
    
    
});

// navigator.clipboard.writeText("Chandio");
// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".editor").innerText += clipText)
//   );