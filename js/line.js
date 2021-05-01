function desenhaLinha() {
    var tabela = new google.visualization.arrayToDataTable(
        [
            ['Mês', 'Gastos'],
            ['jan', 800],
            ['fev', 400],
            ['mar', 1100],
            ['abr', 400],
            ['mai', 500],
            ['jun', 750],
            ['jul', 1500],
            ['ago', 650],
            ['set', 850],
            ['out', 400],
            ['nov', 1000],
            ['dez', 720]
        ]
    );

    var opcoes = {
        title: 'Gastos por mês',
        vAxis: {
            format: 'currency',
            gridlines: {
                color: 'transparent'
            }
        },
        curveType: 'function',
        legend: 'none'
    }

    var div = document.getElementById('graficoLinha');

    var grafico = new google.visualization.LineChart(div);
    grafico.draw(tabela, opcoes);
}