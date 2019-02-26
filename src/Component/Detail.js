import React, { Component } from 'react';
// import { getAccounts } from '../Action/methods';
// import Detail from './Detail';
import { accountsResponse } from '../mockdata/data';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/bootstrap/css/bootstrap-grid.css';
import '../vendor/bootstrap/css/bootstrap-reboot.css';
import '../css/custom.css';
import '../hinge/styles.css';
// import '../css/fontastic.css';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  showAccountDetail = (accounts, id) => {
    console.log(id, "clicked")
    return accounts.map(acct => {
      if (acct.participantId == id) {
        return acct;
      }
    }).filter(el => el)[0];
  }

  render() {

    const { accounts, currentAccount } = this.props.mainStore;
    const { showList } = this.props;
    console.log('showLlist', showList);
    const account = this.showAccountDetail(accounts,currentAccount);
    console.log("accounts detail", account)
    const { 
      firstName,
      lastName,
      ipAddress,
      ipGeographicState,
      ipFraudScore,
      ipMismatch,
      participantAge,
      participantId,
      residentState,
      accountAge,
      totalAssets
    } = account;

    return (
      <div className="mt4">
        <h1 className="f2">Detail Page</h1>
        <table>
        <tr>
          <th>NAME</th>
          <th>CLIENT ID</th>
          <th>LOGIN ID</th>
        </tr>
          <tbody>
            <tr>
              <td>{firstName + " " + lastName}</td>
              <td>{participantId}</td>
              <td>123444</td>
            </tr>
          </tbody>
          <tr>
          <th>IP ADDRESS</th>
          <th>PARTICIPANT AGE</th>
          <th>ASSET VALUE</th>
        </tr>
          <tbody>
            <tr>
              <td>{ipAddress}</td>
              <td>{participantAge}</td>
              <td>{"$" + totalAssets}</td>
            </tr>
          </tbody>
          <tr>
          <th>STATE</th>
          <th>ACCOUNT AGE</th>
          <th>REGISTRATION DATE</th>
        </tr>
          <tbody>
            <tr>
              <td>{ipGeographicState}</td>
              <td>{accountAge} years</td>
              <td>2009</td>
            </tr>
          </tbody>
        </table>

        <div className="ba bg-aig-blue ">
        <h1>Action List</h1>
        <ul className='nested-list-reset'>
          <li className="pt3">IP RISKScore: <span className="ba b--dark-red bg-red pa1 br4">70 - High Suspicious</span></li>
          <li className="pt3"><span class="">IP Mismatch</span>: <span className="ba b--dark-red bg-yellow pa1 br4">True</span></li>
          <li className="pt3">Bank Account Change: <span className="ba b--dark-red bg-yellow pa1 br4">True</span></li>
          <li className="pt3">Address Change: <span className="ba b--dark-red bg-yellow pa1 br4">True</span></li>
          <li className="pt3">Email address change: <span className="ba b--dark-red bg-yellow pa1 br4">True</span></li>
          <li className="pt3">EFT transaction withdrawal request - <span className="ba b--dark-red bg-yellow pa1 br4">Detected</span></li>
          <li className="pt3"><a href="#">CSR CallLogs</a>Suspicious: <input type="checkbox"/></li>
        </ul>
        <div> 
          <h2>Recommendation: Advise Fraud Team - Add IPADDRESS to High Risk Watchlist</h2>
          <h2>Recommendation: Hold withdrawal request</h2>
          <br></br>
          <button>Notify Fraud Prevention Team</button>
          </div>
      </div>
        
      </div>
    );
  }
}

export default Detail;

{/* <li>IP RISKScore: 90 - High Suspicious REDx</li>
          <li>IP Mismatch: false</li>
          <li>Bank Account Change: false</li>
          <li>Address Change: false</li>
          <li>email address change</li>
          <li>EFT transaction withdrawal request</li> */}

class ActionList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // const actionList = (args) => {
    //   return args.map((el, i) => {
    //     return (
    //       <li key={i}>{</li>
    //     )
    //   })
    // }
    return (
      <div>
        <h1>Action List</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}