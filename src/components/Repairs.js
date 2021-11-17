import React, { useEffect, useState } from "react"

export const Repairs = () => {
    const [customers, setCustomers] = useState([]) 
    // returns an array, that gives you the initial value

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json()) 
                 // when this comes back we need to convert jsonstring into actual JaveScript 
                .then((customerArray) => {
                    setCustomers(customerArray)
                    // modify state by invoking setCustomers bc you cannot directly modify state
                })

        },
        []
    )
    // sole purpose of this UseEffect fucntion is to run code when certain state changes, 
    // when any state changes its going to invoke this function, similar to event listener 


    return (
        <>
            <h1> Honey Rae's Repair Shop</h1>

            {
                customers.map(
                    // using the map array mathod to convert the object to html it takes a function
                    (customerObject) => {
                        // customerObject paramater to capture each individual customer object as it iterates
                        return <h2> {customerObject.name}</h2>
                        //interpolation 
                    }
                
                )
        
            }
        </>
        // empty angle brackets that return one JSX element
    )
}