import { USER_LOGIN_SUCCESS } from "../actionTypes/user";

function exampleDispacth() {
  for (let i = 0; i < 10; i++) {}
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      user: {
        displayName: "Test",
        photoURL:
          "https://lh3.googleusercontent.com/a-/AOh14Gg6Yos9hRP3yPCBCiWmQGWkhBqhvucATCBj0YhNBg=s96-c",
      },
    },
  };
}

// const singIn = () => {
//   fire
//     .auth()
//     .signInWithPopup(googleProvider)
//     .then(function (result) {
//       var user = result.user;
//       dispatch({ type: USER_LOGIN_SUCCESS, payload: { user } });
//     })
//     .catch(function (error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       var email = error.email;
//       var credential = error.credential;
//       console.log(errorCode, errorMessage, email, credential);
//     });
// };

export { exampleDispacth };
