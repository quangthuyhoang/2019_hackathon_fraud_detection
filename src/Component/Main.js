import React, { Component } from 'react';
// import './Hello.scss';
import Navigation from './Navigation';
import { getAccounts } from '../Action/methods';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  getAccountList = () => {
    return this.props.getAccountList
  }

  update = (data) => {
    this.setState({data: data})
  }

  render() {
    const { data } = this.state;
    getAccounts()
    .then(data => {
      console.log("data", JSON.parse(data))
      return JSON.parse(data)
    })
    .then(results => {
      console.log("results", results.body);
      // this.update(results.body.toString());
    })
    .catch(err => {
      console.log("errors:", err);
      // this.update(err.toString())
    })
    
    return (
      <div>
        <Navigation />
        <div>Hello</div>
        <div>data: {data}</div>
      </div>
    );
  }
}

export default Main;
     {/* <div className="">
      
        <h1>Hello Valic Hackathon 2019</h1>
        <div>
          Notification Component
        </div>
        <p>Team WireShark<br/> </p>
      </div> */}