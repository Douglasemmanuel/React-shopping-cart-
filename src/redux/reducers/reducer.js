const INIT_STATE = {
    carts: []
};

// if(localStorage.getItem('carts')){
//     INIT_STATE.carts = JSON.parse(localStorage.getItem('carts'))
// }else{
//     INIT_STATE.carts = [];
// }

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            // to incerement the quantity using + button
            // const iteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            // if (iteamIndex >= 0) {
            //     state.carts[iteamIndex].qnty += 1
            // } else {
            //     const temp = { ...action.payload, qnty: 1 }
            //     // add to cart
            //     return {
            //         ...state,
            //         carts: [...state.carts, temp]
            //     }
               
            // }
            const temp = { ...action.payload, qnty: 1 }
                // add to cart
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            // localStorage.setItem("carts" ,JSON.stringify(state.carts))

                // removing an item in your cart
        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                carts: data

            }

        case "RMV_one":
            // to  decrement the quantity using  - button
            const iteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[iteamIndex_dec].qnty >= 1) {
                const dltitems = state.carts[iteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltitems]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[iteamIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload.id);

                return {
                    ...state,
                    carts: data

                }

            }

        default:
            return state
    }
}