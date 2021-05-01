function desenhaBarra() {
    var tabela = new google.visualization.DataTable();

    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addColumn({ type: 'string', role: 'annotation' });
    tabela.addColumn({ type: 'string', role: 'style' });

    tabela.addRows(
        [
            ['Educação', 2000, '2000,00 €', 'blue'],
            ['Transporte', 500, '500,00 €', 'grey'],
            ['Lazer', 230, '230,00 €', 'grey'],
            ['Saúde', 50, '50,00 €', 'grey'],
            ['Cartão de crédito', 900, '900,00 €', 'darkmagenta'],
            ['Alimentação', 260, '260,00 €', 'grey']
        ]
    );

    tabela.sort([{ column: 1, desc: true }]);

    var opcoes = {
        title: 'Tipos de gastos',
        hAxis: {
            textPosition: 'none',
            gridlines: {
                color: 'transparent'
            }
        },
        legend: 'none',
        annotations: {
            alwaysOutside: true
        }
    }

    var div = document.getElementById('graficoBarra');

    var grafico = new google.visualization.BarChart(div);
    grafico.draw(tabela, opcoes);
}