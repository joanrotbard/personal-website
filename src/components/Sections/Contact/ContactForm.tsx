import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import {FC, memo, RefObject, useCallback, useRef} from 'react';
import {toast,ToastContainer} from 'react-toastify';

const ContactForm: FC = memo(() => {
  const form = useRef();

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      toast.success('Thank you for contacting me, I will review your message and reply soon!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
      });
      event.preventDefault();
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
          form.current as unknown as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
        )
        .then(
          (result: unknown) => {
            // show the user a success message
            console.log('MESSAGE SENT: ', result);
            (form.current as unknown as HTMLFormElement).reset();
          },
          (error: unknown) => {
            // show the user an error
            console.log('Something went wrong while trying to contact ', error);
            toast.error('Something went wrong while trying to contact', {
              position: toast.POSITION.TOP_RIGHT,
              theme: 'colored',
            });
          },
        );
    },
    [form],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-yellow-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST"
      onSubmit={handleSendMessage}
      ref={form as unknown as RefObject<HTMLFormElement>}>
      <input className={inputClasses} name="user_name" placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="user_email"
        placeholder="Email"
        required
        type="email"
      />
      <textarea className={inputClasses} maxLength={250} name="message" placeholder="Message" required rows={6} />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-yellow-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
      <ToastContainer />
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
