// Contact Page
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
// ...existing code...
import Button from '../components/ui/Button';

const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_USER_ID = 'your_user_id'; // Replace with your EmailJS user/public key

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async () => {
    setError('');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      );
      setSent(true);
      reset();
    } catch {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Have a question or want to work together? Fill out the form below and I'll get back to you soon!
      </motion.p>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="glass-card p-6 rounded-xl flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label className="form-control w-full">
          <span className="label-text font-medium mb-1">Name</span>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register('user_name', { required: 'Name is required' })}
          />
          {errors.user_name && <span className="text-error text-xs mt-1">{errors.user_name.message}</span>}
        </label>
        <label className="form-control w-full">
          <span className="label-text font-medium mb-1">Email</span>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register('user_email', {
              required: 'Email is required',
              pattern: { value: /.+@.+\..+/, message: 'Invalid email address' },
            })}
          />
          {errors.user_email && <span className="text-error text-xs mt-1">{errors.user_email.message}</span>}
        </label>
        <label className="form-control w-full">
          <span className="label-text font-medium mb-1">Message</span>
          <textarea
            className="textarea textarea-bordered w-full min-h-[100px]"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="text-error text-xs mt-1">{errors.message.message}</span>}
        </label>
        <Button type="submit" disabled={isSubmitting} className="btn-primary mt-2">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        {sent && <span className="text-success mt-2">Message sent successfully!</span>}
        {error && <span className="text-error mt-2">{error}</span>}
      </motion.form>
    </section>
  );
}
