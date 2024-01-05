const form=document.querySelector('form')

// this usecase will give u empty value
// const h=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {

    e.preventDefault() //stop sending data to the server by

    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const result=(document.querySelector('#result'))
    const res=(document.querySelector('#result-suggestion'))

    if (h === 0 || h < 0 || isNaN(h)) {
        result.innerHTML = `Please give a valid height ${h}`
    }
    else if (w === 0 || w < 0 || isNaN(w)) {
        result.innerHTML = `Please give a valid weight ${w}`
    }
    else{
        const bmi=(w/((h*h)/10000)).toFixed(2)
        //show the result
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            res.innerHTML = '<span>Suggestion : Oops , You are under weight.. You have to eat more..</span>'
        }
        else if(bmi>18.6 && bmi<24.9){
            res.innerHTML = '<span>Suggestion : Wohoo.. You are a healthy-wealthy person ENJOY</span>'
        }
        else if(bmi>24.9){
            res.innerHTML = '<span>Suggestion : Gosh,, You are Overweighted.. Its time to go on a walk</span>'
        }
    }
    
})