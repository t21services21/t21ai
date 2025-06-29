import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header style={{ backgroundColor: '#001f3f', padding: '1rem 0', textAlign: 'center', color: 'white' }}>
        <Image src="/logo.png" alt="T21 AI Logo" width={80} height={80} />
        <h1 style={{ margin: '0.5rem 0', fontSize: '1.5rem' }}>T21 AI Platform</h1>
        <nav style={{ marginTop: '0.5rem' }}>
          <Link href="/" style={{ color: 'white', margin: '0 1rem' }}>Home</Link>
          <Link href="/about" style={{ color: 'white', margin: '0 1rem' }}>About</Link>
          <Link href="/training" style={{ color: 'white', margin: '0 1rem' }}>Training</Link>
          <Link href="/contact" style={{ color: 'white', margin: '0 1rem' }}>Contact</Link>
        </nav>
      </header>

      <main style={{ padding: '2rem', fontFamily: 'Arial', lineHeight: 1.6, maxWidth: '900px', margin: '0 auto' }}>
        <Script
          id="t21-ai-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.talkflowSettings = {
                chatbotId: 'clw3jx4qy000309l70qlgfd51',
                token: '',
              };
              (function(d, t) {
                var s = d.createElement(t),
                    options = d.getElementsByTagName(t)[0];
                s.src = "https://cdn.talkflow.ai/widget.js";
                s.async = true;
                options.parentNode.insertBefore(s, options);
              })(document, 'script');
            `,
          }}
        />

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>Welcome to T21 AI Platform</h2>
          <p style={{ fontSize: '1.1rem' }}>
            Empowering Africa and the world with AI solutions for Healthcare, Remote Work,
            Leadership Training, and Workforce Development.
          </p>
        </div>

        <h2>🌍 What We Offer</h2>
        <ul>
          <li>✅ <strong>NHS Training Program:</strong> Get job-ready skills in RTT validation, appointment booking, clinic letter handling, and more.</li>
          <li>🤖 <strong>AI Assistant:</strong> Now live — 24/7 smart guidance for NHS roles, remote jobs, visa guidance, and interview prep.</li>
          <li>🎓 <strong>Leadership Development:</strong> Training African leaders through AU Gateway Global CIC in partnership with UK institutions.</li>
          <li>🌐 <strong>Remote Work for Africans:</strong> Upskill and access global jobs through our Nigeria delivery hub.</li>
          <li>💼 <strong>Funders & Partners:</strong> Join our mission to empower communities through technology and training.</li>
        </ul>

        <h2>🚀 Get Started</h2>
        <p>
          👉 <a href="https://training.t21services.co.uk/enquiry-form" target="_blank">Register for NHS Admin Training</a><br/>
          👉 <a href="https://t21servicestraining.co.uk/account/login" target="_blank">Access Practical Training Platform</a>
        </p>

        <h2>🔗 Learn More</h2>
        <p>
          Visit <a href="https://www.t21services.co.uk" target="_blank">T21 Services UK</a> and <a href="https://auglobalgateway.org" target="_blank">AU Gateway Global CIC</a>
        </p>

        <div style={{ marginTop: '3rem', textAlign: 'center', fontStyle: 'italic', color: 'gray' }}>
          💬 Use the chat icon in the bottom-right corner to speak with our AI Assistant anytime.
        </div>
      </main>

      <footer style={{ backgroundColor: '#f4f4f4', textAlign: 'center', padding: '1rem', marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        © 2025 T21 AI. Powered by African Union Agenda 2063 — AU Gateway Global CIC | T21 Services UK | T21 Consultancy Nigeria | TOEF
      </footer>
    </>
  );
}
