import UpdateContacts from './UpdateContacts.js';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const data = await getAllContacts();
  const newData = createFakeContact();
  data.push(newData);
  await UpdateContacts(data);
};
