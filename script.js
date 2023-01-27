const submitBtn= document.querySelector(".submit-button")
const rate1 = document.getElementById("rate-1")
const rate2 = document.getElementById("rate-2")
const rate3 = document.getElementById("rate-3")
const rate4 = document.getElementById("rate-4")
const rate5 = document.getElementById("rate-5")
const container = document.querySelector(".container")
let count = 0
let message = ""
submitBtn.addEventListener("click",function(){
    message = `You selected ${count} out of 5`
    container.innerHTML = 
    `
    <img src="images/illustration-thank-you.svg" class="thank-you-icon">
    <span class="displayed-rating">${message}</span>
    <h2 class="thankyou-message">Thank you!</h2>
    <p class="salutation">We appreciate you taking the time to give a rating.
    if you ever need more support,don't hesitate to
     get in touch!<p>
    `
    console.log(message)

})
rate1.addEventListener("click",function(){
    document.querySelector('#rate-1').classList.add('myClass');
    count = 1
    return count
})
rate2.addEventListener("click",function(){
    document.querySelector('#rate-2').classList.add('myClass');
    count = 2
    return count
})
rate3.addEventListener("click",function(){
    document.querySelector('#rate-3').classList.add('myClass');
    count = 3
    return count
})
rate4.addEventListener("click",function(){
    document.querySelector('#rate-4').classList.add('myClass');
    count = 4
    return count
})
rate5.addEventListener("click",function(){
    document.querySelector('#rate-5').classList.add('myClass');
    count = 5
    return count
})
