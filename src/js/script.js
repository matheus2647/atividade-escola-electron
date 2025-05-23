document.getElementById("form-produto").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Captura os valores dos campos
      const nome = document.getElementById("nome-produto").value;
      const matricula = document.getElementById("quantidade-produto").value;
      const telefone = document.getElementById("imagem-produto").value;

      // Mostra os valores no console
      console.log("1. Nome do Aluno:", nome);
      console.log("2. Matrícula:", matricula);
      console.log("3. Telefone:", telefone);

      // Cria objeto do aluno
      const aluno = {
        nome: nome,
        matricula: matricula,
        telefone: telefone
      };

      console.log("4. Objeto aluno criado:", aluno);

      // Pega a lista existente ou inicializa uma nova
      let listaAlunos = JSON.parse(localStorage.getItem("alunos")) || [];
      console.log("5. Lista de alunos antes:", listaAlunos);

      // Adiciona o novo aluno
      listaAlunos.push(aluno);
      console.log("6. Lista de alunos atualizada:", listaAlunos);

      // Salva no localStorage
      localStorage.setItem("alunos", JSON.stringify(listaAlunos));
      console.log("7. Dados salvos no localStorage.");

      // Limpa o formulário
      document.getElementById("form-produto").reset();
      console.log("8. Formulário limpo.");
    });