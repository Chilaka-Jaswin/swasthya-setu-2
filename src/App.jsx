import { useState } from "react";
import "./App.css";

const menuPatient = [
  ["Dashboard", "⌂"],
  ["Hospitals", "🏥"],
  ["Doctors", "🩺"],
  ["Appointments", "📅"],
  ["Medical History", "📋"],
  ["Prescriptions", "💊"],
  ["Reminders", "🔔"],
  ["ASHA Workers", "🤝"],
  ["Medical Stores", "💊"],
  ["Emergency", "🚨"],
];

const menuDoctor = [
  ["Dashboard", "⌂"],
  ["Appointments", "📅"],
  ["Patients", "👥"],
  ["Patient History", "📋"],
  ["Prescriptions", "💊"],
  ["Referrals", "↗"],
  ["Availability", "🕐"],
];

function App() {
  const [screen, setScreen] = useState("home");
  const [role, setRole] = useState("patient");
  const [active, setActive] = useState("Dashboard");
  const [language, setLanguage] = useState("English");

  const login = (selectedRole) => {
    setRole(selectedRole);
    setActive("Dashboard");
    setScreen("dashboard");
  };

  if (screen === "login") {
    return (
      <Login
        onLogin={login}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "dashboard") {
    return (
      <Dashboard
        role={role}
        active={active}
        setActive={setActive}
        language={language}
        setLanguage={setLanguage}
        onLogout={() => setScreen("home")}
      />
    );
  }

  return <Home onLogin={() => setScreen("login")} />;
}


/* ================= HOME ================= */

function Home({ onLogin }) {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">✚</div>
          <div>
            <strong>SwasthyaSetu</strong>
            <small>Bridging the Gap to Better Healthcare</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="login-top" onClick={onLogin}>
          Login →
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <div className="badge">
            ● HEALTHCARE WITHIN REACH
          </div>

          <h1>
            Bridging the Gap to
            <span> Better Healthcare</span>
          </h1>

          <p>
            Connecting rural and underserved communities with doctors,
            hospitals, medicines, diagnostics and continuous healthcare —
            all through one simple platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onLogin}>
              Get Started →
            </button>

            <button className="outline-btn" onClick={onLogin}>
              Book Appointment
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24/7</strong>
              <span>Healthcare Support</span>
            </div>
            <div>
              <strong>6+</strong>
              <span>Languages</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Connected Care</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="health-card main-health-card">
            <div className="health-card-top">
              <div className="doctor-avatar">🩺</div>
              <div>
                <small>CONNECTED CARE</small>
                <h3>Your Health Journey</h3>
              </div>
            </div>

            <div className="health-line">
              <div className="line-dot active">✓</div>
              <div>
                <strong>Find Healthcare</strong>
                <small>Nearby facilities</small>
              </div>
            </div>

            <div className="health-line">
              <div className="line-dot active">✓</div>
              <div>
                <strong>Book Appointment</strong>
                <small>Choose your doctor</small>
              </div>
            </div>

            <div className="health-line">
              <div className="line-dot">→</div>
              <div>
                <strong>Continuous Care</strong>
                <small>Track your health</small>
              </div>
            </div>
          </div>

          <div className="floating-card emergency-card">
            🚨
            <div>
              <strong>Emergency</strong>
              <small>Help available</small>
            </div>
          </div>

          <div className="floating-card ai-card">
            🤖
            <div>
              <strong>AI Assistant</strong>
              <small>Always here to help</small>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Healthcare made simpler</h2>
          <p>
            Everything you need to access quality healthcare in one place.
          </p>
        </div>

        <div className="service-grid">
          <Service icon="🏥" title="Find Hospitals" text="Discover nearby hospitals and healthcare facilities." />
          <Service icon="🩺" title="Find Doctors" text="Connect with doctors based on your healthcare needs." />
          <Service icon="📅" title="Appointments" text="Book and manage appointments with ease." />
          <Service icon="💊" title="Medicines" text="Find nearby medical stores and prescriptions." />
          <Service icon="🤖" title="AI Assistant" text="Get friendly multilingual assistance anytime." />
          <Service icon="🚨" title="Emergency" text="Quick access to emergency healthcare support." />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-box">
          <div className="about-icon">🌍</div>

          <div>
            <span>ABOUT SWASTHYASETU</span>
            <h2>Healthcare should reach everyone.</h2>

            <p>
              SwasthyaSetu is designed to reduce the gap between rural
              communities and quality healthcare services.
            </p>

            <p>
              Our platform brings patients, doctors, hospitals, ASHA workers,
              diagnostics and pharmacies together in one connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span>READY TO GET STARTED?</span>
          <h2>Your health. One connected platform.</h2>
          <p>
            Access healthcare services whenever and wherever you need them.
          </p>
        </div>

        <button className="primary-btn" onClick={onLogin}>
          Enter SwasthyaSetu →
        </button>
      </section>

      <footer id="contact">
        <div>
          <strong>✚ SwasthyaSetu</strong>
          <p>Bridging the Gap to Better Healthcare</p>
        </div>

        <div>
          <p>📧 swasthyasetu@gmail.com</p>
          <p>📞 24/7 Healthcare Support</p>
        </div>
      </footer>
    </div>
  );
}


