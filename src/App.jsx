import { useState } from "react";
import "./App.css";

const roles = [
  { id: "patient", name: "Patient", icon: "🧑‍🤝‍🧑" },
  { id: "doctor", name: "Doctor", icon: "🩺" },
  { id: "asha", name: "ASHA Worker", icon: "👩‍⚕️" },
  { id: "admin", name: "Admin", icon: "🛡️" },
];

function App() {
  const [screen, setScreen] = useState("home");
  const [role, setRole] = useState("patient");

  const login = (selectedRole) => {
    setRole(selectedRole);
    setScreen("dashboard");
  };

  if (screen === "login") {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">🏥</div>
          <h1>SwasthyaSetu</h1>
          <p>Bridging the Gap to Better Healthcare</p>

          <h2>Login</h2>
          <p>Select your role</p>

          <div className="role-grid">
            {roles.map((r) => (
              <button
                key={r.id}
                className={`role-card ${role === r.id ? "selected" : ""}`}
                onClick={() => setRole(r.id)}
              >
                <span>{r.icon}</span>
                <strong>{r.name}</strong>
              </button>
            ))}
          </div>

          <button className="primary-btn" onClick={() => login(role)}>
            Login as {roles.find((r) => r.id === role)?.name}
          </button>

          <button className="back-btn" onClick={() => setScreen("home")}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (screen === "dashboard") {
    return (
      <Dashboard
        role={role}
        onLogout={() => setScreen("home")}
      />
    );
  }

  return <Home onLogin={() => setScreen("login")} />;
}

function Home({ onLogin }) {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="brand">
          <span>🏥</span>
          <strong>SwasthyaSetu</strong>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <button className="login-btn" onClick={onLogin}>
          Login
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">HEALTHCARE WITHIN REACH</span>

          <h1>
            Bridging the Gap to
            <span> Better Healthcare</span>
          </h1>

          <p>
            SwasthyaSetu connects rural and underserved communities
            with doctors, hospitals, ASHA workers and essential healthcare
            services.
          </p>

          <button className="primary-btn" onClick={onLogin}>
            Get Started →
          </button>
        </div>

        <div className="hero-visual">
          <div className="health-orb">🏥</div>
          <div className="floating-card card-one">🩺 Doctors</div>
          <div className="floating-card card-two">👩‍⚕️ ASHA Workers</div>
          <div className="floating-card card-three">🚨 Emergency</div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Healthcare Services</h2>
        <p>Everything you need, connected in one platform.</p>

        <div className="service-grid">
          <Service icon="🏥" title="Nearby Hospitals" />
          <Service icon="🩺" title="Find Doctors" />
          <Service icon="📅" title="Appointments" />
          <Service icon="👩‍⚕️" title="ASHA Workers" />
          <Service icon="💊" title="Medical Stores" />
          <Service icon="🤖" title="AI Assistant" />
        </div>
      </section>

      <section className="about" id="about">
        <h2>One Platform. Better Healthcare.</h2>
        <p>
          Connecting patients, doctors, ASHA workers and administrators
          to improve accessibility and quality of public healthcare.
        </p>
      </section>

      <footer>
        <strong>SwasthyaSetu</strong> — Bridging the Gap to Better Healthcare
      </footer>
    </div>
  );
}

function Service({ icon, title }) {
  return (
    <div className="service-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>Accessible healthcare services for everyone.</p>
    </div>
  );
}

