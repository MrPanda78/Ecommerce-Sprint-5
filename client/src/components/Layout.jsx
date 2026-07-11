import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import Modal from './Modal';

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden w-full bg-background relative">
            <Sidebar currentView={currentView} onNavigate={setCurrentView} isOpen={isSidebarOpen} setShowModal={setShowModal} onClose={() => setIsSidebarOpen(false)} />
            
            <div className="flex-1 flex flex-col lg:ml-[260px] h-screen overflow-hidden relative w-full">
                <Header currentView={currentView} onNavigate={setCurrentView} title={"Fooddy Shop"} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                
                <main className="flex-1 overflow-y-auto pt-20 px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto scroll-smooth">
                    <Outlet />
                </main>
            </div>

            { showModal && ReactDOM.createPortal(
                <Modal type={"none"} title={"Agregar Producto/Categoría"} description={"Completa los datos para agregar un nuevo producto o crear una nueva categoría."} onClose={() => setShowModal(false)} />, document.body)
            }

        </div>
    );
}