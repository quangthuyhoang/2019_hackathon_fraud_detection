import React, { Component } from 'react';
import Navigation from './Navigation';
import Detail from './Detail';
import DetailContainer from '../Container/DetailContainer';
import List from '../Component/List';
import { getAccounts } from '../Action/methods';
// import Detail from './Detail';
import { accountsResponse } from '../mockdata/data';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      showDetail: false
    }
  }
  showListClick = () => {
    // let { showList } = this.props;
    let { showList } = this.state;
    if(showList) {
      // this.props.showList();
      this.setState({showList: false})
    } else {
      // this.props.hideList();
      this.setState({showList: true})
    }
    
  }

  showDetailClick = (id) => {
    // let { showDetail } = this.state;
    console.log("clicked", id);
    // this.setState({showDetail: true})
  }

  showComponent = (conditionExist, component) => {
    if(conditionExist) {
      return component;
    }
    return;
  }

  render() {
    const { accounts, showDetail } = this.props.mainStore;
    const { showList } = this.state;
    // const { showList } = this.state;
    console.log("showdetail", showDetail);
    const datas = getAccounts()
    console.log("after data", datas)
    return (
      <div>
        {/* <Navigation /> */}
        
        <div class="f2">Attention</div>
      <div className="w-100 h-50">
      <span className="f-subheadline">Suspicious Activity on VALIC Online:</span>
      <div className="f-headline min-h-100 h-center ba b--darkest-orange bg-yellow mw14" 
          onClick={this.showListClick}>
          { accounts ? accounts.length : 0} 
        </div>
      </div>
        {
          
          (showList) ? this.showComponent(showList,
             <List 
             showList={showList}
             accounts={accounts}
             />
             ) :
             ''
        }
        <div>
          {
            (showDetail) ? <DetailContainer showListStatus={showList}/> : ''
          }
        </div>
  
      </div>
    );
  }
}

export default Main;