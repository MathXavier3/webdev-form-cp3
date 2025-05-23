document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.textContent = "";

    if (nome === "" || isNaN(preco) || preco <= 0 || categoria === "") {
      mensagemErro.textContent = "Preencha todos os campos corretamente.";
      return;
    }

    const precoFormatado = preco.toFixed(2).replace(".", ",");

    const produto = document.createElement("div");
    produto.classList.add("produto");

    if (categoria === "Tecnologia") {
      produto.classList.add("tecnologia");
    } else if (categoria === "Alimentos") {
      produto.classList.add("alimentos");
    }

    produto.textContent = `Produto: ${nome} – R$ ${precoFormatado} – Categoria: ${categoria}`;

    document.getElementById("listaProdutos").appendChild(produto);

    document.getElementById("formulario").reset();
  });
