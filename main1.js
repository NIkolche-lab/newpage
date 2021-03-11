// let age = prompt("Enter your age");
// if(age >= 16) {
//     console.log("Thank you for your visit!")
// } else if( age === "") {
// alert("Enter you age!")
// } else {
//     alert("Return when you are 16 years old!")
// }



const newQuoteButton = document.querySelector('#js-quoter');

newQuoteButton.addEventListener('click', getQuote);
const endpoint ='https://api.whatdoestrumpthink.com/api/v1/quotes/random';






async function getQuote() {

    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        // for ( i=0; i < json.length; i++) {
        //    let obj = JSON.stringify(json[i])
           displayQuote(json.message)
        // }
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote')
    }
   
}

function displayQuote(quotes) {
    const quoteText = document.querySelector('#js-quoter');
    quoteText.textContent = quotes;
  }
  