import { useEffect, useState } from 'react'
import './App.css'

function Header({ page, navigate }) {
  return (
    <header className="site-header">
      <button className="site-title" onClick={() => navigate('home')}>
        Promptoo
      </button>
      <nav className="site-nav">
        <button className={page === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</button>
        <button className={page === 'privacy' ? 'active' : ''} onClick={() => navigate('privacy')}>Privacy Policy</button>
        <button className={page === 'about' ? 'active' : ''} onClick={() => navigate('about')}>About</button>
        <button className={page === 'terms' ? 'active' : ''} onClick={() => navigate('terms')}>Terms</button>
        <button className="search-btn" aria-label="Search">🔍</button>
      </nav>
    </header>
  )
}

function Home({ navigate }) {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-logo">
          <img src="/promptoo-logo.png" alt="Promptoo" />
        </div>
        <h1 className="hero-headline">
          <em>Turn Your Photos Into</em>
          <br />
          <em>Stunning AI Art</em> <span className="sparkle-emoji">✨</span>
        </h1>
      </section>

      {/* About Section */}
      <section className="content-section" id="about">
        <h2 className="section-title">About Promptoo</h2>
        <p>
          <strong>Promptoo</strong> is your discovery launchpad for viral AI photo aesthetics and creative prompts. 
          Browse curated styles across Cinematic, Anime, Cyberpunk, 3D Character, Professional Portrait, and 
          Couple photography.
        </p>
        <p>
          With Promptoo, simply pick your favorite style, select your photo, and hand off directly to ChatGPT to 
          generate high-resolution AI artwork in seconds.
        </p>

        <h3 className="subsection-title" id="features">Key Features</h3>
        <ul className="feature-list">
          <li>
            <span className="feature-emoji">🎨</span>
            <span><strong>Curated Aesthetic Templates:</strong> Explore hundreds of hand-tested, viral AI styles designed for maximum likeness and visual appeal.</span>
          </li>
          <li>
            <span className="feature-emoji">⚡</span>
            <span><strong>Seamless 1-Tap ChatGPT Bridge:</strong> Automatically package your photo and prompt to create images in the official ChatGPT app.</span>
          </li>
          <li>
            <span className="feature-emoji">🏆</span>
            <span><strong>Creator Rewards &amp; Community:</strong> Share top-performing styles, rank on weekly/monthly leaderboards, and earn creator rewards.</span>
          </li>
          <li>
            <span className="feature-emoji">🔒</span>
            <span><strong>Device-First Privacy:</strong> Your photos are processed directly on your device. We never train AI models on your personal photos.</span>
          </li>
        </ul>

        <h3 className="subsection-title" id="legal">Legal &amp; Policies</h3>
        <p>To ensure transparency and protect our community, please review our official policies:</p>
        <ul className="policy-links">
          <li>
            📄 <button onClick={() => navigate('privacy')}>Privacy Policy</button> — How we protect your data and device privacy.
          </li>
          <li>
            📜 <button onClick={() => navigate('terms')}>Terms of Service</button> — Guidelines on app usage, prompts, and creator rewards.
          </li>
        </ul>

        <h3 className="subsection-title" id="contact">Contact &amp; Support</h3>
        <p>Have questions, suggestions, or need help? Reach out directly to our developer team:</p>
        <ul className="contact-list">
          <li><strong>Developer:</strong> Dhruv Sutariya</li>
          <li><strong>Email:</strong> <a href="mailto:support.promptoo@gmail.com">support.promptoo@gmail.com</a></li>
          <li><strong>Platform:</strong> Android (Google Play Store)</li>
        </ul>
      </section>
    </>
  )
}

