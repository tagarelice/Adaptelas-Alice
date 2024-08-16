document.addEventListener("DOMContentLoaded", function () {
    const nome = document.getElementById("nome");
    const data = document.getElementById("data");
    const descricao = document.getElementById("descricao");
    const personagemUm = document.getElementById("personagem-um");
    const imagemP1 = document.getElementById("imagem-p1");
    const personagemDois = document.getElementById("personagem-dois");
    const imagemP2 = document.getElementById("imagem-p2");
    const personagemTres = document.getElementById("personagem-tres");
    const imagemP3 = document.getElementById("imagem-p3");
    const modal = document.getElementById("modal");
    const botaoModal = document.getElementById("abrir-modal");
    const botaoEnviar = document.getElementById("novo-filme");


    function form(event) {
        event.preventDefault();
        const novoNome = document.getElementById("novo-nome").value;
        const novaData = document.getElementById("nova-data").value;
        const [ano, mes, dia] = novaData.split("-");
        const novaDescricao = document.getElementById("nova-descricao").value;
        const novoP1 = document.getElementById("novo-p1").value;
        const novoP2 = document.getElementById("novo-p2").value;
        const novoP3 = document.getElementById("novo-p3").value;
        const novaImagemP1 = document.getElementById("nova-imagem-p1").files[0];
        const novaImagemP2 = document.getElementById("nova-imagem-p2").files[0];
        const novaImagemP3 = document.getElementById("nova-imagem-p3").files[0];

        if (novaImagemP1) {
            const leitor = new FileReader();
            leitor.onload = function (e){
                imagemP1.src = e.target.result;
            };
            leitor.readAsDataURL(novaImagemP1);
        }
        if (novaImagemP2) {
            const leitor = new FileReader();
            leitor.onload = function (e){
                imagemP2.src = e.target.result;
            };
            leitor.readAsDataURL(novaImagemP2);
        }
        if (novaImagemP3) {
            const leitor = new FileReader();
            leitor.onload = function (e){
                imagemP3.src = e.target.result;
            };
            leitor.readAsDataURL(novaImagemP3);
        }
        nome.textContent = novoNome;
        data.textContent = `${dia}/${mes}${ano}`;
        descricao.textContent = novaDescricao;
        personagemUm.textContent = novoP1;
        personagemDois.textContent = novoP2;
        personagemTres.textContent = novoP3;
        modal.classList.add("escondida")
    }

    botaoModal.addEventListener("click", () => {
        modal.classList.remove("escondida");
    });

    window.addEventListener ("click", (event)=>{
        if(event.target == modal){
            modal.classList.add("escondida");
        }
    });

    botaoEnviar.addEventListener ("submit", form);



});