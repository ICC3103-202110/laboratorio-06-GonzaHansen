//Transformations.
const CelFar = input=> ((Number(input))*(9/5)+32);
const FarCel = input=> ((Number(input)-32)*(5/9));
const CelKel = input=> (Number(input)+273.15);
const KelCel = input=> (Number(input)-273.15);
const FarKel = input=> (((Number(input)-32)*(5/9))+273.15);
const KelFar = input=> (((Number(input)-273.15)*(9/5))+32);



function updateLeft(input2, input3, input4){ //input2= numero, imput3 y input4 transformaciones
    let output = 0
    if(input3 === "Celsius"){
        if(input4 === "Celsius"){output = input2}
        if(input4 === "Fahrenheit"){output = CelFar(input2)}
        if(input4 === "Kelvin"){output = CelKel(input2)}
    }
    if(input3 === "Fahrenheit"){
        if(input4 === "Celsius"){output = FarCel(input2)}
        if(input4 === "Fahrenheit"){output = input2}
        if(input4 === "Kelvin"){output = FarKel(input2)}
    }
    if(input3 === "Kelvin"){
        if(input4 === "Celsius"){output = KelCel(input2)}
        if(input4 === "Fahrenheit"){output = KelFar(input2)}
        if(input4 === "Kelvin"){output = input2}
    }
    return {  
        leftValue: input2,
        leftUnit: input3,
        rightValue: output,
        rightUnit: input4, 
    }
}

function updateRight(input2, input3, input4){ //input2= numero, imput3 y input4 transformaciones
    let output = 0
    if(input3 === "Celsius"){
        if(input4 === "Celsius"){output = input2}
        if(input4 === "Fahrenheit"){output = CelFar(input2)}
        if(input4 === "Kelvin"){output = CelKel(input2)}
    }
    if(input3 === "Fahrenheit"){
        if(input4 === "Celsius"){output = FarCel(input2)}
        if(input4 === "Fahrenheit"){output = input2}
        if(input4 === "Kelvin"){output = FarKel(input2)}
    }
    if(input3 === "Kelvin"){
        if(input4 === "Celsius"){output = KelCel(input2)}
        if(input4 === "Fahrenheit"){output = KelFar(input2)}
        if(input4 === "Kelvin"){output = input2}
    }
    return {
        leftValue: output,
        leftUnit: input4,
        rightValue: input2,
        rightUnit: input3 
    }
}

module.exports = {
    updateLeft,
    updateRight
}