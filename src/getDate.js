function date(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
        hora = data.getHours()
        min  = data.getMinutes()
        minF  = (data.getMinutes() < 10) ? '0'+min : min
    return `${diaF}/${mesF}/${anoF} - ${hora}:${minF}`;
}

module.exports = {date}