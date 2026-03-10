import { XIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";

export default function Popup({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 w-full max-w-md relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                    <XIcon className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-semibold mb-4 text-white">
                    Start Your Project
                </h2>

                <p className="text-sm text-gray-400 mb-6">
                    Tell us about your project and we’ll get back to you shortly.
                </p>

                <form className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none"
                    />

                    <textarea
                        placeholder="Tell us about your project"
                        rows="4"
                        className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none"
                    />

                    <PrimaryButton >
                        Send Request
                    </PrimaryButton>

                </form>
            </div>
        </div>
    );
}