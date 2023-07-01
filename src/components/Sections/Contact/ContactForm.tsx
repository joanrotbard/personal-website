import emailjs from '@emailjs/browser';
import {FC, memo, RefObject, useCallback, useRef} from 'react';

const ContactForm: FC = memo(() => {
  const form = useRef();

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      emailjs
        .sendForm(
          'service_fp8dfbl',
          'template_cx4x978',
          form.current as unknown as HTMLFormElement,
          '7DF21KMija0vA3hl1',
        )
        .then(
          (result: unknown) => {
            // show the user a success message
            console.log('MESSAGE SENT: ', result);
          },
          (error: unknown) => {
            // show the user an error
            console.log('ERROR WHILE TRYING TO CONTACT: ', error);
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
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
