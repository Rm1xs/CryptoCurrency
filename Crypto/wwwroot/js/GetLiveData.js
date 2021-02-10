// this is where you paste your api key
var apiKey = "b3295e5c8b02efea16dcece5e84861640fc2c32d611207284258bebab9d0e350";
var ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
ccStreamer.onopen = function onStreamOpen() {
    var subRequest = {
        "action": "SubAdd",
        "subs": ["2~Coinbase~ETH~USD"]
    };
    ccStreamer.send(JSON.stringify(subRequest));
}

ccStreamer.onmessage = function onStreamMessage(message) {
    var message = event.data;
    var arr_from_json = JSON.parse(message);
    if (arr_from_json.PRICE != null) {
        document.getElementById('live-value2').innerHTML = arr_from_json.PRICE;
    }
}