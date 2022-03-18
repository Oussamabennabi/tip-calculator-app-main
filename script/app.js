const tipEl = document.querySelectorAll(".tip");
const results = document.querySelectorAll(".result-value");
const tipAmountEl = results[0] 
const totalAmountEl = results[1] 
const resetBtnEl = document.querySelector(".reset-btn");
// inputs 
const customTipEl = document.getElementById("custom-tip");
const billEl = document.getElementById("bill");
const peopleNumberEl = document.getElementById("people")

// global variables
let selectedTip = 0;
let total = 0.00;
let numberOfpeople = 1;
let bill = 0
// INITIALIZE VALUES
peopleNumberEl.value =1;
billEl.value = 0


billEl.addEventListener("input",function(e){
  bill = e.target.value;
  renderResult();

})

// TIPS
tipEl.forEach(function (tip) {
  if (tip.classList.contains("checked")) {
    selectedTip = Number(tip.innerText.slice(0, -1));
  
  }
  tip.addEventListener("click", function (e) {
    tipEl.forEach(function (tip) {
        tip.classList.remove('checked');
    })
    e.target.classList.add('checked');
    selectedTip = Number(e.target.innerText.slice(0, -1))
    renderResult();

  })
})
customTipEl.addEventListener("input",function(e){
    if (!Number(e.target.value)) {
      return;
    }
  selectedTip = Number(e.target.value)
    renderResult();


})

// number of peopl 
peopleNumberEl.addEventListener("input",function(e){
  
  if (Number(e.target.value) === 0) {
      setTimeout(() => {
        e.target.parentElement.querySelector(".Zero-error").classList.remove('show');
      }, 1000);
      tipAmountEl.innerHTML = 0
    totalAmountEl.innerHTML = 0 
    // show the error
      e.target.parentElement.querySelector(".Zero-error").classList.add('show');
  } else {
    numberOfpeople = Number(e.target.value);
  }
  renderResult();
  
})

// RESET BTN 
resetBtnEl.addEventListener("click", function(){
  resetToDefault();
})
// FUNCTIONS
function renderResult() {
  tipAmountEl.innerHTML = ((bill * (selectedTip / 100)) / numberOfpeople).toFixed(2)
  totalAmountEl.innerHTML = ((bill / numberOfpeople) +  Number(tipAmountEl.innerHTML)).toFixed(2)
  
}
function resetToDefault() {
  tipAmountEl.innerHTML = 0
  totalAmountEl.innerHTML = 0 
  customTipEl.value = ''
  billEl.value = 0
  peopleNumberEl.value =1;
  selectedTip = 0;
  tipEl.forEach(function (tip) {
    tip.classList.remove("checked")
  })
  total = 0.00;
  
}