function About() {
  return (
    <section className="content-section policy-page about-page">
      <div className="policy-header">
        <span className="policy-label">ABOUT PROMPTOO</span>
        <h1>Empowering Everyone to Create Stunning AI Art in Seconds ✨</h1>
      </div>

      <div className="policy-body">
        <h2>Our Story</h2>
        <p>In the rapidly growing world of artificial intelligence, generating high-quality, lifelike AI portraits and artistic photos often requires writing complex, technical prompt formulas. Many users struggle with getting the lighting, aesthetic style, facial likeness, and mood just right.</p>
        <p>Promptoo was created to eliminate that friction.</p>
        <p>We bridge the gap between creative visual ideas and powerful generative AI models like ChatGPT. Promptoo serves as a curated launchpad where anyone—from everyday smartphone users to digital creators—can discover trending, viral AI aesthetics and apply them to their own photos with a single tap.</p>

        <h2>What We Do</h2>
        <ul>
          <li><strong>Curate Viral Aesthetics:</strong> We test and refine hundreds of visual aesthetics—including Cinematic Film, Cyberpunk, Studio Portrait, Anime &amp; Manga, 3D Character, Watercolor, and Vintage Polaroid—ensuring every template produces high-fidelity results.</li>
          <li><strong>Streamlined 1-Tap Bridge:</strong> We connect seamlessly with the official ChatGPT Android app. Promptoo automatically packages the exact prompt formula and your selected photo(s) so you can create stunning artwork without manual prompt engineering.</li>
          <li><strong>Reward Creative Creators:</strong> Through our Creator Leaderboard and Rewards Program, creators who craft and submit popular, community-favorite templates earn recognition and prize rewards.</li>
          <li><strong>Prioritize Your Privacy:</strong> We believe your photos belong to you. Photo selection and processing happen directly on your device using secure Android system interfaces. We never store your personal photos on external servers or train AI models on your private images.</li>
        </ul>

        <h2>Our Core Values</h2>
        <ul>
          <li>💡 <strong>Simplicity:</strong> High-end AI art generation made accessible through a clean, intuitive mobile experience.</li>
          <li>🛡️ <strong>Privacy &amp; Trust:</strong> Transparent data handling, end-to-end encryption in transit, and complete respect for user media.</li>
          <li>🤝 <strong>Community-Driven:</strong> Built for creators, supporting creative collaboration and rewarding top talent.</li>
        </ul>

        <h2>Developer Information</h2>
        <ul>
          <li><strong>Developer:</strong> Dhruv Sutariya</li>
          <li><strong>Application:</strong> Promptoo</li>
          <li><strong>Email Support:</strong> <a href="mailto:support.promptoo@gmail.com">support.promptoo@gmail.com</a></li>
          <li><strong>Platform:</strong> Android (Available on Google Play Store)</li>
        </ul>
      </div>
    </section>
  )
}

const privacyLinks = [
  ['Supabase', 'Secure user authentication, database management, and cloud storage of public templates.', 'https://supabase.com/privacy'],
  ['Google Play Services & Google Sign-In', 'OAuth authentication and app distribution.', 'https://policies.google.com/privacy'],
  ['Google AdMob', "Used to display advertisements supporting our free service. AdMob may collect and process device advertising identifiers (GAID) according to Google's Advertising Policies.", 'https://policies.google.com/technologies/ads'],
  ['Firebase Cloud Messaging (Google)', 'Used for push notification delivery.', 'https://firebase.google.com/support/privacy'],
  ['OpenAI (ChatGPT)', "Promptoo acts as a launchpad that sends your prompt and selected photo(s) to the official ChatGPT app on your device. Once inside ChatGPT, usage is governed by OpenAI's Terms and Privacy Policy.", 'https://openai.com/policies/privacy-policy']
]

