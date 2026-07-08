import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState('dashboard');

    return (
        <div className="flex h-screen overflow-hidden w-full bg-background relative">
            <Sidebar currentView={currentView} onNavigate={setCurrentView} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            
            <div className="flex-1 flex flex-col lg:ml-[260px] h-screen overflow-hidden relative w-full">
                <Header currentView={currentView} onNavigate={setCurrentView} title={"Fooddy Shop"} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                
                <main className="flex-1 overflow-y-auto pt-20 px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto scroll-smooth">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}