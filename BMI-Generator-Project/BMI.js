const cal = document.getElementById('cal-btn')
// this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height).value)

cal.addEventListener('click', function(){

const height = parseInt(document.getElementById('height').value);
const weight = parseInt(document.getElementById('weight').value);
const results = (document.getElementById('results'));

if(height === '' || height < 0 || isNaN(height)){
    results.textContent = `Please give a valid height ${height}`;
} else if(height === '' || weight < 0 || isNaN(weight)){
    results.textContent =` Please give a valid weight ${weight}`;
} else {
    let final=(weight / ((height*height)/10000)).toFixed(2)
    // Show the result
    let a= document.createElement('span')
    a.textContent=final
    results.appendChild(a)
}

});