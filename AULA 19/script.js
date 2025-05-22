function verificaridade() {
    var idade = parseInt(document.getElementById("idade").value)
    var resultado = document.getElementById("resultado")
if (idade < 0) 
    {
        resultado.textContent = "Idade inválida!"
    }
else if (idade == 0)
    {
        resultado.textContent = "Você é recém nascido"
    }
else if (idade > 0 && idade < 10) 
    {
        resultado.textContent = "Você é criança!"
    }
else if (idade >= 10 && idade < 16) 
    {
        resultado.textContent = "Você é adolescente!"
    }
else if (idade >= 16  && idade < 25) 
    {
        resultado.textContent = "Você é jovem!"
    }
else if (idade >= 25 && idade < 60)
    {
        resultado.textContent = "Você é adulto!"
    }
else if (idade >= 60)
    {
        resultado.textContent = "Você é idoso!"
    }
}

// var x = 25
// var y = '25'
// alert(x+y)

// var global = 'Essa é global'
// function escopofuncao() {
//     tambemglobal = 'Essa também é global';
//     var naoGlobal  = 'Essa é privada a escopofuncao!';
//     function subfuncao() {
//         alert(naoGlobal);
//         aindaGlobal = 'Não antecedida da palavra chave var então é global';
//         var aPrivada = 'Essa é privada a subfunção';
//     }
// alert(aindaGlobal);
// subfuncao();
// alert(aindaGlobal);
// alert(aPrivada);
// alert(global);
// }

// alert(global)