/* ================= LOGIN ================= */

function Login({ onLogin, onBack }) {
  const [selectedRole, setSelectedRole] = useState("patient");

  return (
    <div className="login-page">
      <div className="login-background"></div>

      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <div className="login-left">
        <div className="login-brand">
          <div className="brand-icon">✚</div>
          <strong>SwasthyaSetu</strong>
        </div>

        <div className="login-yeti">
          <div className="yeti-glow"></div>
          <div className="yeti">🏔️</div>
        </div>

        <h1>Healthcare<br /><span>within reach.</span></h1>

        <p>
          One platform connecting communities with the healthcare they need.
        </p>

        <div className="login-features">
          <div>✓ Multilingual healthcare</div>
          <div>✓ Nearby hospitals & doctors</div>
          <div>✓ AI-powered assistance</div>
        </div>
      </div>

      <div className="login-box">
        <div className="login-header">
          <span>WELCOME BACK</span>
          <h2>Sign in to SwasthyaSetu</h2>
          <p>Select your account type to continue.</p>
        </div>

        <div className="role-select">
          <button
            className={selectedRole === "patient" ? "role active" : "role"}
            onClick={() => setSelectedRole("patient")}
          >
            <span>👤</span>
            <div>
              <strong>Patient</strong>
              <small>Access healthcare</small>
            </div>
          </button>

          <button
            className={selectedRole === "doctor" ? "role active" : "role"}
            onClick={() => setSelectedRole("doctor")}
          >
            <span>👨‍⚕️</span>
            <div>
              <strong>Doctor</strong>
              <small>Manage patients</small>
            </div>
          </button>
        </div>

        <label>Mobile Number / Email</label>
        <input
          className="login-input"
          placeholder="Enter your mobile or email"
        />

        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
        />

        <div className="login-options">
          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>
          <button>Forgot password?</button>
        </div>

        <button
          className="login-submit"
          onClick={() => onLogin(selectedRole)}
        >
          Sign In →
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="guest-btn" onClick={() => onLogin(selectedRole)}>
          Continue as Demo User
        </button>

        <p className="login-footer">
          Don't have an account? <strong>Create one</strong>
        </p>
      </div>
    </div>
  );
}


/* ================= DASHBOARD ================= */

