const items = ['first', 'second', 'add', 'sub', 'mult', 'div'];

async function getInfo() {
    let result = await fetch('/calc', {
        method: 'GET'
    })

    result = await result.json();

    for (let item of items) {
        document.getElementById(item).innerHTML = result[item];
    }
};

getInfo();