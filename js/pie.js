function desenhaPizza() {
    var tabela = new google.visualization.arrayToDataTable(
        [
            ['Categorias', 'Valores'],
            ['Educação', 2000],
            ['Transporte', 500],
            ['Lazer', 230],
            ['Saúde', 50],
            ['Cartão de crédito', 900],
            ['Alimentação', 260]
        ]
    );

    var opcoes = {
        title: 'Tipos de gastos',
        is3D: true,
        legend: 'labeled',
        pieSliceText: 'value',
        slices: {
            0: {},
            1: { color: 'grey' },
            2: { color: 'lightgrey' },
            3: { color: 'grey' },
            4: { offset: 0.4 },
            5: { color: 'grey' }
        }
    };

    var div = document.getElementById('graficoPizza');

    var grafico = new google.visualization.PieChart(div);
    grafico.draw(tabela, opcoes);
}