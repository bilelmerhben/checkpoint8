import React from 'react';
import './checkpoint8.css';
export default class Myfirstcomponent extends React.Component {

    state = {
      
        name: 'Max',
        image: '/Max.jpg',
        description: 'My Description:My Name is Max'

    }


    render() {
        return (
            <div class='ff'>
<button onClick={() =>{this.setState({
    name: 'Max',
    image : '/Max.jpg',
    description: 'My Description:My Name is Max'
})}}> Max
</button>

<button onClick={() =>{this.setState({
    name: 'John',
    image : '/John.jpg',
    description: 'My Description:My Name is John'
})}}> John
</button>

<button onClick={() =>{this.setState({
    name: 'Daniel',
    image : '/Daniel.jpg',
    description: 'My Description:My Name is Daniel'
})}}> Daniel
</button>



                <h1>{this.state.name}</h1>
                <img src={this.state.image} />
                <p>{this.state.description}</p>
            </div>


        )
    }
}






