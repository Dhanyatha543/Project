import React, { useState } from 'react';
import UseEffectDemo from './useEffectDemo/UseEffectDemo';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [employees] = useState([
    { id: 1, name: 'John', role: 'Manager' },
    { id: 2, name: 'Sara', role: 'Developer' },
    { id: 3, name: 'David', role: 'Designer' }
  ]);
  const [students] = useState([
    { id: 1, name: 'Rahul', role: 'Student' },
    { id: 2, name: 'Priya', role: 'Student' },
    { id: 3, name: 'Aman', role: 'Student' }
  ]);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">{activeTab === 'Home' ? 'Welcome Ashok' : activeTab}</h1>
          <div className="user-icon">👤</div>
        </div>
      </header>

      {/* Main Container */}
      <div className="main-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <div 
              className={activeTab === 'Home' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('Home')}
            >
              🏠 Home
            </div>
            <div 
              className={activeTab === 'Profile' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('Profile')}
            >
              👤 Profile
            </div>
            <div 
              className={activeTab === 'Students' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('Students')}
            >
              🎓 Students
            </div>
            <div 
              className={activeTab === 'Employees' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('Employees')}
            >
              👥 Employees
            </div>
            <div 
              className={activeTab === 'Settings' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('Settings')}
            >
              ⚙️ Settings
            </div>
            <div 
              className={activeTab === 'useEffect' ? 'nav-item-active' : 'nav-item'}
              onClick={() => setActiveTab('useEffect')}
            >
              🧠 useEffect Demo
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {activeTab === 'Home' && (
            <div className="content-section">
              <h2 className="content-title">Welcome to Dashboard</h2>
              <p className="content-text">This is the main content area.</p>
            </div>
          )}
          {activeTab === 'Profile' && (
            <div className="content-section">
              <h2 className="content-title">My Profile</h2>
              <p className="content-text">Profile information goes here.</p>
            </div>
          )}
          {activeTab === 'Students' && (
            <div className="content-section">
              <h2 className="content-title">Students List</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th className="th">ID</th>
                    <th className="th">Name</th>
                    <th className="th">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((std) => (
                    <tr key={std.id} className="table-row">
                      <td className="td">{std.id}</td>
                      <td className="td">{std.name}</td>
                      <td className="td">{std.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'Employees' && (
            <div className="content-section">
              <h2 className="content-title">Employees List</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th className="th">ID</th>
                    <th className="th">Name</th>
                    <th className="th">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id} className="table-row">
                      <td className="td">{emp.id}</td>
                      <td className="td">{emp.name}</td>
                      <td className="td">{emp.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'Settings' && (
            <div className="content-section">
              <h2 className="content-title">Settings</h2>
              <p className="content-text">Settings configuration goes here.</p>
            </div>
          )}

          {activeTab === 'useEffect' && (
            <div className="content-section">
              <UseEffectDemo />
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 My Application</p>
      </footer>
    </div>
  );
};

export default App;
