import { connect } from 'react-redux';
import Main from '../Component/Main';
import * as action from '../Action/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        // groceryList: state.GroceryListReducer.groceryList,
        // dishList: state.GroceryListReducer.dish,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAccountList: bindActionCreators(action.GetAccountsList, dispatch)
})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;