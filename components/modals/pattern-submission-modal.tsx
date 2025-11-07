import React, { useState } from "react";
import {
  X,
  Upload,
  Code,
  CheckCircle,
  Palette,
  MousePointer,
} from "lucide-react";

interface PatternSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PatternSubmissionModal({
  isOpen,
  onClose,
}: PatternSubmissionModalProps) {
  const [formData, setFormData] = useState({
    submitterName: "",
    submitterEmail: "",
    patternType: "background",
    patternName: "",
    patternCode: "",
    category: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    // Only validate required fields: patternName and patternCode
    if (!formData.patternName || !formData.patternCode) {
      setError("Pattern name and pattern code are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/pattern-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({
            submitterName: "",
            submitterEmail: "",
            patternType: "background",
            patternName: "",
            patternCode: "",
            category: "",
            description: "",
          });
        }, 2500);
      } else {
        setError(data.error || "Failed to submit pattern");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl border-2 border-white/10 shadow-2xl max-w-2xl w-full my-8">
        {success ? (
          <div className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-20 h-20 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Submitted Successfully!
            </h2>
            <p className="text-white/70">
              Thank you for your contribution! We&#39;ll review your pattern and
              get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Upload className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">
                  Submit Your Pattern
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="submitterName"
                    value={formData.submitterName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors"
                    placeholder="John Doe (optional)"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="submitterEmail"
                    value={formData.submitterEmail}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors"
                    placeholder="john@example.com (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Pattern Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() =>
                      setFormData({ ...formData, patternType: "background" })
                    }
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                      formData.patternType === "background"
                        ? "bg-purple-500/30 border-2 border-purple-400/50 text-white"
                        : "bg-white/5 border-2 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <Palette className="w-5 h-5" />
                    Background
                  </button>
                  <button
                    onClick={() =>
                      setFormData({ ...formData, patternType: "button" })
                    }
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                      formData.patternType === "button"
                        ? "bg-purple-500/30 border-2 border-purple-400/50 text-white"
                        : "bg-white/5 border-2 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <MousePointer className="w-5 h-5" />
                    Button
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Pattern Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="patternName"
                    value={formData.patternName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors"
                    placeholder="e.g., Cosmic Gradient"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors"
                    placeholder="e.g., Gradient, Animated (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Pattern Code <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="patternCode"
                  value={formData.patternCode}
                  onChange={handleChange}
                  rows={8}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors resize-none font-mono text-sm"
                  placeholder="Paste your CSS or JSX code here..."
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-purple-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your pattern, how it works, or any special notes... (optional)"
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-3 text-red-200 text-sm">
                  {error}
                </div>
              )}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 
             text-white font-medium transition-all duration-300 
             flex items-center justify-center gap-2 shadow-sm 
             hover:shadow-md active:scale-[0.98] 
             disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Submit Pattern
                  </span>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
