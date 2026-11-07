import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="page-shell">
      <div className="container auth-card">
        <span className="eyebrow">Welcome</span>
        <h1>Sign in to Mann’s Store</h1>
        <p>Google login is optional. You can continue shopping as a guest or use the admin dashboard directly.</p>

        <div className="auth-buttons">
          <button className="primary-button">Continue with Google</button>
          <Link href="/" className="secondary-button">Continue as guest</Link>
        </div>
      </div>
    </section>
  );
}
