import React from 'react';

class CardInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cardfront: '', cardback: '' };
    }
    setFront = (event) => {
        this.setState({cardfront: event.target.value});
    }
    setBack = (event) => {
        this.setState({cardback: event.target.value});
    }
    addCard = () => {
        console.log(this.state.cardfront);
        // const fs = require('browserify-fs');
        // fs.writeFile("cardContentsSmall.json", "test");

    }



    render() {
        return (
            <div>
                <form>
                    <h1>Hello {this.state.cardfront}</h1>
                    <p>Front:</p>
                    <input type='text' onChange={this.setFront} />
                    <p>Back:</p>
                    <input type='text' onChange={this.setBack} />
                </form>

                <div>
                    Front: {this.state.cardfront}
                    Back: {this.state.cardback}
                </div>

                <button onClick={this.addCard}>Add</button>
            </div>
          
        );
      }
}
export default CardInput;