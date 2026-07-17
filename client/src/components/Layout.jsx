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
    const [typeModal, setTypeModal] = useState("");
    const [titleModal, setTitleModal] = useState("");
    const [descriptionModal, setDescriptionModal] = useState("");
    const [productModal, setProductModal] = useState(null);

    return (
        <div className="flex h-screen overflow-hidden w-full bg-background relative">
            <Sidebar currentView={currentView} onNavigate={setCurrentView} isOpen={isSidebarOpen} setShowModal={setShowModal} setTypeModal={setTypeModal} setTitleModal={setTitleModal} setDescriptionModal={setDescriptionModal} onClose={() => setIsSidebarOpen(false)} />
            
            <div className="flex-1 flex flex-col lg:ml-[260px] h-screen overflow-hidden relative w-full">
                <Header currentView={currentView} onNavigate={setCurrentView} title={"Fooddy Shop"} onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                
                <main className="flex-1 overflow-y-auto pt-20 px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto scroll-smooth">
                    <Outlet context={{ setShowModal, setTypeModal, setTitleModal, setDescriptionModal, setProductModal }} />
                </main>
            </div>

            { showModal && ReactDOM.createPortal(
                <Modal title={titleModal} description={descriptionModal} type={typeModal} product={productModal} onClose={() => setShowModal(false)} />, document.body)
            }

        </div>
    );
}