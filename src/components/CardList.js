import React, {Component} from 'react';
import 'tachyons';
import Card from './Card';

class CardList extends Component {

    render() {

        const botCards = this.props.robots.map(robot => {
            return (
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />)
            
        });

        return ( <div> {botCards} </div> )
    }
}   

export default CardList