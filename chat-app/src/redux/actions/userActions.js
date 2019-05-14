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

export const submitUser = () => (user) => {
    axios.post('/userList/postUser', {"username" : user})
      .then(() => { console.log('posted user to the database') })
      .catch(e => console.log(e));
  };