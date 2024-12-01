'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' })
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          user_name: data.name,
          user_email: data.email,
          user_subject: data.subject,
          user_message: data.message
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );

      setIsSubmitted(true);
      toast('Message sent successfully!', {
        description: 'A confirmation email has been sent to you.',
        duration: 5000,
        icon: <CheckCircle />
      });
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast('Failed to send message', {
        description: 'Please try again later.',
        className: 'destructive',
        icon: <Loader2 />
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg rounded-xl bg-card p-8 shadow-lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Input {...register('name')} placeholder="Your Name" className="bg-background" />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Input {...register('email')} type="email" placeholder="Your Email" className="bg-background" />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Input {...register('subject')} placeholder="Subject" className="bg-background" />
          {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
        </div>
        <div>
          <Textarea {...register('message')} placeholder="Your Message" className="bg-background" rows={4} />
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : isSubmitted ? (
            <CheckCircle className="mr-2 h-4 w-4" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
}
