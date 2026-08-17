

let amount = document.querySelector(".inp")
let from = document.querySelector('select[name="from"]');
let to = document.querySelector('select[name="to"]')
let msg = document.querySelector(".msg")
let form = document.querySelector("form")

let fromImg= document.querySelector(".from-img")
let toImg= document.querySelector(".to-img")

let arrow=document.querySelector("#arrow");

console.log(amount.value);
console.log(from.value);
console.log(to.value);

arrow.addEventListener("click",()=>{
    let temporary=from.value;
   from.value=to.value;
   to.value=temporary;

   let temporaryImg= fromImg.src;
   fromImg.src=toImg.src;
   toImg.src=temporaryImg;
})


from.addEventListener("change",()=>{
let countryCode= countryList[from.value];
fromImg.src=`https://flagsapi.com/${countryCode}/flat/64.png`
})

to.addEventListener("change",()=>{
let countryCode= countryList[to.value];
toImg.src=`https://flagsapi.com/${countryCode}/flat/64.png`
})



for(let key of Object.keys(countryList)){
let option=document.createElement("option")
option.value=key;
option.innerText=key;
from.appendChild(option);
}

for(let key of Object.keys(countryList)){
let option=document.createElement("option")
option.value=key;
option.innerText=key;
to.appendChild(option);
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let amountVal = Number(amount.value);
    let fromCurr = from.value;
    let toCurr = to.value;

    if(!Number.isFinite(amountVal) || amountVal<=0){
       return alert("Enter a valid number")
    }
  
    if(fromCurr===toCurr){
     return  msg.innerHTML=`<p> ${amountVal} ${fromCurr} = ${amountVal} ${toCurr}`

    }
    
arrow.addEventListener("click",()=>{
    let temporary=from.value;
   from.value=to.value;
   to.value=temporary;
})


    let url = `https://api.frankfurter.dev/v2/rate/${fromCurr}/${toCurr}`;
    msg.innerHTML=`<p> Fetching exchange rate </p>`
    try {
        
        let response = await fetch(url);
    let data =await response.json()
let val=(amountVal*data.rate)
let result=val.toFixed(2)

msg.innerHTML=`<p>${amountVal} ${fromCurr} = ${result} ${toCurr}</P`;
    } catch (error) {
        msg.innerHTML=`<p> Something went wrong.Try again</p>`
        console.log(error);
    }
    

}

)


