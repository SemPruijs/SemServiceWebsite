
function loadItems() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://htun05wn1f.execute-api.us-east-1.amazonaws.com/prod/stock', true);
    request.onload = function() {
        let data = JSON.parse(this.response)
        // let data = {items: [{"name": "White Oreo", "price": 0.45}, {"name": "White KitKat", "price": 0.99}]};

        let list = document.getElementById("list");

        for (let item of data.items) {
            console.log("item: " + item);
            let li = document.createElement("LI");
            list.appendChild(li);

            let a = document.createElement("A");
            li.appendChild(a);
            a.setAttribute("href", "https://bunq.me/SemService/" + item.price + "/" + item.name);

            let text = document.createTextNode(item.name);
            a.appendChild(text);
        }
    };
    request.send();

}