function Dashboard({
  role,
  active,
  setActive,
  language,
  setLanguage,
  onLogout,
}) {
  const menu = role === "patient" ? menuPatient : menuDoctor;

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">✚</div>
          <div>
            <strong>SwasthyaSetu</strong>
            <small>{role === "patient" ? "Patient Portal" : "Doctor Portal"}</small>
          </div>
        </div>

        <div className="menu-label">MAIN MENU</div>

        {menu.map(([item, icon]) => (
          <button
            key={item}
            className={active === item ? "side-item active" : "side-item"}
            onClick={() => setActive(item)}
          >
            <span>{icon}</span>
            {item}
          </button>
        ))}

        <div className="sidebar-ai">
          <div className="ai-symbol">🤖</div>
          <strong>AI Assistant</strong>
          <p>Need help navigating healthcare?</p>
          <button onClick={() => setActive("AI Assistant")}>
            Ask AI →
          </button>
        </div>

        <button className="logout-btn" onClick={onLogout}>
          ↪ Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="breadcrumb">SwasthyaSetu / {active}</span>
            <h2>{active}</h2>
          </div>

          <div className="header-actions">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>తెలుగు</option>
              <option>हिन्दी</option>
              <option>मराठी</option>
              <option>தமிழ்</option>
              <option>ಕನ್ನಡ</option>
            </select>

            <button className="notification">🔔</button>

            <div className="profile">
              <div className="profile-avatar">
                {role === "patient" ? "CM" : "DR"}
              </div>
              <div>
                <strong>
                  {role === "patient" ? "Chilaka Munda" : "Dr. Rahul"}
                </strong>
                <small>
                  {role === "patient" ? "Patient" : "General Physician"}
                </small>
              </div>
            </div>
          </div>
        </header>

        {active === "Dashboard" ? (
          <DashboardHome role={role} setActive={setActive} />
        ) : (
          <DashboardSection
            title={active}
            role={role}
          />
        )}
      </main>
    </div>
  );
}


/* ================= DASHBOARD HOME ================= */

