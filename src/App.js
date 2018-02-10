import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      box: [
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: false,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: true,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: false,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: true,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: false,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: true,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: false,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: true,
        },
        {
        imgSrc: "https://via.placeholder.com/100x100",
        p1: false,
        },
      ]
    }
  }
  // handleClick(i) {
  //   const clickedBox = this.state.box[i];
  //   const first = this.state.box.slice(0, i);
  //   const last = this.state.box.slice(i + 1)
  //   const newBoxes = [
  //       ...first,
  //       ...clickedBox, 
  //       ...last,
  //   ];
  //   this.setState({box: newBoxes});
  // }

  render() {
      const { box } = this.state;
      const boxGrid = box.map((box,index) => 
          <Box key={index} 
               imgSrc={box.imgSrc}
               boxValue={box.boxValue}  />);
    return (
      <div>
        <h1 className="text-center">Tic-Tac-Toe</h1>
        <div className="container">
          <div className="row">
            { boxGrid }
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
