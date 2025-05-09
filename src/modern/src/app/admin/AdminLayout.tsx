import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Outlet />
    </div>
  );
} 