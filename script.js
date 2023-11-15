

// --------url for displaying different products
// https://fakestoreapi.com/products/category/jewelery

// function for fetching the products
// debugger
async function FetchProducts(url){
    try{
        const response=await fetch(url)
        if(!response.ok){
        throw new Error('response is not ok')
        // return await response.json()
        }
        // console.log(response.json())
        return await response.json()

    }catch(err){
        throw new Error('error in fetching data' + err.message)

    }
}

// calling the function
FetchProducts('https://fakestoreapi.com/products')

// function for handling the fetching products
async function HandlingFetch(){
    try{
    const[mobile,laptops,dress,kitchen]= await Promise.all([
    FetchProducts('https://fakestoreapi.com/products'),
    FetchProducts('https://fakestoreapi.com/products'),
    FetchProducts('https://fakestoreapi.com/products'),
    FetchProducts('https://fakestoreapi.com/products')])
    console.log(mobile)

    // accessing all the values inside the js
    const MobileCont=document.querySelector('.Mobiles')
    const LaptopsCont=document.querySelector('.Laptops')
    const DressCont=document.querySelector('.Dresses')
    const KitchenCont=document.querySelector('.Kitchen')

    // creating the variable for sending data into displayproducts
    const MobilesList=DisplayProducts([...mobile])
    const LaptopsList=DisplayProducts([...laptops])
    const DressesList=DisplayProducts([...dress])
    const KitchenList=DisplayProducts([...kitchen])

    // append the mobile list
    MobileCont.appendChild(MobilesList)
    LaptopsCont.appendChild(LaptopsList)
    DressCont.appendChild(DressesList)
    KitchenCont.appendChild(KitchenList)

    }catch(err){  
        const errdisplay=document.querySelector('.errordisplay')
        errdisplay.innerHTML=`${err.message}`
        // throw new Error('error in fetching the products')
        throw new Error('error in fetching products')
    }

}
HandlingFetch()

//function fordisplaying products
function DisplayProducts(products){
    console.log(products)
    // parent div
    const divEle=document.createElement('div')
    divEle.className='products'
    products.map((item)=>{
        console.log(item)
        // distriung items
        const{image,description,price,title,rating}=item
        // child div
        const card=document.createElement('div')
        card.className='card'
        card.innerHTML=`<img src=${image} alt=${title}>
        <h3>${price}</h3>
        <p>${JSON.stringify(rating)}</P>
        <p>${description}</p>`

        // appending the card div to parent
        divEle.appendChild(card)
    })
    return divEle
}
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            // .then(json=>console.log(json))

