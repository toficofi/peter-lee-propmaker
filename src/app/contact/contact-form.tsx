"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, CheckCircle2, Loader } from "lucide-react";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'd love to hear from you. Please fill in the form to get in touch.",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setSubmitting(true);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    setSubmitting(false);
    setSubmitted(true);
  }

  return !submitted ? (
    <form
      className="flex flex-col gap-4"
      data-netlify="true"
      netlify-honeypot="hidden"
      method="POST"
      onSubmit={onSubmit}
    >
      <input
        type="hidden"
        name="subject"
        value="Enquiry from Peter Lee Propmaker [EMAIL]"
      />
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          rows={8}
          required
          name="message"
          placeholder="Type your message here."
          id="message"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button
          disabled={submitting}
          type="submit"
          size="lg"
          className="w-full md:w-auto"
        >
          {submitting && <Loader className="mr-2 h-4 w-4 animate-spin" />} Send
        </Button>
      </div>
      <input className="hidden" name="hidden" />
    </form>
  ) : (
    <div className="text-center h-full flex flex-col gap-2 justify-center items-center text-lg font-medium bg-white rounded-sm border">
      <CheckCircle2 className="text-green-500" />
      Thanks! I&apos;ll get in touch soon.
    </div>
  );
}
