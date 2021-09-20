function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('Por favor Digite um Numero')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}






































/*
for (var c =1; c <= 3; c++) {
    alert(`Olá esse é o passo ${c}`)
}
*/
/*var c = 1
do {
    alert(`passo ${c}`)
    c++
} while ( c <= 6)

*/
/*
var c = 1
while (c < 6 ) {
    c++;
    alert('ainda estou contado!')
}
alert('Aqui acabou o contador')
*/
/*
alert('Tudo bem? 1°');
alert('Tudo bem? 2°');
alert('Tudo bem? 3°');
alert('Tudo bem? 4°');
alert('Tudo bem? 5°');
alert('Tudo bem? 6°');
alert('Tudo bem? 7°');
alert('Tudo bem? 8°');
*/

