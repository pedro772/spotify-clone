export default function getUserWithoutPassword(_user) {
  const userWithoutPassword = { ..._user };
  delete userWithoutPassword.password;
  return userWithoutPassword;
}
