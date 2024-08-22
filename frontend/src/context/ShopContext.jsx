//This page will be used to create logic in our ecommerce website
//We can use this to get our common variables and state variables at one place


//Here we are using context api
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext(); //export to access it in any other component
const shopContextProvider=(props)=>{

    const currency='Rs.';
    const delivery_fee='200';

    const value={
        //Here we are defining our state variables
        products,currency,delivery_fee
    }
    return (
    <shopContext.Provider value={value}>
        {/*Here we are passing our state variables to our components*/}
        {props.children}
    </shopContext.Provider>
    )
}

export default shopContextProvider;