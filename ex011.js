var idade = 22
console.log('VocÊ tem ${idade}')
if(idade <16) {
    console.log('Não vota')
} else{
    if(idade>=18 && idade < 65){
        console.log('voto opcional')
    } else{
        console.log ('voto obrigatório');
    }
}