function Privacy() {
  return (
    <section className="content-section policy-page">
      <div className="policy-header">
        <span className="policy-label">LEGAL &amp; TRANSPARENCY</span>
        <h1>Privacy Policy - Promptoo</h1>
        <p className="policy-date">Last Updated: October 29, 2026</p>
      </div>

      <div className="policy-body">
        <p>Welcome to Promptoo ("we," "our," or "us"). Promptoo is designed to help users discover trending AI photography styles and curated templates to generate creative artwork with external AI platforms like ChatGPT.</p>
        <p>We value your trust and are committed to protecting your privacy. This Privacy Policy explains what information we collect, how it is used, and how your data is protected when you use the Promptoo mobile application.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect only the minimum information necessary to provide and improve our services:</p>
        <h3>a. Account Information</h3>
        <p>When you create an account or sign in using email/password or Google Sign-In (OAuth), we collect:</p>
        <ul>
          <li>Your email address</li>
          <li>Your chosen display name and optional profile avatar image</li>
          <li>User identification token generated securely by our authentication provider (Supabase)</li>
        </ul>

        <h3>b. Photos and Creative Content</h3>
        <ul>
          <li><strong>Photos You Select:</strong> Photos you select or capture within Promptoo are processed directly on your device. When you tap "Create," Promptoo shares the photo(s) and template prompt with the official ChatGPT app installed on your device via secure Android system sharing (FileProvider).</li>
          <li>We do not upload your personal photos to private cloud servers, we do not sell your photos, and we do not train generative AI models on your personal images.</li>
        </ul>

        <h3>c. Creator Rewards &amp; Payout Information (Optional)</h3>
        <p>If you participate in our community Creator Rewards program and request a prize withdrawal from your Reward Wallet, we collect:</p>
        <ul>
          <li>Bank account details (Account number, Account holder name, IFSC code / routing code) solely for the purpose of processing bank payouts. This information is strictly encrypted and used only for financial disbursement.</li>
        </ul>

        <h3>d. Automatically Collected Information &amp; Device Data</h3>
        <ul>
          <li><strong>Analytics &amp; Performance:</strong> General app performance metrics, crash logs, and app lifecycle state to ensure reliability and bug fixes.</li>
          <li><strong>Push Notification Token:</strong> Anonymous Firebase Cloud Messaging (FCM) device registration tokens to deliver optional notifications about trending templates, creator announcements, and system alerts.</li>
        </ul>

        <h2>2. Third-Party Services We Use</h2>
        <p>Promptoo integrates with reputable third-party services that process data in accordance with their respective privacy policies:</p>
        <ul>
          {privacyLinks.map(s => (
            <li key={s[0]}>{s[0]}: {s[1]} Privacy Policy: <a href={s[2]} target="_blank" rel="noreferrer">{s[2]}</a></li>
          ))}
        </ul>

        <h2>3. Data Security and Encryption</h2>
        <p>All communications between the Promptoo app and our backend servers (Supabase, Firebase, Google APIs) are strictly encrypted in transit using industry-standard HTTPS / TLS encryption. We implement robust access controls and security best practices to protect your data against unauthorized access, loss, or misuse.</p>

        <h2>4. Data Retention and Account Deletion</h2>
        <ul>
          <li><strong>Retention:</strong> We retain account information and saved preferences only for as long as your account remains active.</li>
          <li><strong>Account Deletion:</strong> You can delete your account and all associated data at any time directly within the Promptoo app:
            <ol>
              <li>Open Promptoo and go to Profile.</li>
              <li>Tap Settings.</li>
              <li>Select Delete Account and confirm.</li>
            </ol>
          </li>
          <li><strong>Manual Deletion Request:</strong> You may also request complete deletion of your account and data by sending an email to our support team at <a href="mailto:support.promptoo@gmail.com">support.promptoo@gmail.com</a>. Requests are processed within 7 business days.</li>
        </ul>

        <h2>5. Children's Privacy</h2>
        <p>Promptoo does not knowingly collect personally identifiable information from children under the age of 13 (or under 16 where applicable by law). If you believe that a child has provided us with personal information, please contact us immediately so we can remove the data.</p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically for any updates.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
        <ul>
          <li><strong>Developer:</strong> Dhruv Sutariya</li>
          <li><strong>Email:</strong> <a href="mailto:support.promptoo@gmail.com">support.promptoo@gmail.com</a></li>
          <li><strong>App Name:</strong> Promptoo</li>
        </ul>
      </div>
    </section>
  )
}

