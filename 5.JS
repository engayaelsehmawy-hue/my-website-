let products = [];
let total = 0;


document.querySelectorAll(".buy-btn").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        let card = this.closest(".card");

        let name = card.querySelector("h5").innerText;

        let price = Number(
            card.querySelector("h4").innerText.replace("$","")
        );


        products.push({
            name:name,
            price:price
        });


        total += price;


        let message = document.createElement("div");

        message.className = "custom-alert";

        message.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            ${name} added successfully!
        `;

        document.body.appendChild(message);


        setTimeout(() => {
            message.remove();
        },3000);


    });

});



document.getElementById("invoiceBtn").addEventListener("click",function(){


    let invoice = document.getElementById("invoiceItems");


    invoice.innerHTML="";


    if(products.length === 0){

        invoice.innerHTML="<p>No products selected</p>";

    }
    else{

        products.forEach(product=>{

            invoice.innerHTML += `

            <div class="d-flex justify-content-between border-bottom py-2">

                <span>${product.name}</span>

                <span>$${product.price}</span>

            </div>

            `;

        });

    }


    document.getElementById("total").innerText = total;


    document.getElementById("invoiceBox").style.display="block";


});



let topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});



document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function(){

        let menu = document.getElementById("menu");

        if(menu.classList.contains("show")){

            menu.classList.remove("show");

        }

    });

});
document.getElementById("backBtn").onclick = function(){

    document.getElementById("invoiceBox").style.display="none";

};
document.getElementById("confirmBtn").onclick = function(){

    document.getElementById("invoiceBox").style.display="none";

    document.getElementById("orderForm").style.display="block";

};



document.getElementById("cancelForm").onclick = function(){

    document.getElementById("orderForm").style.display="none";

};



document.getElementById("submitOrder").onclick = function(){

    let name = document.getElementById("name").value;

    if(name === ""){

        alert("Please enter your name");

        return;

    }


    let message = document.createElement("div");

    message.className="custom-alert";

    message.innerHTML=`

    <i class="bi bi-check-circle-fill"></i>

    Order Completed Successfully!

    `;


    document.body.appendChild(message);


    setTimeout(()=>{

        message.remove();

    },3000);


    document.getElementById("orderForm").style.display="none";

};