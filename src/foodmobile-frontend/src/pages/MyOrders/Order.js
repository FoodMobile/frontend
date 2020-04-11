import React from 'react';

let ORDERS = [
    {
        customerName: 'Sophie',
        orderNumber: 1,
        orderItems: [
            {
                name: "BubbleTea",
                price: 2.99,
                quantity: 1,
                notes: "",
            },
            {
                name: "Brown Sugar Bubble Tea",
                price: 4.99,
                quantity: 1,
                notes: "",
            },
        ],
    },  
    {
        customerName: 'Shah',
        orderNumber: 2,
        orderItems: [
            {
                name: "Royal Milk Tea",
                price: 2.99,
                quantity: 1,
                notes: "add tapioca",
            },
        ],
    },  
    {
        customerName: 'John',
        orderNumber: 3,
        orderItems: [
            {
                name: "Royal Milk Tea",
                price: 2.99,
                quantity: 2,
                notes: "",
            },
            {
                name: "Classic Bubble Tea",
                price: 4.99,
                quantity: 1,
                notes: "extra ",
            },
            {
                name: "BubbleTea",
                price: 2.99,
                quantity: 1,
            },
            {
                name: "Brown Sugar Bubble Tea",
                price: 4.99,
                quantity: 1,
            },
        ],
    }
]

class Order extends React.Component {
    render() {
        return (
            <li>
                {ORDERS.order.customerName} {ORDERS.props.orderItems}
            </li>
        )
    }
}

export default Order;