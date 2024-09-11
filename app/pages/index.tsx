import React from 'react';

const HomePage = () => {
  const sendTestEmail = async () => {
    const response = await fetch('/api/test-email', {
      method: 'POST',
    });
    const data = await response.json();
    alert(data.message || data.error);
  };

  return (
    <div>
      <h1>Welcome to Your App</h1>
      <button onClick={sendTestEmail}>Send Test Email</button>
    </div>
  );
};

export default HomePage;
