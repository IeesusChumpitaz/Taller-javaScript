const cupones = [
    {
        name:"cupon30",
        discount:30
    },
    {
        name:"cupon50",
        discount:50
    },
    {
        name:"cupon100",
        discount:100
    }
]

function calcularDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcular_descuentoConPrecio(){

    const valueprecio = Number(document.getElementById("inputPrices").value);
    const valuedescuento = document.getElementById("inputCoupon").value; 

    const isCouponValueValid = function(cupon){
        return cupon.name === valuedescuento;
    };
 

    const userCoupon = cupones.find(isCouponValueValid);

    if(!userCoupon){
        const resultP = document.getElementById("result");
        resultP.innerHTML =  `<p> El ${valuedescuento} no es un cupon valido </p>`
    }else{

        const descuento = userCoupon.discount;
        const resultconDescuento = calcularDescuento(valueprecio,descuento);
        console.log(resultconDescuento);
        
        const resultP = document.getElementById("result");
        resultP.innerHTML =  `<p>El precio con descuento es de:</br> $ ${resultconDescuento}</p>`;
    }
}

// SOLUCION 1


    // function calcular_descuentoConPrecio(){

    //     const valueprecio = Number(document.getElementById("inputPrices").value);
    //     const valuedescuento = Number(document.getElementById("inputDiscounts").value); 
        

    //     const resultconDescuento = calcularDescuento(valueprecio, valuedescuento);
    //     console.log(resultconDescuento);

    //     const resultP = document.getElementById("result");
    //     resultP.innerHTML =  `<p>El precio con descuento es de:</br> $ ${resultconDescuento}</p>`;

    // }

// SOLUCION 2

    // function calcular_descuentoConPrecio(){

    //     const valueprecio = Number(document.getElementById("inputPrices").value);
    //     const valuedescuento = document.getElementById("inputCoupon").value; 
        
    //     let descuento

    //     switch (valuedescuento) {
    //         case cupones[0]://cupon30
    //             descuento = 30;
    //             break;
    //         case cupones[1]://cupon50
    //             descuento = 50;
    //             break;
    //         case cupones[2]://cupon100
    //             descuento = 100;
    //             break;

    //     }
    //     const resultconDescuento = calcularDescuento(valueprecio,descuento);
    //     console.log(resultconDescuento);

    //     const resultP = document.getElementById("result");
    //     resultP.innerHTML =  `<p>El precio con descuento es de:</br> $ ${resultconDescuento}</p>`;

    // }

// SOLUCION 3

    //     function calcular_descuentoConPrecio(){

    //     const valueprecio = Number(document.getElementById("inputPrices").value);
    //     const valuedescuento = document.getElementById("inputCoupon").value; 
        
    //     let descuento
        
    //     if(!cupones.includes(valuedescuento)){
    //         // alert( valuedescuento + " no es un cupón válido");
    //         const resultP = document.getElementById("result");
    //         resultP.innerHTML =  `<p> El ${valuedescuento} no es un cupon valido </p>`;
    //     }
    //     else if(valuedescuento === "cupon30"){
    //         descuento=15;
            
    //     }
    //     else if(valuedescuento === "cupon50"){
    //         descuento = 50;
            

    //     }
    //     else if(valuedescuento === "cupon50"){
    //         descuento = 100;

    //     }

    //         const resultconDescuento = calcularDescuento(valueprecio,descuento);
    //         console.log(resultconDescuento);
        
    //         const resultP = document.getElementById("result");
    //         resultP.innerHTML =  `<p>El precio con descuento es de:</br> $ ${resultconDescuento}</p>`;

    // }

