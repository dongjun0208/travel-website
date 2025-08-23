function caluateOnClickHandler(){
    const base = perseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    if (isNaN(base) || isNaN(height) || base<=0 || height<=0){
        alert("밑변과 높이를 제대로 알려줘")
    }

}
document.getElementById("callculate").addEventListener("click,caluateOnClick")