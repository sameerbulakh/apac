import React from 'react';
import Header from './Header';

interface TeamMemberLayoutProps {
  children: React.ReactNode;
}

const TeamMemberLayout = ({ children }: TeamMemberLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default TeamMemberLayout;
