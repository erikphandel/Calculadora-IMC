function calcularIMC(){

    // Entrada de dados
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    console.log(valorPeso)
    console.log(valorAltura)

    // Processamento
    let valorIMC = valorPeso / (valorAltura * valorAltura);

    // Saída
    document.getElementById("imcResultado").textContent = "O seu IMC é:" + valorIMC;
    if (valorIMC <18.5) {
            document.getElementById("imcClassificacao").textContent = "Você está muito magro. O IMC ideal é de 18,5 a 24,9";
        } else if (valorIMC >=18.5&&valorIMC <25){
            document.getElementById("imcClassificacao").textContent = "Você está dentro do peso ideal.";
        } else if (valorIMC >=25&&valorIMC <30){
            document.getElementById("imcClassificacao").textContent = "Você está com sobrepeso. O IMC ideal é de 18,5 a 24,9";
        } else if (valorIMC >=30&&valorIMC <40){
            document.getElementById("imcClassificacao").textContent = "Você está obeso. O IMC ideal é de 18,5 a 24,9";
        } else {
            document.getElementById("imcClassificacao").textContent = "Você está gravemente obeso. O IMC ideal é de 18,5 a 24,9";
        }
}