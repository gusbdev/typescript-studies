type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue: User) => {
  return (
    user.username === receivedValue.username &&
    user.password === receivedValue.password
  );
};

const bdUser = { username: 'gus', password: 'admin' };
const receivedUser = { username: bdUser.username, password: bdUser.password };
const loggedIn = verifyUser(bdUser, receivedUser);
console.log(loggedIn);