function Terms() {
  return (
    <section className="content-section policy-page">
      <div className="policy-header">
        <span className="policy-label">LEGAL &amp; TRANSPARENCY</span>
        <h1>Terms of Service for Promptoo</h1>
        <p className="policy-date">Last Updated: October 29, 2026</p>
      </div>

      <div className="policy-body">
        <p>Please read these Terms of Service ("Terms") carefully before using the Promptoo mobile application (the "App") operated by Dhruv Sutariya ("we," "us," or "our").</p>
        <p>By downloading, installing, accessing, or using Promptoo, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.</p>

        <h2>1. Eligibility</h2>
        <p>You must be at least 13 years old (or the minimum legal age required in your country) to use Promptoo. By using the App, you represent and warrant that you meet this age requirement.</p>

        <h2>2. Description of the Service</h2>
        <ul>
          <li>Promptoo provides curated AI photography styles, text prompt formulas, and community templates designed for high-quality image generation.</li>
          <li><strong>Third-Party Integration (ChatGPT):</strong> Promptoo acts as a discovery and bridging tool that sends your selected prompt and photos to the official OpenAI ChatGPT app via standard Android system sharing.</li>
          <li><strong>Disclaimer:</strong> Promptoo is an independent application and is not endorsed by, directly affiliated with, maintained, or sponsored by OpenAI. You are responsible for complying with OpenAI's terms of service when using ChatGPT.</li>
        </ul>

        <h2>3. Your Photos &amp; Content Ownership</h2>
        <ul>
          <li><strong>Your Photos:</strong> You retain full ownership and copyright of all photos you select, upload, or process through Promptoo.</li>
          <li><strong>Your Responsibility:</strong> You warrant that you hold all necessary rights, licenses, and permissions to any photo you use with the App, and that your photos do not infringe upon any third-party privacy or intellectual property rights.</li>
          <li><strong>Generated AI Art:</strong> Promptoo claims no ownership or copyright over the images generated in your external ChatGPT account. Those images belong to you in accordance with OpenAI's content policies.</li>
          <li><strong>Privacy:</strong> We do not sell your personal photos, nor do we store them on external servers or train AI models on your private images.</li>
        </ul>

        <h2>4. Community Template Submissions &amp; Creator Rewards</h2>
        <ul>
          <li><strong>Submissions:</strong> Users who submit templates to the Promptoo community grant us a worldwide, non-exclusive, royalty-free license to host, display, and distribute the approved prompt and template style publicly within the App.</li>
          <li><strong>Creator Rewards:</strong> Community creators may be eligible for leaderboard prizes and reward wallet disbursements based on template popularity.</li>
          <li><strong>Payout Rules:</strong> Payout withdrawals are processed via standard bank transfer upon meeting the minimum withdrawal threshold. Any form of fraudulent activity, bot voting, or manipulation of leaderboard rankings will result in immediate disqualification and forfeiture of reward balances.</li>
        </ul>

        <h2>5. Prohibited Conduct</h2>
        <p>When using Promptoo, you agree not to:</p>
        <ul>
          <li>Process, upload, or share any photos containing explicit sexual content, extreme violence, hate speech, harassment, or illegal material.</li>
          <li>Impersonate any person or entity without their explicit written consent.</li>
          <li>Attempt to reverse-engineer, decompile, modify, or disrupt the App's software, APIs, or database.</li>
          <li>Exploit the App or its reward programs through automated scripts, bots, or unauthorized multiple accounts.</li>
        </ul>

        <h2>6. Advertisements (AdMob)</h2>
        <p>Promptoo is supported by advertisements provided by Google AdMob. By using the App, you acknowledge and agree that ads may be displayed throughout the browsing and creation experience. Ad content is delivered in compliance with Google AdMob policies.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>Promptoo is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.</p>
        <p>While we test and curate our templates for optimal likeness and artistic appeal, we do not guarantee that third-party AI models (like ChatGPT) will generate specific, flawless, or identical results on every attempt.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, the developer of Promptoo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the App, including any external output produced by third-party AI services.</p>

        <h2>9. Account Suspension &amp; Termination</h2>
        <p>We reserve the right to suspend or terminate your account or access to Promptoo at our sole discretion, without prior notice, for conduct that violates these Terms or harms other users or the platform.</p>

        <h2>10. Changes to These Terms</h2>
        <p>We reserve the right to modify these Terms at any time. When changes are made, we will update the "Last Updated" date at the top of this page. Your continued use of Promptoo after any modifications signifies your acceptance of the updated Terms.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions or concerns regarding these Terms of Service, please contact us at:</p>
        <ul>
          <li><strong>Developer:</strong> Dhruv Sutariya</li>
          <li><strong>Email:</strong> <a href="mailto:support.promptoo@gmail.com">support.promptoo@gmail.com</a></li>
          <li><strong>App Name:</strong> Promptoo</li>
        </ul>
      </div>
    </section>
  )
}

export default function App() {
  const getPage = () => location.hash.slice(1).split('&')[0] || 'home'
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const h = () => setPage(getPage())
    addEventListener('hashchange', h)
    return () => removeEventListener('hashchange', h)
  }, [])

  const navigate = (next, anchor) => {
    location.hash = next + (anchor ? '&' + anchor : '')
    setPage(next)
    setTimeout(() => anchor && document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <div className="site-wrapper">
      <Header page={page} navigate={navigate} />
      {page === 'privacy' ? <Privacy /> : page === 'terms' ? <Terms /> : page === 'about' ? <About /> : <Home navigate={navigate} />}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Promptoo. All rights reserved.</p>
      </footer>
    </div>
  )
}
