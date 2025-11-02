"use client";
import { Mail, Phone, Plus, X } from "lucide-react";
import { useState } from "react";

export default function GlassCard() {
  const [emails, setEmails] = useState(["", ""]);
  const [phones, setPhones] = useState(["", ""]);

  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  const removeEmail = (index: number): void => {
    if (emails.length > 1) {
      setEmails(emails.filter((_, i: number) => i !== index));
    }
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const addPhone = () => {
    setPhones([...phones, ""]);
  };

  const removePhone = (index: number) => {
    if (phones.length > 1) {
      setPhones(phones.filter((_, i) => i !== index));
    }
  };

  const updatePhone = (index: number, value: string): void => {
      phones[index] = value;

    setPhones(phones);

    phones[index] = value;
    setPhones(phones);
  };

  const handleSubmit = () => {
    const validEmails = emails.filter(email => email.trim());
    const validPhones = phones.filter(phone => phone.trim());
    console.log({ emails: validEmails, phones: validPhones });
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A90E2]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4A90E2]/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4A90E2]/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Multiple Outer Glow Rings with Enhanced Glow */}
        <div className="absolute -inset-8 rounded-[40px] bg-[#4A90E2]/40 opacity-60 blur-2xl animate-pulse" />
        <div className="absolute -inset-6 rounded-[38px] bg-[#4A90E2]/50 opacity-70 blur-xl animate-pulse delay-300" />
        <div className="absolute -inset-4 rounded-[36px] bg-[#4A90E2]/60 opacity-80 blur-lg animate-pulse delay-150" />
        <div className="absolute -inset-2 rounded-[32px] ring-4 ring-[#4A90E2]/30 ring-opacity-50" />
        
        {/* Main Card */}
        <div className="relative rounded-[30px] bg-[#4A90E2] p-[2px] shadow-2xl shadow-[#4A90E2]/50">
          {/* Enhanced Gradient Shine Overlay */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-[0.15] rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-white opacity-[0.08] rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 rounded-[30px] bg-white/10 backdrop-blur-[30px] p-6 border border-white/30 shadow-inner">
            <div className="text-center mb-6">
              <h2 className="text-white text-xl font-semibold mb-1">Find Any Information</h2>
              <p className="text-white text-sm mb-0 opacity-70">Your gateway to instant answers.</p>
            </div>

            {/* Email Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Email(s)</span>
                </div>
                <button
                  type="button"
                  onClick={addEmail}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-[#4A90E2]/30"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {emails.map((email, i) => (
                  <div key={i} className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => updateEmail(i, e.target.value)}
                      placeholder="Enter email address"
                      className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-[#4A90E2]/30 focus:outline-none transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-[#4A90E2]/20"
                    />
                    {emails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeEmail(i)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-white mb-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Phones</span>
                </div>
                <button
                  type="button"
                  onClick={addPhone}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-[#4A90E2]/30"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {phones.map((phone, i) => (
                  <div key={i} className="relative group">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => updatePhone(i, e.target.value)}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-[#4A90E2]/30 focus:outline-none transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-[#4A90E2]/20"
                    />
                    {phones.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePhone(i)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-2 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4A90E2]/40 border border-white/30 hover:border-white/50"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
