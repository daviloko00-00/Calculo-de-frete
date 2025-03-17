let viagens = []; // cria um array vazio para armazenar viagens ((array segura várias informações em um unico "nome"));

while (true) { // cria -se um loop para que o usuário possa escolher entre as opções do menu, além de poder criar várias viagens com várias informações;
    let menu = parseFloat(prompt("Bem vindo ao sistema de entregas da Rápido & Seguro Logística!! Sua encomenda é nosso tesouro!\n, Escolha uma das opções a seguir:\n    1 - Nova Viagem\n    2 - Listar Viagens\n    3 - Sair"));
    if (menu === 1) {// caso seja desejado uma nova viagem, o usuário fornece informações sobre o cliente para armazenar no array;
        alert("Nova Viagem escolhida.\n Tecle Enter");
        let valor = 10;
        let nqme = prompt("Qual o nome do cliente?");
        let endereco = prompt("Qual o endereço do cliente?");
        let quilometro = parseFloat(prompt("Quantos quilômetros o cliente deseja percorrer?"));
        let urg = prompt("O cliente possui urgência na entrega de sua encomenda?\n    Sim (s)\n    Não (n)"); // caso necessário, o usuário pode escolher se a viagem é urgente ou não, criando duas opções, sim ou não;
        if (urg == "n") {
            urg = false;
            valor = valor * quilometro;
        } else if (urg == "s") {
            urg = true;
            valor = (valor * quilometro) * 0.2 + valor * quilometro; // caso a viagem seja urgente, o valor da viagem terá um acréscimo de 20% no valor final;
        }

        let cliente = {// criado um objeto com as informações do cliente, deixando a informação final da lista mais organizada;
            nome: nqme,
            endereco: endereco,
            distancia: quilometro + " km",
            urgencia: urg ? "Sim" : "Não",
            valor: valor
        };

        viagens.push(cliente);// aqui é feito um push no array viagens, colocando a informação do cliente no array;
    } else if (menu === 2) {// if feito para listar todos os objetos no array viagens, mostrando as informações passadas pelos clientes;
        if (viagens.length === 0) {
            alert("Nenhuma viagem ou cliente registrado.");// caso ainda não tenha uma viagem ou cliente registrado, o sistema mostrará uma mensagem de erro ao usuário, mostrando que não há viagens registradas no momento;
        } else {
            let lista = "Lista de Viagens:\n";
            viagens.forEach((viagem, index) => {// aqui é feito um forEach "para cada" viagem aramzenada no array viagens, mostrando as informações do cliente;
                lista += `\nViagem ${index + 1}:\n`;
                lista += `Nome do cliente: ${viagem.nome}\n`;
                lista += `Endereço: ${viagem.endereco}\n`;
                lista += `Distância: ${viagem.distancia}\n`;
                lista += `Urgência: ${viagem.urgencia}\n`;
                lista += `Valor: R$ ${viagem.valor.toFixed(2)}\n`; // to fixed colocado para que o valor apresentado seja arredondado até duas casas;
            });// saída das informações do objeto cliente de forma organizada e separada por cada viagem;
            alert(lista);// informações do clientes são mostradas pelo alert;
            console.log(lista);// informações do clientes são mostradas pelo console;
        }
    } else if (menu === 3) {// no caso de não haver necessidade do sistema no momento, o usuário pode sair do sistema com a opção 3;
        alert("Saindo...");
        break;
    } else {
        alert("Opção inválida"); // caso o usuário digite uma opção que não esteja entre 1 a 3, o sistema mostrará uma mensagem de erro;
    }
}
