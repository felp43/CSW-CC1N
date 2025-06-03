document.getElementById("nascimento")
    document.getElementById("calculadora")
    function calculaidade() {
        var hoje = new Date()
        let result = document.getElementById("resultado")
        dia = document.getElementById("dia").value
        mes = document.getElementById("mes").value
        ano = document.getElementById("ano").value
        if (dia > 31 || dia <=0 || ano <= 0) {
            alert("Data Inválida")
            return
        }
        nascimento = new Date(ano + "/" + mes + "/" + dia)
        var idade = hoje.getFullYear() - nascimento.getFullYear()
        let dth = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
        let dth2 = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())
        if (dth < dth2) {
            idade--;
        }
        result.style.color = random_rgba();
        result.innerHTML = "<b>" + `  Você tem ${idade} anos de idade` + "</b>" 
    }
        function idade(nascimento, hoje) {
            var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
            if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
               new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
               diferencaAnos--;
               return diferencaAnos;
        }
    function calcular() {
        let valor1 = Number(document.getElementById("n1").value)
        let valor2 = Number(document.getElementById("n2").value)
        let operador = (document.getElementById("operacao").value)
        let resultadocalc = 0
        switch (operador) {
            case '+':
                resultadocalc = valor1 + valor2;
                break;
            case '-':
                resultadocalc = valor1 - valor2;
                break;
            case '*':
                resultadocalc = valor1 * valor2;
                break;
            case '/':
                resultadocalc = valor1 / valor2
            default:
                alert("Operador Inválido")
        }
        let result = document.getElementById("resultadocalc")
        result.style.color = random_rgba()
        result.innerHTML = resultadocalc
    }

    function random_rgba(){
        var o = Math.round,
            r = Math.random,
            s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1);
    };
    
    