import axios from 'axios';

export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user,
  };
};

export const updateUserList = list => {
  return {
    type: 'UPDATE_USERLIST',
    list,
  };
};

export const addUser = user => {
  console.log(`inserting new user: ${user}`)
  return {
    type: 'ADD_USER',
    user,
  };
};

// export const submitUser = (user) => {
//     axios.post('/messanger/postUser', {"username" : user})
//       .then(() => { })
//       .catch(e => console.log(e));
//   };

export const submitUser = (user) => (dispatch, getState) => {

    dispatch(updateUser(user));
    axios.post('/messanger/postMessage', {"username": user})
      .then(() => { })
      .catch(e => console.log(e));
      dispatch(addUser(getState().userReducer.currentUser));
};