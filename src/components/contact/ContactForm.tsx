
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-pharmacy-light p-6 rounded-lg shadow-sm">
      <div>
        <label htmlFor="nom" className="block mb-1 font-medium">Nom</label>
        <input
          id="nom"
          name="nom"
          type="text"
          className="w-full border rounded px-3 py-2"
          required
          value={form.nom}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full border rounded px-3 py-2"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full border rounded px-3 py-2"
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-pharmacy-DEFAULT hover:bg-pharmacy-dark">
        Envoyer
      </Button>
      {success && (
        <div className="text-green-600 text-sm mt-2">Votre message a bien été envoyé !</div>
      )}
    </form>
  );
}
