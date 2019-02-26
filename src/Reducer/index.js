import { combineReducers } from 'redux';
import initState from './initState';
// import UpdateFoodItemReducer from './UpdateFoodItemReducer';


function MainReducer(state = initState, action) {
    switch(action.type) {
        case 'GET_ACCOUNTS' : {
            // return state;
            return {
                ...state,
                loading: true
            }
        }
        case 'GET_ACCOUNTS_SUCCESS': {
            // return state;
            return {
                ...state,
                accounts: action.accounts,
                loading: false
            }
        }

        case 'GET_ACCOUNTS_FAILURE': {
            // return state;
            return {
                ...state,
                message: action.message,
                loading: false
            }
        }

        case 'SHOW_LIST_TRUE': {
            return {
                ...state,
                showList: true,
            }
        }

        case 'SHOW_LIST_FALSE': {
            return {
                ...state,
                showList: false
            }
        }

        case 'SHOW_DETAIL_TRUE': {
            let accountId = action.payload
            return {
                ...state,
                showDetail: true,
                currentAccount: accountId
            }
        }

        case 'SHOW_DETAIL_FALSE': {
            return {
                ...state,
                showDetail: false
            }
        }
        
        // case 'SELECT_GROCERY_ITEM': {
        //     return {
        //         ...state,
        //         groceryListSelect: action.groceryListSelect
        //     }
        // }

        // case 'SELECT_GROCERY_ITEM_NONE': {
        //     return {
        //         ...state,
        //         groceryListSelect: {}
        //     }
        // }

        // case 'SELECT_DISH_ITEM': {
        //     return {
        //         ...state,
        //         dishItemSelect: action.dishItemSelect
        //     }
        // }

        // case 'ADD_FOOD_ITEM_SUCCESS': {
        //     let newDish = [...state.dish];
        //     if(state.groceryListSelect) {
        //         newDish.push(state.groceryListSelect)
        //     }
        //     return {
        //         ...state,
        //         dish: newDish
        //     }
        // }

        // case 'REMOVE_FOOD_ITEM_SUCCESS': {
        //     // var currDish = ;
        //     // let newDish = filterArrById([...state.dish], state.dishItemSelect.ndbno)
        //     let newDish = filterArrById([...state.dish], action.removeItem.ndbno)
        //     return {
        //         ...state,
        //         dish: newDish
        //     }
        // }

        // case 'REMOVE_FOOD_ITEM_FAILURE': {
        //     return state;
        // }

        // case 'GET_NUTRITION_BEGINS': {
        //     return {
        //         ...state,
        //         loading: true,
        //         payload_arrived: false,
        //     }
        // }

        // case 'GET_NUTRITION_SUCCESS': {
        //     return {
        //         ...state,
        //         dishNutrition: action.dishNutrition,
        //         loading: false,
        //         payload_arrived: true,
        //     }
        // }

        // case 'GET_NUTRITION_FAILURE' : {
        //     return {
        //         ...state,
        //         dishNutrition: {},
        //         loading: false,
        //         payload_arrived: false,
        //         message: action.message,
        //     }
        // }

        default: {
            return state;
        }

    }
}

// function FoodItemReducer(state = initState, action) {
//     switch(action.type) {
//         case 'UPDATE_FOOD_ITEM_SUCCESS': {
//             return {
//                 ...state,
//                 dish: action.updateFoodList
//             }
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const FoodItemReducer = UpdateFoodItemReducer(initState, action)

const rootReducer = combineReducers({
    MainReducer
})

export default rootReducer;