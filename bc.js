// basic calculator functions
var finalScreen = document.getElementById('finalScreen')
var editScreen = document.getElementById('editScreen')
editScreen.innerText = ' '
var number = document.getElementsByClassName('number')
var operators = document.getElementsByClassName('operator')
var equals = document.getElementById('equals')
var pow2 = document.getElementById('square')
var pow3 = document.getElementById('pow3')
var pow = document.getElementById('pow')
var backspace = document.getElementById('backspace')
var clear = document.getElementById('del')
var neg = document.getElementById('neg')
var answer = 0
var ansIndex = -1

function output(x){
    val =  editScreen.innerText
    val += `${x}`
    editScreen.innerText = val
}

function del(x){
    val = editScreen.innerText;
    if(x == 'b'){
        val = val.slice(0, val.length-1);
        editScreen.innerText = val
    }
    else{
        editScreen.innerText = ''
        finalScreen.innerText = ''
    }
}



function square(x){
    return x * x
}

function poow(num, exp){
    if(exp == 0){
        return 1
    }
    else if (exp % 2 == 0){
        return square(poow(num, exp / 2))
    }
    else{
        return num * poow(num, exp-1)
    }
}

function outputOnEScreen(x){
    for(var i=0; i < x.length; i++){
        x[i].addEventListener('click', function(){
            console.log('check 1: ', this.id)
            output(this.id)
        })
    }
}

function chooseSign(){
    output('(-')
}

function next(key){
    if(key == 'up' && ansIndex != 0){
        ansIndex -= 1
        editScreen.innerText = answer[ansIndex]
    }else if(key == 'down' &&  ansIndex != answer.length-1){
        ansIndex += 1
        editScreen.innerText = answer[ansIndex]
    }else{
        editScreen.innerText
    }
}

outputOnEScreen(number)
outputOnEScreen(operators)

equals.addEventListener('click', function(){
   evaluate()
})

backspace.addEventListener('click', function(){
    del('b')
})
clear.addEventListener('click', function(){
    del('c')
})

//keyboard interactions
document.addEventListener('keydown', function(event){
    x = event.key
    event.preventDefault()
    if(!isNaN(x) || x === '+' || x === '-' || x === '*' || x === '/' || x == ',' || x == '.'){
        output(x)
    }else if (x == 'Backspace'){
        del('b')
    }else if (x == 'Enter' || x == '='){
        evaluate()
    }else if (x == 'f' || x == 'o' || x == 't'  || x == 'b' || x == 'x' || x == 's' || x == 'l' || x == 'a'){
        output(x)
    }else if (x == '(' || x == ')'){
        output(x)
    }else if (x == 'ArrowLeft'){
        if(finalScreen.innerText != ''){
            editScreen.innerText = finalScreen.innerText
            finalScreen.innerText = ''
        }
    }else if (x == 'ArrowUp'){
        next('up')
    }else if (x == 'ArrowDown'){
        next('down')
    }
})

neg.addEventListener('click', function(){
    chooseSign()
})

pow2.addEventListener('click', function(){
    output('**(2)')    
})
pow3.addEventListener('click', function(){
    output('**(3)')    
})
pow.addEventListener('click', function(){
    output('**(')    
})



function evaluate(){
    x = editScreen.innerText
    finalScreen.innerText = x;
    
    if (!isNaN(x[x.length-1])){
        editScreen.innerText = eval(x);
    }else {
        x = x.replace(/'/g, '');
        answer = eval(x)
        console.log(typeof answer)
        if ((typeof answer)  != 'number'){
            editScreen.innerText = answer[0]
            ansIndex ++
        }else{
            ansIndex = -1
            editScreen.innerText = eval(x);        
        }
    }
}