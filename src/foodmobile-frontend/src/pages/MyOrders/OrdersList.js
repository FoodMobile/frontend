import React from 'react';
import Order from './Order';

class OrdersList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.orders.map((order) => {
                    return <Contact contact={contact}/>
                })}
            </ul>
        )
    }
}

export default OrdersList;