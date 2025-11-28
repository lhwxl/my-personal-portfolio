import { useState, FormEvent } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading('Sending your message...');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    toast.success('Message sent successfully! I will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-8">
          Have a question or want to work together? Leave your details and I will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;