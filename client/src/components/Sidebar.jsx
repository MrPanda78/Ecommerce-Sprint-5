import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDolly, faGear, faLayerGroup, faPlus, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export function Sidebar({ currentView, onNavigate, isOpen, setShowModal, onClose }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickNavigation = (path) => {
        if (location.pathname !== path) {
            navigate(path);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 bg-black/50 z-30 transition-opacity lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
            <aside className={`fixed left-0 top-0 h-full w-[260px] bg-surface-container-low border-r border-white/10 flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center gap-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-headline-md text-2xl font-bold text-primary tracking-tight">Fooddy Shop</h1>
                        <p className="text-on-surface-variant text-label-caps font-semibold uppercase tracking-wider text-[10px] mt-0.5">Admin Dashboard</p>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                    <button onClick={() => { onNavigate('dashboard'); onClose(); handleClickNavigation("/") }} className={`flex cursor-pointer transition-all duration-300 items-center gap-3 px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'dashboard' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}>
                        <FontAwesomeIcon icon={faMicrosoft} size="lg" />
                        <span>Inicio</span>
                    </button>

                    <button onClick={() => { onNavigate('products'); onClose(); handleClickNavigation("/products") }} className={`flex cursor-pointer transition-all duration-300 items-center gap-3 px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'products' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}>
                        <FontAwesomeIcon icon={faDolly} size="lg" />
                        <span>Productos</span>
                    </button>

                    <button onClick={() => { onNavigate('categories'); onClose(); handleClickNavigation("/categories") }} className={`flex cursor-pointer transition-all duration-300 items-center gap-3 px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'categories' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}>
                        <FontAwesomeIcon icon={faLayerGroup} size="lg" />
                        <span>Categorías</span>
                    </button>
                </nav>

                <div className="p-4 mt-auto border-t border-white/5 flex flex-col gap-4">
                    <button onClick={() => setShowModal(true)} className="w-full cursor-pointer bg-primary-container text-gray-200 text-[0.84rem] py-2 px-2 rounded-lg font-bold hover:opacity-80 flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-300">
                        <span className="material-symbols-outlined">
                            <FontAwesomeIcon icon={faPlus} size="lg" />
                        </span>
                        Agregar Producto/Categoría
                    </button>

                    <div className="flex flex-col gap-1">
                        <a className="flex transition-all duration-300 items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-white/5 transition-colors cursor-pointer text-sm font-medium">
                            <span className="material-symbols-outlined">
                                <FontAwesomeIcon icon={faGear} size="lg" />
                            </span>
                            <span>Configuración</span>
                        </a>

                        <a className="flex transition-all duration-300 items-center gap-3 px-4 py-2 rounded-lg text-error hover:text-error hover:bg-error/10 transition-colors cursor-pointer text-sm font-medium">
                            <span className="material-symbols-outlined">
                                <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                            </span>
                            <span>Cerrar Sesión</span>
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}