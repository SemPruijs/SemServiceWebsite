
function loadItems() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://g35r7thyr5.execute-api.eu-central-1.amazonaws.com/Prod/shop/stock', true);
    request.onload = function() {
        let data = JSON.parse(this.response)
        // let data = {list: [{"name": "White Oreo", "price": 0.45}, {"name": "White KitKat", "price": 0.99}]};

        let list = document.getElementById("list");

        for (let item of data.list) {
            console.log("item: " + item);
            let li = document.createElement("LI");
            list.appendChild(li);

            let a = document.createElement("A");
            li.appendChild(a);
            a.setAttribute("href", `https://bunq.me/SemService/${item.price}/${item.name}`);

            let img = document.createElement("IMG");
            a.appendChild(img);
            img.setAttribute("src", item.image);
            img.setAttribute("width", "200px");

            let textContainer = document.createElement("HEADER");
            list.appendChild(textContainer);
            let price = document.createTextNode(item.price.toFixed(2));
            textContainer.appendChild(price);
        }
    };
    request.send();

}
