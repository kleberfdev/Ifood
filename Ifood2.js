function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // seu codigo aqui
if (itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) && itensColetados.includes(itemNecessario3)){
    return "PODE ENFRENTAR";
}else{
    return "NAO PODE ENFRENTAR"
}
}

const itensColetados = ['item1', 'item2', 'item3']; // Itens coletados
const itemNecessario1 = 'item1'; // Item necessário 1
const itemNecessario2 = 'item2'; // Item necessário 2
const itemNecessario3 = 'item3'; // Item necessário 3

console.log(solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3));
