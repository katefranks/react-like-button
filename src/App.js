import {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }

    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes = () => {
    let likesTotal = this.state.likes + 1
    this.setState({
      likes: likesTotal
    })
  }

  render() {
    return (
      <div className="button-container">
        <button className="like-button" onClick={this.incrementLikes}>{this.state.likes}{this.state.likes === 1 ? ' Like \uD83D\uDE0D' : ' Likes \uD83D\uDE0D'}
        </button>
      </div>
    )
  }
}

export default App;
