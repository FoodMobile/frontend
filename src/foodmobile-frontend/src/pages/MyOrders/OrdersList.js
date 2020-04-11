import React from 'react';
import Order from './Order';

class OrdersList extends React.Component {
    render() {
        return (
            <ul>
                {ORDERS.props.orders.map((order) => {
                    return <Order order={order}/>
                })}
            </ul>
        )
    }
}

export default OrdersList;