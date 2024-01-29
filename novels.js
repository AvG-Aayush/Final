const product = [
    {
        id: 0,
        image: 'd.jpg',
        title: 'Jhelam',
        price: 700,
    },
    {
        id: 1,
        image: 'e.jpg',
        title: 'Trials of Apollo',
        price: 700,
    },
    {
        id: 2,
        image: 'f.jpg',
        title: 'Suyeshko Bhale',
        price: 700,
    },
    {
        id: 3,
        image: 'g.jpg',
        title: 'Why the Whales Come',
        price: 700,
    },
    {
        id: 4,
        image: 'h.jpg',
        title: 'MunaMadan',
        price: 700,
    },
    {
        id: 5,
        image: 'i.jpg',
        title: 'Trials of Apollo Part 2',
        price: 700,
    },
    {
        id: 6,
        image: 'a.jpg',
        title: 'The BootStrap Paradox',
        price: 700,
    },
    {
        id: 7,
        image: 'b.jpg',
        title: 'Who, What, Where, When and Why? ',
        price: 700,
    },
    {
        id: 8,
        image: 'c.jpg',
        title: 'The Power of money',
        price: 700,
    },
    {
        id: 9,
        image: 'd.jpg',
        title: 'The Marks of Athena',
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