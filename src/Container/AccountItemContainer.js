import { connect } from 'react-redux';
import * as action from '../Action/index';
import { bindActionCreators } from 'redux';
import AccountItem from '../Component/AccountItem';

const mapStateToProps = (state) => {
    return {
        mainStore: state.MainReducer
        // groceryList: state.GroceryListReducer.groceryList,
        // dishList: state.GroceryListReducer.dish,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    showAccountDetail: bindActionCreators(action.showAccountDetail,dispatch),
    hideAccountDetail: bindActionCreators(action.hideAccountDetail, dispatch),
    showList: action.showListCard,
    hideList: action.hideListCard
})

const AccountItemContainer = connect(mapStateToProps, mapDispatchToProps)(AccountItem);

export default AccountItemContainer;