const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const usersReducer = require('../features/users/usersSlice');

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreamReducer,
    users: usersReducer
  },
});

module.exports = store