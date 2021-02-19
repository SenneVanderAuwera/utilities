/** Does stuff */
export function currencyConvert(input, useForDisplay = false, showSymbol = false) {
    input = parseFloat(input);

    if(useForDisplay == false) { //NOT FOR DISPLAY
        return input;
    } else {    //FOR DISPLAY
        if(showSymbol == false) {
            return "€"+input;
        } else {
            return input;
        }
    }
}

export function testFunc() {
    return true;
}