function DashboardHome({ role, setActive }) {
  if (role === "doctor") {
    return (
      <div className="dashboard-content">
        <div className="welcome-banner doctor-banner">
          <div>
            <span>WELCOME BACK, DOCTOR 👋</span>
            <h1>Good morning, Dr. Rahul</h1>
            <p>
              You have a busy day ahead. Here's your healthcare overview.
            </p>
          </div>

          <div className="banner-icon">🩺</div>
        </div>

        <div className="stats-grid">
          <Stat number="24" label="Today's Appointments" icon="📅" />
          <Stat number="186" label="Total Patients" icon="👥" />
          <Stat number="12" label="Pending Requests" icon="⏳" />
          <Stat number="98%" label="Patient Satisfaction" icon="⭐" />
        </div>

        <div className="dashboard-columns">
          <div className="panel">
            <PanelTitle title="Today's Appointments" action="View All" />

            {[
              ["Rahul Kumar", "09:30 AM", "General Checkup", "👨"],
              ["Priya Sharma", "10:15 AM", "Follow-up", "👩"],
              ["Arjun Reddy", "11:00 AM", "Consultation", "👨"],
              ["Sita Devi", "12:30 PM", "Health Check", "👩"],
            ].map((a) => (
              <div className="appointment-row" key={a[0]}>
                <div className="patient-avatar">{a[3]}</div>
                <div>
                  <strong>{a[0]}</strong>
                  <small>{a[2]}</small>
                </div>
                <div className="appointment-time">
                  <strong>{a[1]}</strong>
                  <span>Confirmed</span>
                </div>
              </div>
            ))}
          </div>

          <div className="panel">
            <PanelTitle title="Quick Actions" />

            <div className="quick-grid">
              <Quick icon="👥" text="Patients" onClick={() => setActive("Patients")} />
              <Quick icon="💊" text="Prescription" onClick={() => setActive("Prescriptions")} />
              <Quick icon="📅" text="Appointments" onClick={() => setActive("Appointments")} />
              <Quick icon="↗" text="Referral" onClick={() => setActive("Referrals")} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content">
      <div className="welcome-banner">
        <div>
          <span>WELCOME BACK 👋</span>
          <h1>Good morning, Chilaka!</h1>
          <p>
            Your healthcare journey, connected in one place.
          </p>
        </div>

        <div className="banner-icon">🏥</div>
      </div>

      <div className="stats-grid">
        <Stat number="3" label="Upcoming Appointments" icon="📅" />
        <Stat number="5" label="Prescriptions" icon="💊" />
        <Stat number="8" label="Health Records" icon="📋" />
        <Stat number="2" label="Reminders" icon="🔔" />
      </div>

      <div className="dashboard-columns">
        <div className="panel">
          <PanelTitle title="Upcoming Appointment" />

          <div className="big-appointment">
            <div className="doctor-big">👨‍⚕️</div>

            <div>
              <span className="green-label">CONFIRMED</span>
              <h3>Dr. Rahul Kumar</h3>
              <p>General Physician</p>
              <strong>📅 Tomorrow • 10:30 AM</strong>
            </div>

            <button>View →</button>
          </div>
        </div>

        <div className="panel emergency-panel">
          <div className="emergency-symbol">🚨</div>
          <div>
            <span>EMERGENCY</span>
            <h3>Need urgent help?</h3>
            <p>Quickly find nearby emergency healthcare.</p>
          </div>
          <button onClick={() => setActive("Emergency")}>
            Get Help
          </button>
        </div>
      </div>

      <div className="panel">
        <PanelTitle title="Healthcare Services" />

        <div className="patient-service-grid">
          <DashboardService icon="🏥" title="Nearby Hospitals" />
          <DashboardService icon="🩺" title="Find a Doctor" />
          <DashboardService icon="🤝" title="ASHA Workers" />
          <DashboardService icon="💊" title="Medical Stores" />
          <DashboardService icon="🔬" title="Diagnostics" />
          <DashboardService icon="🤖" title="AI Assistant" />
        </div>
      </div>
    </div>
  );
}


/* ================= GENERIC DASHBOARD SECTIONS ================= */

function DashboardSection({ title, role }) {
  return (
    <div className="dashboard-content">
      <div className="section-hero">
        <div>
          <span>SWASTHYASETU</span>
          <h1>{title}</h1>
          <p>
            Manage your {title.toLowerCase()} through the connected
            healthcare platform.
          </p>
        </div>

        <div className="section-hero-icon">
          {getIcon(title)}
        </div>
      </div>

      <div className="content-card-grid">
        <div className="large-content-card">
          <div className="card-top-icon">{getIcon(title)}</div>
          <h2>{title}</h2>
          <p>
            This section is ready for integration with the SwasthyaSetu
            healthcare database and services.
          </p>

          <button className="primary-small">
            Explore {title} →
          </button>
        </div>

        <div className="info-card">
          <span>CONNECTED SERVICE</span>
          <h3>Smart Healthcare</h3>
          <p>
            Your healthcare information stays organized and accessible
            through one platform.
          </p>
        </div>

        <div className="info-card">
          <span>AI SUPPORT</span>
          <h3>🤖 AI Assistant</h3>
          <p>
            Get assistance with navigation, healthcare services and
            platform features.
          </p>
        </div>
      </div>

      <div className="panel">
        <PanelTitle title={`Recent ${title}`} />

        <div className="empty-state">
          <div>{getIcon(title)}</div>
          <h3>No new records</h3>
          <p>
            Your latest {title.toLowerCase()} information will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}


/* ================= COMPONENTS ================= */

function Service({ icon, title, text }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Explore →</span>
    </div>
  );
}

function Stat({ number, label, icon }) {
  return (
    <div className="stat-card">
      <div>
        <strong>{number}</strong>
        <span>{label}</span>
      </div>
      <div className="stat-icon">{icon}</div>
    </div>
  );
}

function PanelTitle({ title, action }) {
  return (
    <div className="panel-title">
      <div>
        <h3>{title}</h3>
        <p>Connected healthcare information</p>
      </div>

      {action && <button>{action} →</button>}
    </div>
  );
}

function Quick({ icon, text, onClick }) {
  return (
    <button className="quick-action" onClick={onClick}>
      <span>{icon}</span>
      {text}
    </button>
  );
}

function DashboardService({ icon, title }) {
  return (
    <div className="dashboard-service">
      <span>{icon}</span>
      <strong>{title}</strong>
      <small>View service →</small>
    </div>
  );
}

function getIcon(title) {
  const icons = {
    Hospitals: "🏥",
    Doctors: "🩺",
    Appointments: "📅",
    "Medical History": "📋",
    "Patient History": "📋",
    Prescriptions: "💊",
    Reminders: "🔔",
    "ASHA Workers": "🤝",
    "Medical Stores": "💊",
    Emergency: "🚨",
    Patients: "👥",
    Referrals: "↗",
    Availability: "🕐",
    "AI Assistant": "🤖",
  };

  return icons[title] || "🏥";
}

export default App;