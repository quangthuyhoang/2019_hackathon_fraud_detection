import { connect } from 'react-redux';
import Detail from '../Component/Detail';
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
    getAccountList: bindActionCreators(action.GetAccountsList, dispatch)
})

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailContainer;