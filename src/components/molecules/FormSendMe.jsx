import React, { useState } from 'react'

export default function FormSendMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        resetForm();
    };

    return (
        <form onSubmit={onSubmit} className="space-y-4 font-montserrat">
            <div>
                <label className="block text-md font-medium text-satin-sheen-gold-600">Nama</label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500" 
                    placeholder="Nama Anda" 
                />
            </div>
            
            <div>
                <label className="block text-md font-medium text-satin-sheen-gold-600">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500" 
                    placeholder="email@example.com" 
                />
            </div>
            
            <div>
                <label className="block text-md font-medium text-satin-sheen-gold-600">Pesan</label>
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border rounded-lg bg-ivory-500 text-raisin-black-500" 
                    placeholder="Tulis pesan..."
                ></textarea>
            </div>

            <button type="submit" className="w-full bg-satin-sheen-gold text-white py-2 rounded-lg hover:bg-satin-sheen-gold-400 transition-all duration-300 ease-out">
                Kirim
            </button>
        </form>
    );
}
