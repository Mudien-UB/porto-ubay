import React, { useState } from "react";
import { FORM_URL } from '../../api/formUrl';

export default function FormSendMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errors = {};

    // Username minimal 5 huruf
    if (!formData.name || formData.name.trim().length < 3) {
      errors.name = "Nama minimal 3 karakter";
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Email tidak valid";
    }

    // Pesan minimal 5 huruf
    if (!formData.message || formData.message.trim().length < 5) {
      errors.message = "Pesan minimal 5 karakter";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        resetForm();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 font-montserrat" noValidate>
      <div>
        <label className="block text-md font-medium text-satin-sheen-gold-600">
          Nama
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500 ${
            errors.name ? "border-red-600" : ""
          }`}
          placeholder="Nama Anda"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-md font-medium text-satin-sheen-gold-600">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500 ${
            errors.email ? "border-red-600" : ""
          }`}
          placeholder="email@example.com"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-md font-medium text-satin-sheen-gold-600">
          Pesan
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500 ${
            errors.message ? "border-red-600" : ""
          }`}
          placeholder="Tulis pesan..."
        ></textarea>
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-satin-sheen-gold text-white py-2 rounded-lg hover:bg-satin-sheen-gold-400 transition-all duration-300 ease-out"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Mengirim..." : "Kirim"}
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-2">Pesan berhasil dikirim!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">Gagal mengirim pesan. Coba lagi.</p>
      )}
    </form>
  );
}
