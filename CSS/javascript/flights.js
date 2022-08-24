
let f_details = fetch("/Json/flights.json");

f_details.then(response=>response.json()).then(data=>{

    for(let i = 0; i<data.length; i++) {

        let obj = data[i];
        var container = document.createElement("div");
        container.className="card text-white bg-dark mb-3";
        container.style.width="20rem";

        var box = document.createElement("div");
        box.className = "card-header";

        var box_h4 = document.createElement("h4");
        box_h4.innerHTML = obj.flightNum+" "+obj.origin+" --> "+obj.destination;

        var details = document.createElement("div");
        details.className = "card-body";

        var d_h5 = document.createElement("h5");
        d_h5.className = "card-title";

        const d_time = new Date(obj.departTime);
        d_h5.innerHTML = "Departure Time: "+d_time.toUTCString();

        var a_h5 = document.createElement("h5");
        a_h5.className = "card-title";

        const a_time = new Date(obj.ArrivalTime);
        a_h5.innerHTML = "Arrival Time: "+a_time.toUTCString();

        var price = document.createElement("h5");
        price.className = "card-title";
        price.innerHTML = "Price: "+obj.price;

        var book = document.createElement("a");
        book.className = "btn btn-primary";
        book.innerHTML = "Book";
        book.style.color = "white";
        book.href = "booking.html";
        book.setAttribute('id',obj.flightNum);
        book.setAttribute('onClick','openpage(this.id)');

        container.appendChild(box);
        box.appendChild(box_h4);
        container.appendChild(details);
        
        details.appendChild(d_h5);
        details.appendChild(a_h5);
        details.appendChild(price);
        details.appendChild(book);

        document.getElementById("flight-cards").appendChild(container);

    }

});

function openpage(id)
        {
            var flnum = id;
            sessionStorage.setItem("flnum", flnum);
        }