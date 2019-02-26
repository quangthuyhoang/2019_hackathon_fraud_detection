import { getAccounts } from './methods';
// const apiURL = "locahost";

export function handleInputChange(txt) {
    return {
        type: 'INPUT_CHANGE',
        input: txt
    }
}

// GET Grocery LIST ACTION
export const GetAccounts = () => ({
    type: 'GET_ACCOUNTS_BEGINS'
})

export const GetAccountsSuccess = (accounts) => {
    return {
        type: 'GET_ACCOUNTS_SUCCESS',
        accounts: accounts //type array
    }
}

export const GetAccountsFailure = (ErrorMessage) => {
    return {
        type: 'GET_ACCOUNTS_FAILURE',
        message: ErrorMessage
    }
}

export function GetAccountsList() {  
    return function(dispatch) {
        dispatch(GetAccounts())
        return getAccounts().then(res => res.json())
        .then(data => {
            console.log("accounts", data);
            // On Error
            if(data.status !== 200) {
                dispatch(GetAccountsFailure(
                    'Failed to get account data'
                    ))
            } 
            
            if(data.accounts >= 0) {
                dispatch(GetAccountsSuccess(data.accounts))
            }
            else {
            console.log("There's no data, accounts received:", data)
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch(GetAccountsFailure(err))
        })
    }
  }

export const showList = () => {
    return {
        type: 'SHOW_LIST_TRUE',
    }
} 

export const hideList = {
    type: 'SHOW_LIST_FALSE'
}

export function showListCard(id) {
    return function(dispatch) {
        dispatch(showList())
    }
}

export function hideListCard() {
    return function(dispatch) {
        dispatch(hideList())
    }
}

export const showDetail = (id) => {
    return {
        type: 'SHOW_DETAIL_TRUE',
        payload: id
    }
} 

export const hideDetail = {
    type: 'SHOW_DETAIL_FALSE'
}

export function showAccountDetail(id) {
    return function(dispatch) {
        dispatch(showDetail(id))
    }
}

export function hideAccountDetail() {
    return function(dispatch) {
        dispatch(hideDetail())
    }
}
//   // GROCERY LIST SELECTION ACTIONS
// function groceryItemSelect(item) {
//     return {
//         type: 'SELECT_GROCERY_ITEM',
//         groceryListSelect: JSON.parse(item)
//     }
// }
  
// function groceryItemSelectNone() {
//     return {
//         type: 'SELECT_GROCERY_ITEM_NONE'
//     }
// }

// export function selectGroceryItem(value) {
//     // Select None
//     if(value === "none") {
//     return function(dispatch) {
//         dispatch(groceryItemSelectNone())
//     }
//     }
//     // Select any Items on groceryList
//     return function(dispatch) {
//         dispatch(groceryItemSelect(value))
//     }
// }

// // Dish List Selection Action
// export function dishItemSelect(item) {

//     return {
//         type: "SELECT_DISH_ITEM",
//         dishItemSelect: JSON.parse(item)
//     }
// }

// // add current select item to dishList
// function addFoodItemSuccess(item) {
//     return {
//         type: 'ADD_FOOD_ITEM_SUCCESS',
//         newItem: item
//     }
// }

// // function addFoodItemFailure() {
// //     return {
// //         type: 'ADD_FOOD_ITEM_FAILURE'
// //     }
// // }

// export function addFoodItem(item) {
//     return function(dispatch) {
//         dispatch(addFoodItemSuccess(item))
//     }
// }

//   // remove current select item from dishList
// function removeFoodItemSuccess(item) {
//     return {
//         type: 'REMOVE_FOOD_ITEM_SUCCESS',
//         removeItem: item
//     }
// }

// // function removeFoodItemFailure(item) {
// //     return {
// //         type: 'REMOVE_FOOD_ITEM_FAILURE'
// //     }
// // }

// export function removeFoodItem(item) {
//         return function(dispatch) {
//             dispatch(removeFoodItemSuccess(item))
//         }
// }

// // UDPATE PORTION SIZE
// function updateFoodItemSuccess(updatedFoodList) {
//     return {
//         type: 'UPDATE_FOOD_ITEM_SUCCESS',
//         updateFoodList: updatedFoodList
//     }
// }

// export function updateFoodItem(foodList, updatedItem) {
//     return function(dispatch) {
//         const updatedFoodList = updateArrById(foodList, updatedItem)
//         dispatch(updateFoodItemSuccess(updatedFoodList))
//     }
// }

// // const b = {
// //     type
// //     ndbno: 12345,
// //     value: 12,
    
// // }

// // GET NUTRITION
// function GetNutritionBegins() {
//     return {
//         type: 'GET_NUTRITION_BEGINS'
//     }
// }

// export function GetNutritionSuccess(item) {
//     return {
//             type: 'GET_NUTRITION_SUCCESS',
//             dishNutrition: item
//         }
// }

// export function GetNutritionFailure(error) {
//     return {
//             type: 'GET_NUTRITION_FAILURE',
//             message: error
//         }
// }

// export function GetNutrition(dish) {
//     return function(dispatch) {
//         dispatch(GetNutritionBegins())
//         return apiFetchNutritionPost(dish).then(res => res.json())
//         .then(data => {
//             if(data.errors) {
//                 dispatch(GetNutritionFailure(data.errors))
//             } else {
//                 dispatch(GetNutritionSuccess(data))
//             }
//         })
//         .catch(err => {
//             console.log("error", err)
//             dispatch(GetNutritionFailure(err.toString()))
//         })
//     }
// }

