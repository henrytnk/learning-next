'use client'

import { sendEmail } from "@/utils/actions";

const formStyle = "flex flex-col gap-4 w-[400px] mx-auto";
const buttonStyle = "flex items-center justify-center p-2 rounded-md bg-blue-700 transition hover:bg-blue-400";
const inputStyle = "text-black p-2 rounded-sm";

const Form = () => {
  return (
    <form action={sendEmail} className={formStyle}>
      <input type="text" name="firstName" required className={inputStyle} placeholder='First Name' />
      <input type="text" name="lastName" required className={inputStyle} placeholder='Last Name' />
      <input type="text" name="email" required className={inputStyle} placeholder='Email Address' />
      <textarea name="message" id="message" className={inputStyle} required placeholder="Message"></textarea>
      <button className={buttonStyle} type="submit">Send</button>
    </form>
  )
}

export default Form