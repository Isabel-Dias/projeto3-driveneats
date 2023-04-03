let button = '';
let priceSelectFood = 0;
let nameSelectFood = '';
let priceSelectDrink = 0;
let nameSelectDrink = '';
let priceSelectDessert = 0;
let nameSelectDessert = '';

let finalprice = 0;

function SelectFood(button, pricefood, nameFood) {
    checkfood(button);
    button.classList.add('selected');
    priceSelectFood = pricefood;
    nameSelectFood = nameFood;

    CheckoutPrice(priceSelectFood, priceSelectDrink,priceSelectDessert);
}
function checkfood(button) {
    const checkf = document.querySelector('.container-food .selected') 
    if(checkf !== null) {
        checkf.classList.remove('selected')
    }
}

function SelectDrink(button, pricedrink, nameDrink) {
    checkdrink(button);
    button.classList.add('selected');
    priceSelectDrink = pricedrink;
    nameSelectDrink = nameDrink;

    CheckoutPrice(priceSelectFood, priceSelectDrink,priceSelectDessert);
}
function checkdrink(button) {
    const checkd = document.querySelector('.container-drink .selected') 
    if(checkd !== null) {
        checkd.classList.remove('selected')
    }
}

function SelectDessert(button, pricedessert, nameDessert) {
    checkdessert(button);
    button.classList.add('selected');
    priceSelectDessert = pricedessert;
    nameSelectDessert = nameDessert;

    CheckoutPrice(priceSelectFood, priceSelectDrink,priceSelectDessert);
}
function checkdessert(button) {
    const checkde = document.querySelector('.container-dessert .selected') 
    if(checkde !== null) {
        checkde.classList.remove('selected')
    }
}

function CheckoutPrice(priceSelectFood, priceSelectDrink,priceSelectDessert) {
    const enablecheckout = document.querySelector('.checkout-tab-dis')
    if(priceSelectFood !== 0 && priceSelectDrink !== 0 && priceSelectDessert !== 0) {
        finalprice = ((priceSelectDessert * 100) + (priceSelectDrink * 100) + (priceSelectFood * 100)) / 100
        
        enablecheckout.classList.add('checkout-tab-ena');
        enablecheckout.classList.remove('checkout-tab-dis');
        
        const check = document.querySelector(".checkout");
        check.innerHTML = "Fechar pedido";
    }
    


}
