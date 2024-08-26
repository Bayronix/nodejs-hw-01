import UpdateContacts from './UpdateContacts.js';

export const removeAllContacts = async () => {
  await UpdateContacts([]);
};
