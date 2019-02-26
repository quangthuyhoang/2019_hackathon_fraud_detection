import React, { Component } from 'react';
import '../hinge/styles.css';
import '../css/test.css';

class AccountItem extends Component {
  constructor(props) {
    super(props);
  }

  onAccountClick = (Id) => {
    console.log(Id, "click", this.props.hideList);
    this.props.hideList();
    this.props.showAccountDetail(Id);
    // console.log(this.props.hideList)
    // this.props.hideAccountDetail();
    // dispatch to store
  }

  render() {
    const { account, showAccountDetail } = this.props;
   
    return (
      <li  className="mv2">
      < button 
      onClick={()=> { this.onAccountClick(account.participantId)}}
      className="f5 lh-loose pl4-q2" 
      type="button" >{account.firstName + " " + account.lastName} </button>
      <span className="dib"></span>
      <input className="f6 mh1" type="checkbox" name="Name Discription1" value="Name Discription1" /> Reviewed <br></br>
    </li>
    )
  }
}

export default AccountItem;

