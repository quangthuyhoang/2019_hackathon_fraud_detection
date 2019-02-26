import React, { Component } from 'react';
// import { getAccounts } from '../Action/methods';
// import Detail from './Detail';
import AccountItem from './AccountItem';
import AccountItemContainer from '../Container/AccountItemContainer';
import { accountsResponse } from '../mockdata/data';
import '../hinge/styles.css';
import '../css/test.css';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showList, accounts } = this.props;
    const accountListings = accounts.map(account => {
      return (<AccountItemContainer key={account.participantId} account={account}/>)
    })
    return (
      <div className="ba b--red mw140  center pa4 mt4">
        <h1 className="f1">Pending Investigation </h1>
        <div className=" mv5 f6 lh-loose pl4-q2 bg-aig-blue overflow-container FixedHeightContainer ">
          <ol className="p12">
            {
              (showList) ? accountListings : ''
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default List;


