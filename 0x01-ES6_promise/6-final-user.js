import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];
  try {
    const user = await signUpUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: user });
  } catch (error) {
    response.push({ status: 'rejected', value: error.toString() });
  }
  try {
    const photo = await uploadPhoto(fileName);
    response.push({ status: 'fulfilled', value: photo });
  } catch (error) {
    response.push({ status: 'rejected', value: error.toString() });
  }
  return response;
}
