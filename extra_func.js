var state = 'deg'
var trig_btn = document.getElementById('trig_state')
var state_disp = document.getElementById('state')

trig_btn.addEventListener('click', function(){
    if(state == 'deg'){
        state = 'rad'
        state_disp.innerText = 'RAD'
    }else if (state == 'rad'){
        state = 'deg'
        state_disp.innerText = 'DEG'
    }

    x = finalScreen.innerText
    if(x != ''){
        evaluate(x)
    }
})
function sin(x){    
    if(state == 'deg' && x == 180){
        return 0
    }else if(state == 'rad' && x == Math.PI){
        return 0
    }
    if (state == 'rad'){
        return Math.sin(x)
    }
    return Math.sin(x * (Math.PI)/180)
}
function cos(x){
    if(state == 'deg' && x == (90 || 270)){
        return 0
    }else if(state == 'rad' && x == ((Math.PI)/2 || ((Math.PI)* 3/2))){
        return 0
    }
    if (state == 'rad'){
        return Math.cos(x)
    }
    return Math.cos(x * (Math.PI)/180)
}
function tan(x){
    if(state == 'deg' && x == 180){
        return 0
    }else if(state == 'rad' && x == Math.PI){
        return 0
    }
    if (state == 'rad'){
        return Math.tan(x)
    }
    return Math.tan(x * (Math.PI)/180)
}

//factorial
function factorial(x){
    if(x < 0){
        return 'invalid'
    }else if(x <= 1){
        return 1
    }else{
        return x * factorial(x-1)
    }
}

function fac_eval(x, i){
    num_fac = ''
    start = 0
    for(var j = i-1; j >= 0; j--){
        if(x[j] == ('+' || '-' || '*' || '/') ){
            start = j
            break;
        }else{
            num_fac = x[j] + num_fac
        }
    }
    num_fac = num_fac.replace(/'/g, '')
    x = x.replace(num_fac, `factorial(${num_fac})`)
    x = x.replace(/!/g, '')
    return x
}