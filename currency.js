
function one() {
    let input_e = document.getElementById("input").value
    let dollar = (input_e * (580))
     document.getElementById("output").value = "$" + dollar

}
function two() {
    let  input_e = document.getElementById("input").value
    let euro = (input_e * (431.90))
     document.getElementById("output").value = "€" + euro

}
function three() {
    let input_e = document.getElementById("input").value
    let pounds = (input_e * (499.67))
    document.getElementById("output").value = "£" + pounds
}
function four() {
    let input_e = document.getElementById("input").value
    let ngn = (input_e / 580)
    document.getElementById("output").value = "#" + ngn
}
function five() {
    let input_e = document.getElementById("input").value
    let ngn = (input_e / 431.90)
    document.getElementById("output").value = "#" + ngn
}
function six() {
    let input_e = document.getElementById("input").value
    let ngn = (input_e / 499.67)
    document.getElementById("output").value = "£" + ngn
}





