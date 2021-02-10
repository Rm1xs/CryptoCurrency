


$(document).ready(function () {
    $('#example').DataTable({
        ajax: {
            url: 'https://min-api.cryptocompare.com/data/blockchain/list?api_key=b3295e5c8b02efea16dcece5e84861640fc2c32d611207284258bebab9d0e350',
            dataSrc: 'data'
        },
        columns: [
            { "data": "id" },
            { "data": "symbol" },
            { "data": "partner_symbol" },
            { "data": "data_available_from" }
        ]
    });
});
