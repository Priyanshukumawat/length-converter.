var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value


    // meter

    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 1000
    }else if(inputTypeValue === 'meter' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 10
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3.28084
    }else if(inputTypeValue === 'meter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 39.3701
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 0.000621371
    }else if(inputTypeValue === 'meter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1.09361
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    }

    // milimeter

    if(inputTypeValue === 'milimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.001
    }else if(inputTypeValue === 'milimeter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 0.1
    }else if(inputTypeValue === 'milimeter' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 0.01
    } else if(inputTypeValue === 'milimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1e-6
    } else if(inputTypeValue === 'milimeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 0.00328084
    }else if(inputTypeValue === 'milimeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 0.0393701
    }else if(inputTypeValue === 'milimeter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 6.2137e-7
    }else if(inputTypeValue === 'milimeter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 0.0277778
    } else if(inputTypeValue === 'milimeter' && resultTypeValue === 'milimeter'){
        result.value = input.value
    }

    // centimeter
    if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.01
    }else if(inputTypeValue === 'centimeter' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 10
    }else if(inputTypeValue === 'centimeter' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 0.1
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1e-5
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 0.0328084
    }else if(inputTypeValue === 'centimeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 0.393701
    }else if(inputTypeValue === 'centimeter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 6.2137e-6
    }else if(inputTypeValue === 'centimeter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 0.0109361
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value
    }


    // decimeter

    if(inputTypeValue === 'decimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.1
    }else if(inputTypeValue === 'decimeter' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 100
    }else if(inputTypeValue === 'decimeter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 10
    } else if(inputTypeValue === 'decimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1e-4
    } else if(inputTypeValue === 'decimeter' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 0.328084
    }else if(inputTypeValue === 'decimeter' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 3.93701
    }else if(inputTypeValue === 'decimeter' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 6.2137e-5
    }else if(inputTypeValue === 'decimeter' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 0.109361
    } else if(inputTypeValue === 'decimeter' && resultTypeValue === 'decimeter'){
        result.value = input.value
    }

    // kilometer

    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000
    }else if(inputTypeValue === 'kilometer' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 1e+6
    }else if(inputTypeValue === 'kilometer' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 10000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3280.84
    }else if(inputTypeValue === 'kilometer' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 39370.1
    }else if(inputTypeValue === 'kilometer' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 0.621371
    }else if(inputTypeValue === 'kilometer' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1093.61
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value
    }

    // foot--to be

    if(inputTypeValue === 'foot' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.3048
    }else if(inputTypeValue === 'foot' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 304.8
    }else if(inputTypeValue === 'foot' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 3.048
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.0003048
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 30.48
    }else if(inputTypeValue === 'foot' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 12
    }else if(inputTypeValue === 'foot' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 0.000189394
    }else if(inputTypeValue === 'foot' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 0.333333
    } else if(inputTypeValue === 'foot' && resultTypeValue === 'foot'){
        result.value = input.value
    }


    // inch

    if(inputTypeValue === 'inch' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.0254
    }else if(inputTypeValue === 'inch' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 25.4
    }else if(inputTypeValue === 'inch' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 0.254
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 2.54e-5
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 0.0833333
    }else if(inputTypeValue === 'inch' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 2.54
    }else if(inputTypeValue === 'inch' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 1.5783e-5
    }else if(inputTypeValue === 'inch' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 0.0277778
    } else if(inputTypeValue === 'inch' && resultTypeValue === 'inch'){
        result.value = input.value
    }

    // mile

    if(inputTypeValue === 'mile' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 160934
    }else if(inputTypeValue === 'mile' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 1.609e+6
    }else if(inputTypeValue === 'mile' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 16093.4
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1.60934
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 5280
    }else if(inputTypeValue === 'mile' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 63360
    }else if(inputTypeValue === 'mile' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 160934
    }else if(inputTypeValue === 'mile' && resultTypeValue === 'yard'){
        result.value = Number(input.value) * 1760
    } else if(inputTypeValue === 'mile' && resultTypeValue === 'mile'){
        result.value = input.value
    }

    // yard

    if(inputTypeValue === 'yard' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.9144
    }else if(inputTypeValue === 'yard' && resultTypeValue === 'milimeter'){
        result.value = Number(input.value) * 914.4
    }else if(inputTypeValue === 'yard' && resultTypeValue === 'decimeter'){
        result.value = Number(input.value) * 9.144
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.0009144
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'foot'){
        result.value = Number(input.value) * 3
    }else if(inputTypeValue === 'yard' && resultTypeValue === 'inch'){
        result.value = Number(input.value) * 36
    }else if(inputTypeValue === 'yard' && resultTypeValue === 'mile'){
        result.value = Number(input.value) * 0.000568182
    }else if(inputTypeValue === 'yard' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 91.44
    } else if(inputTypeValue === 'yard' && resultTypeValue === 'yard'){
        result.value = input.value
    }
}