import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Categories</li>
          <li>Products</li>
          <li>Orders</li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Your content and components for the dashboard go here */}
      </main>
    </div>
  );
};

export default AdminDashboard;