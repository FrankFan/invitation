export function validateEmail(email) {
  // anystring@anystring.anystring
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}