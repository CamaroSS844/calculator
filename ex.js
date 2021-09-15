// codes for builders function
var abc = 0
var numberOfBags = 0
var riverSand = 0
var quarry = 0
var volume = 0
var active_fun = 0
var errors = 0
var editScreen = document.getElementById('editScreen')
var history = document.getElementById('History')
var historyp1 = document.getElementById('historyp1')
var historyp2 = document.getElementById('historyp2')
var footing = document.getElementById('footing')
var boxBtn = document.getElementById('box_')
var slabBtn = document.getElementById('slab')

//default text
historyp1.innerText = "For builders functions: func(length, wall)"

function display(x){
    if (typeof x == 'string'){
        editScreen.innerText = x
    }else if (typeof x == 'array'){
        historyp1.innerText = x[0]
        for (var i = 1; i < x.length; i++){
            value = historyp2.createTextNode(`${x[i]}`)
            document.appendChild(value)
        }
    }
}

function valid_wall(length, wall){
    if (wall === 230) {
        volume = length * 0.7 * 0.23;
        return true
    } else if (wall === 115) {
        volume = length * 0.5 * 0.23;
        return true
    } else{
        errors = `wall should be either 230 or 115 not ${wall} `
        return false
    };
}

function required_values(volume){

    abc = volume * 1 / 6;
    numberOfBags = abc * 1 / 0.034;
    riverSand = abc * 2 * 1.5;
    quarry = abc * 3 * 1.5;
    list = [`${volume} cubic metres`, `${numberOfBags} cement`, `${riverSand} Riversand`
    , `${quarry} quarry`]
    return list
}

function foot(length, wall) {
    active_fun = 'foot'
    if(valid_wall(length, wall)){
        return required_values(volume)
    } else{
        console.error(`Syntax error: fun(length,wall) where wall is either 230 or 115 not ${wall}`);
        return errors
    }
}

//box
var MyApp = {};
var block = "block";
function nofbricks( length, wall) {
    var msqr = length * 0.7;
    if (wall === 115) {
        var nB = msqr * 60;        
    } else if (wall === 230) {
        var nB = msqr * 120;
    } else if (wall == "block") {
        var nB = msqr * 10;
    }
    MyApp.nB = nB;
}

function pitsand(length) {
    let xyz = MyApp.nB * 0.5 * 1 / 1000;
    let vps = xyz * 4 * 1 / 5;
    let amount = vps * 1.5;
    let bags = vps * 1 / 5 * 1 / 0.034;
    let nofBFlines = 700 / 85 * 1 / 2;
    let nofLines = nofBFlines - 1;
    let tlengthofBF = nofLines * length;
    let rollsofBF = tlengthofBF / 20;
    return [`${amount} tons pitsand`, `${bags} cement`, `${rollsofBF} brickforce`]
}

function box(length, wall) {
    active_fun = 'box'
    nofbricks(length, wall)
    return pitsand(length)
};

function slab(length, wall) {
    active_fun = 'slab'
    if (wall === 230) {
        volume = length * 0.7 * 0.23;
    } else if (wall === 115) {
        volume = length * 0.5 * 0.23;
    } else if (wall !== 230 || 115) {
        return console.error(`value ${wall} is not valid`);
    };
    return required_values(volume)
}; 
footing.addEventListener('click', function(){
    output('foot(')
})
slabBtn.addEventListener('click', function(){
    output('slab(')
})
boxBtn.addEventListener('click', function(){
    output('box(')
})
