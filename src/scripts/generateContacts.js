import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import UpdateContacts from './UpdateContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
export const generateContacts = async (number) => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const array = Array(number).fill(0).map(createFakeContact);
  const updateFile = [...data, ...array];
  await UpdateContacts(updateFile);
};

generateContacts(5);
