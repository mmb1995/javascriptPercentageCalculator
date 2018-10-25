var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');
var optionList = document.getElementById('equationList');
var equationSelected = "1";

optionList.addEventListener("change", function () {
    var opt = optionList.options[optionList.selectedIndex];
    equationSelected = opt.value;
    console.log(equationSelected);
})

form.addEventListener('submit', function (event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in both fields")
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        console.log(equationSelected);
        switch(equationSelected) {
            case '1':
                var result = x / y;
                var percent = result * 100;
                
                resultField.innerText = "Answer: " + percent + "%";
                break; 
            case '2':
                var percent = y / 100;
                var result = X * percent;
                
                resultField.innerText = "Answer: " + result;
                break;
            case '3':
                var percent = y / 100;
                var result = x / percent;
                
                resultField.innerText = "Answer: " + result;
                break;
            case '4':
                var result = y / x;
                var percent = result * 100;
                
                resultField.innerText = "Answer: " + percent + "%";
                break;
            case '5':
                var percent = x / 100;
                var result = y / percent;
                
                resultField.innerText = "Answer " + result;
                break;
            default:
                break;
                       
        }
        
        event.preventDefault();
    }
});