function Dashboard({ role, onLogout }) {
  const data = {
    patient: {
      title: "Patient Dashboard",
      icon: "🧑‍🤝‍🧑",
      color: "Patient Care",
      menu: [
        "Dashboard",
        "Hospitals",
        "Doctors",
        "Appointments",
        "Medical History",
        "Prescriptions",
        "Reminders",
        "ASHA Workers",
        "Medical Stores",
        "Emergency",
      ],
    },

    doctor: {
      title: "Doctor Dashboard",
      icon: "🩺",
      color: "Medical Professional",
      menu: [
        "Dashboard",
        "Appointments",
        "Patients",
        "Patient History",
        "Prescriptions",
        "Referrals",
        "Availability",
      ],
    },

    asha: {
      title: "ASHA Worker Dashboard",
      icon: "👩‍⚕️",
      color: "Community Healthcare",
      menu: [
        "Dashboard",
        "My Patients",
        "Patient Visits",
        "Health Records",
        "Appointments",
        "Medicine Support",
        "Emergency Cases",
        "Health Campaigns",
      ],
    },

    admin: {
      title: "Admin Dashboard",
      icon: "🛡️",
      color: "System Administration",
      menu: [
        "Dashboard",
        "Users",
        "Doctors",
        "ASHA Workers",
        "Hospitals",
        "Appointments",
        "Reports",
        "Reviews",
        "System Settings",
      ],
    },
  };

  const current = data[role];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="side-brand">
          <span>🏥</span>
          <strong>SwasthyaSetu</strong>
        </div>

        <div className="role-badge">
          {current.icon} {current.color}
        </div>

        <div className="side-menu">
          {current.menu.map((item, index) => (
            <button
              key={item}
              className={index === 0 ? "active-menu" : ""}
            >
              <span>{menuIcon(item)}</span>
              {item}
            </button>
          ))}
        </div>

        <button className="logout-btn" onClick={onLogout}>
          ↪ Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <span className="small-label">SWASTHYASETU</span>
            <h1>{current.title}</h1>
          </div>

          <div className="profile">
            <span>{current.icon}</span>
            <div>
              <strong>{capitalize(role)}</strong>
              <small>Online</small>
            </div>
          </div>
        </header>

        <section className="welcome-card">
          <div>
            <span className="hero-tag">WELCOME BACK</span>
            <h2>
              {current.icon} Welcome to your {capitalize(role)} portal
            </h2>
            <p>
              Manage healthcare services, records and community
              support from one place.
            </p>
          </div>
          <div className="dashboard-icon">{current.icon}</div>
        </section>

        <div className="stats-grid">
          <Stat number="24" label={role === "patient" ? "Appointments" : "Today's Tasks"} />
          <Stat number="12" label={role === "doctor" ? "Patients" : "Active Cases"} />
          <Stat number="08" label="Notifications" />
          <Stat number="96%" label="Service Status" />
        </div>

        <section className="dashboard-panel">
          <h2>Quick Access</h2>

          <div className="quick-grid">
            {current.menu.slice(1, 7).map((item) => (
              <div className="quick-card" key={item}>
                <span>{menuIcon(item)}</span>
                <strong>{item}</strong>
                <p>Open {item}</p>
              </div>
            ))}
          </div>
        </section>

        {role === "asha" && (
          <section className="dashboard-panel">
            <h2>ASHA Worker Responsibilities</h2>
            <div className="info-grid">
              <Info icon="👥" title="Community Patients" text="Monitor registered patients." />
              <Info icon="🏠" title="Home Visits" text="Track scheduled health visits." />
              <Info icon="💊" title="Medicine Support" text="Help patients access medicines." />
              <Info icon="🚨" title="Emergency" text="Escalate critical health cases." />
            </div>
          </section>
        )}

        {role === "admin" && (
          <section className="dashboard-panel">
            <h2>Administration Overview</h2>
            <div className="info-grid">
              <Info icon="👥" title="User Management" text="Manage patients and healthcare workers." />
              <Info icon="🏥" title="Hospital Management" text="Manage registered hospitals." />
              <Info icon="📊" title="Reports" text="View healthcare platform analytics." />
              <Info icon="⚙️" title="System Control" text="Manage platform settings." />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat-card">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="info-card">
      <span>{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function menuIcon(item) {
  const icons = {
    Dashboard: "⌂",
    Hospitals: "🏥",
    Doctors: "🩺",
    Appointments: "📅",
    "Medical History": "📋",
    Prescriptions: "💊",
    Reminders: "🔔",
    "ASHA Workers": "👩‍⚕️",
    "Medical Stores": "💊",
    Emergency: "🚨",
    Patients: "👥",
    "Patient History": "📋",
    Referrals: "↗",
    Availability: "🕐",
    "My Patients": "👥",
    "Patient Visits": "🏠",
    "Health Records": "📋",
    "Medicine Support": "💊",
    "Emergency Cases": "🚨",
    "Health Campaigns": "📢",
    Users: "👥",
    Reports: "📊",
    Reviews: "⭐",
    "System Settings": "⚙️",
  };

  return icons[item] || "•";
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default App;