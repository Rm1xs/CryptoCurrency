var url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD&api_key=b3295e5c8b02efea16dcece5e84861640fc2c32d611207284258bebab9d0e350';
fetchAsync(url);
async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    if (data.DISPLAY.LTC.USD.CHANGEPCT24HOUR.includes('-') == true) {
        document.getElementById('live-value3').innerHTML = data.DISPLAY.LTC.USD.PRICE;
        document.getElementById('rate3').innerHTML = data.DISPLAY.LTC.USD.CHANGEPCT24HOUR + '%';
        document.getElementById('24volLTC').innerHTML = data.DISPLAY.LTC.USD.VOLUME24HOUR;
        document.getElementById('MKTCAPltc').innerHTML = data.DISPLAY.LTC.USD.MKTCAP;

        document.getElementsByClassName('small-block__value')[2].style.color = '#bc4767';
        document.getElementsByClassName('small-block__current-rate')[2].style.color = 'White';
        document.getElementsByClassName('small-block__current-rate')[2].style.backgroundColor = '#bc4767';
        document.getElementsByClassName('24volClss')[2].style.color = '#bc4767';
        document.getElementsByClassName('mkCapClss')[2].style.color = '#bc4767';
    }
    else {
        document.getElementById('live-value3').innerHTML = data.DISPLAY.LTC.USD.PRICE;
        document.getElementById('rate3').innerHTML = data.DISPLAY.LTC.USD.CHANGEPCT24HOUR + '%';
        document.getElementById('24volLTC').innerHTML = data.DISPLAY.LTC.USD.VOLUME24HOUR;
        document.getElementById('MKTCAPltc').innerHTML = data.DISPLAY.LTC.USD.MKTCAP;

        document.getElementsByClassName('small-block__value')[2].style.color = '#79b83d';
        document.getElementsByClassName('small-block__current-rate')[2].style.color = 'White';
        document.getElementsByClassName('small-block__current-rate')[2].style.backgroundColor = '#79b83d';
        document.getElementsByClassName('24volClss')[2].style.color = '#79b83d';
        document.getElementsByClassName('mkCapClss')[2].style.color = '#79b83d';
    }
}