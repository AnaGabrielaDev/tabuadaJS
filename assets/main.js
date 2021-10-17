function gerarTabuada(){
    let num = document.getElementById("txtNumber");
    let tabuada = document.getElementById("selTabuada");

    if (num.value.length == 0){
        window.alert("Por favor, Digite um numero :)");
    } else {
        let n = Number(num.value);
        let c = 1;
        tabuada.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tabuada.appendChild(item);
            c++;
        }
        document.querySelector('.result').style.display = 'block';
    } 
}