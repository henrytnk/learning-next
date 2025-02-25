'use client'

import { sendEmail } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";
import { BeatLoader } from "react-spinners";

const formStyle = "flex flex-col gap-4 max-w-[400px] mx-auto";
const buttonStyle = "flex items-center justify-center p-2 rounded-md bg-blue-700 transition hover:bg-blue-400";
const inputStyle = "text-black p-2 rounded-sm";
const responseStyle = "flex mx-auto p-2 rounded-sm bg-blue-300 text-white mb-4 w-full max-w-[400px]";

const Form = () => {
  const [state, formAction] = useFormState(sendEmail, { message: '' });

  return (
    <>
      {state.message && <h3 className={responseStyle}>{state.message}</h3>}
      <form action={formAction} className={formStyle}>
        <input type="text" name="firstName" required className={inputStyle} placeholder='First Name' />
        <input type="text" name="lastName" required className={inputStyle} placeholder='Last Name' />
        <input type="text" name="email" required className={inputStyle} placeholder='Email Address' />
        <textarea name="message" id="message" className={inputStyle} required placeholder="Message"></textarea>
        <SubmitButton />
      </form>
    </>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  if (pending)
    return <BeatLoader color="#fff" className="flex items-center justify-center" />

  return (
    <button className={buttonStyle} type="submit" disabled={pending} >Send</button>
  );
}

export default Form