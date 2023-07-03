function solucao(peso1, peso2) {
    // seu codigo aqui
let categoria1, categoria2;
if (peso1 < 55){
    categoria1 = "pesoleve";
}
else if (peso1 < 65){
    categoria1 = "pesommedio";
}
else if (peso1 < 75){
    categoria1 = "pesomedio";
}
else if (peso1 < 85){
    categoria1 = "pesompesado";
}
else{
    categoria1 = "pesopesado";
}
if (peso2 < 55){
    categoria2 = "pesoleve";
}
else if (peso2 < 65){
    categoria2 = "pesommedio";
}
else if (peso2 < 75){
    categoria2 = "pesomedio";
}
else if (peso2 < 85){
    categoria2 = "pesompesado";
}
else{
    categoria2 = "pesopesado";
}

if (categoria1 == categoria2){
    return "PODEM LUTAR";
}else{
    return "NAO PODEM LUTAR";
}
}
console.log(solucao(400, 86))
