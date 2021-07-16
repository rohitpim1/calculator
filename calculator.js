const toggleSwitch = document.querySelector('theme-switch input[type="checkbox"]');

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme","dark");
    } else {
        document.documentElement.setAttribute("data-theme","light");
    }
}
if(toggleSwitch)
{
    toggleSwitch.addEventListener("change",switchTheme,false);

}
let input = document.getElementById("input");
let output = document.getElementById("output");

function calculate(data){
    console.log(data);
    switch(data){
        case "AC":
            input.innerHTML=" ";
            output.innerHTML=0;
            break;

        case "C":
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
            break;

        case "=":
            output.innerHTML=math.evaluate(`${input.innerHTML}`);
            break;

       

        default:
            input.innerHTML += data;    

    }
}