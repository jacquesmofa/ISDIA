import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AccessibilityControls from '@/components/feature/AccessibilityControls';
import { Link } from 'react-router-dom';

export default function Login() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-50 font-body">
      <Navbar onOpenAccessibility={() => setAccessibilityOpen(true)} />
      <AccessibilityControls isOpen={accessibilityOpen} onClose={() => setAccessibilityOpen(false)} />

      <main role="main">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="section-container">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5">
                  <span className="text-background-50 font-heading font-bold text-2xl">I</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground-50">
                  Attendee Login
                </h1>
                <p className="text-secondary-400 text-sm mt-2">
                  Access your personalized dashboard, agenda, and networking tools.
                </p>
              </div>

              <div className="glass-card p-8">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="email" className="block text-foreground-50 text-sm font-medium mb-2">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg bg-background-50 border border-secondary-200/30 text-foreground-50 text-sm placeholder-secondary-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-foreground-50 text-sm font-medium mb-2">Password</label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        className="w-full px-4 py-3 rounded-lg bg-background-50 border border-secondary-200/30 text-foreground-50 text-sm placeholder-secondary-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary golden-shimmer text-sm w-full cursor-pointer">
                      Sign In
                      <i className="ri-login-box-line" style={{ width: '16px', height: '16px' }} />
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center text-sm">
                  <p className="text-secondary-500">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="text-primary-600 hover:text-primary-300 underline">
                      Register here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}