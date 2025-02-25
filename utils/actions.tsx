'use server'

import { readFile, writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";

interface Email {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const sendEmail = async (prevData: any, formData: FormData) => {
  'use server'
  // const rawData = Object.fromEntries(formData);

  await new Promise(resolve => setTimeout(resolve, 3000));

  const newEmail: Email = {
    id: uuid(),
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  console.log(`Sending email from '${newEmail.email}'.`)
  console.log(newEmail)

  try {
    await saveEmail(newEmail);
    return { message: "Your email was successfully sent!" }
  } catch (error) {
    return { message: 'There was an error sending your email.' }
  }
}

export const fetchEmails = async (): Promise<Email[]> => {
  const emails = await readFile('emails.json', { encoding: 'utf-8' });
  const response = emails ? JSON.parse(emails) : [];

  return response;
}

export const saveEmail = async (email: Email) => {
  const emails = await fetchEmails();
  emails.push(email);

  await writeFile('emails.json', JSON.stringify(emails));
}