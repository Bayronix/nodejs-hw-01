import UpdateContacts from './UpdateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
  const contactRemove = await getAllContacts();
  contactRemove.pop();
  await UpdateContacts(contactRemove);
};
