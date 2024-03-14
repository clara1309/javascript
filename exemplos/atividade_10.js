let produtoEmbalado = {
    nome : "Laptop Hp",
    categoria : "Eletronicos",
    peso : 1.5,
    preco : 3500.00,


}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}Kg, esta a venda por ${produtoEmbalado.preco.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}`)