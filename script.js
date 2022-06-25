const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");


function randomQuote(){
    let rnum =Math.floor(Math.random()*100);
    fetch("https://type.fit/api/quotes").then(res => res.json()).then(result =>{
    quoteText.innerText = result[rnum].text;
    authorName.innerText = "- " +"By" +" " + result[rnum].author;
 });
}
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector(".quote-area .quote").style.color = "#" + randomColor;
    document.querySelector(".quote-area i").style.color = "#" + randomColor;
    document.querySelector(".wrapper .author").style.color = "#" + randomColor;
    document.querySelector("button").style.backgroundColor = "#" + randomColor;
    document.querySelector("#quote-2").style.color = "#" + randomColor;
  }
  
