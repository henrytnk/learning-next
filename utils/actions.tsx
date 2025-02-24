'use server'

export const sendEmail = async (formData: FormData) => {
  'use server'
  const rawData = Object.fromEntries(formData);
  const email = formData.get('email');

  console.log(`Sending email from '${email}'.`)
  console.log(rawData)
}