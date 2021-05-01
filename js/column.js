function desenhaColuna() {
    var tabela = new google.visualization.DataTable();

    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addColumn({ type: 'number', role: 'annotation' });
    tabela.addColumn({ type: 'string', role: 'style' });

    tabela.addRows([
            ['Education', 2000, 2000, 'blue'],
            ['Transport', 500, 500, 'grey'],
            ['Health', 50, 50, 'grey'],
            ['Fun', 900, 900, 'darkmagenta'],
            ['Food', 260, 260, 'grey']
        ]
    );

    var opcoes = {
        title: 'Tipos de gastos',
        vAxis: {
            textPosition: 'none',
            gridlines: {
                color: 'transparent'
            }
        },
        legend: 'none'
    }

    var div = document.getElementById('graficoColuna');

    var grafico = new google.visualization.ColumnChart(div);
    grafico.draw(tabela, opcoes);
}