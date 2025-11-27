
import React from "react";
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-9 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                    <h4 className="font-semibold mb-3 text-red-200">SpotAI</h4>
                    <p className="text-sm text-gray-400">
                        SpotAI is your AI-powered interview coach, providing personalized feedback and growth insights to help you ace every interview.
                    </p>

                </div >


                <div>
                    <h4 className="font-semibold mb-3 text-red-200">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Home</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Pricing</li>
                        <li>Features</li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-3 text-red-200">Core Features</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Secure Storage</li>
                        <li>Failure Analysis</li>
                        <li>Contextual Suggestions</li>
                        <li>Local Data Persistence</li>
                        <li>End-to-End Insights</li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-3 text-red-200">Connect With Us</h4>
                    <p className="text-sm text-gray-400">© 2025 SpotAI.</p>
                    <p className="text-sm text-gray-400 mt-2">Made with ❤️ by Sharyu</p>
                    <ul className="space-y-2 text-sm mt-4">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div >
        </footer >
    );
}