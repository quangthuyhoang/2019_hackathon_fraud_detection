import env from '../env';

const baseUrl = 'https://uat.cloud.api.aig.net/valic/valic-fraud-detection-api/v1/';
const test = 'https://valic-fraud-detection-api.apps.nprd-pcf.aig.net/v1/';

// 
export const getBaseApiRequest = (args) => {
  // return fetch( baseUrl + `${args.params}`, {
  return fetch('www.google.com', {
  method: 'GET',
  mode: 'no-cors',
  // protocol:'http:',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // 'apikey': 'GBXy3sxSgHmpyGDhp5u44AEcu1iYrPMo',
    // 'Authorization': 'Basic YWRtaW46c2VjcmV0',
  }
 })
}
// Get Accounts - 1st API request
export const getAccounts = () => {
  const options = {
    params: 'accounts'
  }
  return getBaseApiRequest(options)
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
}
// Get Calllogs - 2nd API request
export const getCallLogs= (participantId) => {
  const options= {
    params: `calllogs/${participantId}`
  }
  return getBaseApiRequest(options)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
}


// postData('http://example.com/answer', {answer: 42})
//   .then(data => console.log(data)) // JSON from `response.json()` call
//   .catch(error => console.error(error))

// function postData(url, data) {
//   // Default options are marked with *
//   return fetch(url, {
//     body: JSON.stringify(data), // must match 'Content-Type' header
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, same-origin, *omit
//     headers: {
//       'user-agent': 'Mozilla/4.0 MDN Example',
//       'content-type': 'application/json'
//     },
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, cors, *same-origin
//     redirect: 'follow', // manual, *follow, error
//     referrer: 'no-referrer', // *client, no-referrer
//   })
//   .then(response => response.json()) // parses response to JSON
// };

// // remove object  arrinay
// // export function filterArrById(arr, val) {
// //   return arr.filter(function(el) {
// //     return el.ndbno !== val;
// //   })
// // };

// // replace update object in an array

// export function updateArrById(arr, obj) {
//   let results = arr.map(el => { 
//     if(obj['ndbno'] === el.ndbno) {
//       return obj;
//     }
//     return el;
//   })

//   return results;
// }


// const createArrayByKey = (key, arr) => {
//   if( key === 'ndbno' ) {
//     return arr.map( el => {
//       return {
//         'ndbno': el[key]
//       };
//     })
//   }
//   if( key === 'portion' ) {
//     return arr.map( el => { 
//       return {
//         ndbno: el.ndbno,
//         value: el.value,
//         unit: el.unit
//       };
//     })
//   }
// };

// export const getDishNDBNoList = (dish) => {
//   return createArrayByKey('ndbno', dish) 
// };

// const getFullDishList = (dish) => {
//   return createArrayByKey('portion', dish)
// };


// // Send POST request to API
// // [ {"ndbno": "15236"}, {"ndbno": "45253479"}, {"ndbno": "45362799"} ]
// export const apiFetchGroceryList = (db, query) => {

//   return fetch(getBaseURL() + 'api/' + db + '/' + query, {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json; charset=utf-8',
//   },
//   })
// }


