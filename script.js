const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    "Dream it. Wish it. Do it.",
    "The future depends on what you do today.",
    "You are never too old to set another goal or to dream a new dream.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your limitation—it's only your imagination.",
];
const quoteText =document.getElementById("quote"); 
const newQuoteBtn  = document.getElementById("new-quote-btn");

newQuoteBtn.addEventListener(
    'click' , () => { 
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    }
);
