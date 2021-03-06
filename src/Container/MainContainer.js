import { connect } from 'react-redux';
import Main from '../Component/Main';
import * as action from '../Action/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        mainStore: state.MainReducer
        // groceryList: state.GroceryListReducer.groceryList,
        // dishList: state.GroceryListReducer.dish,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAccountList: bindActionCreators(action.GetAccountsList, dispatch),
    showList: bindActionCreators(action.showListCard, dispatch),
    hideList: bindActionCreators(action.hideListCard, dispatch)
})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;