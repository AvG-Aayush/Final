const product = [
    {
        id: 0,
        image: '12.jpg',
        title: 'Kratos',
        price: 700,
    },
    {
        id: 1,
        image: 's.jpg',
        title: 'Viking',
        price: 700,
    },
    {
        id: 2,
        image: 't.jpg',
        title: 'Eyes',
        price: 700,
    },
    {
        id: 3,
        image: 'v.jpg',
        title: 'Walter White',
        price: 700,
    },
    {
        id: 4,
        image: 'w.jpg',
        title: 'Deadpoll',
        price: 700,
    },
    {
        id: 5,
        image: 'x.jpg',
        title: 'Spidey',
        price: 700,
    },
    {
        id: 6,
        image: 'u.jpg',
        title: 'Tony x Iron Man',
        price: 700,
    },
    {
        id: 7,
        image: 'y.jpg',
        title: 'Shinobi',
        price: 700,
    },
    
];

const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
    `<div class='box'>
        <div class='img-box'>
        <img class= 'images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length
    if(cart.length==0){
        document.getElementById('Item').innerHTML = "Empty";
        document.getElementById("total").innerHTML = "Nrs. "+0+".00";
    }
    else{
        document.getElementById('Item').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Nrs. "+total+".00";
            return(
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                <img class= 'rowimg' src=${image}>
                </div>
                <p style= 'font-size:12px;'>${title}</p>
                <h2 style= 'font-size: 15px;'>Nrs. ${price}.00</h2>`+
                "<i class= 'fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');    

    }
}