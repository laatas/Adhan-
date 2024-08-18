
const verif = document.getElementById("verifOnClick");



function entryInfo(){
    const input = document.getElementsByClassName("city")[0];
    const inputValue = input.value;
    console.log(inputValue);
    return inputValue;
}
verif.addEventListener("click",entryInfo);

