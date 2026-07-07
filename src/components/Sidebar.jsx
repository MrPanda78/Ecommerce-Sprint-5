import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDolly, faGear, faLayerGroup, faPlus, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export function Sidebar({ currentView, onNavigate, isOpen, onClose })
{
    const [productosExpanded, setProductosExpanded] = useState(false);
    const [categoriasExpanded, setCategoriasExpanded] = useState(false);
    const [usuariosExpanded, setUsuariosExpanded] = useState(false);

    return (
        <>
            <div className={`fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
            <aside className={`fixed left-0 top-0 h-full w-[260px] bg-surface-container-low border-r border-white/10 flex flex-col z-40 transition-transform duration-300 md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center gap-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            <FontAwesomeIcon className="w-2 h-2" icon={faCartShopping} />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-headline-md text-2xl font-bold text-primary tracking-tight">Fooddy Shop</h1>
                        <p className="text-on-surface-variant text-label-caps font-semibold uppercase tracking-wider text-[10px] mt-0.5">Admin Dashboard</p>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                    <button onClick={() => { onNavigate('dashboard'); onClose(); }} className={`flex cursor-pointer items-center gap-3 px-4 py-2 rounded-lg font-bold transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'dashboard' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:bg-white/5'}`}>
                        <FontAwesomeIcon icon={faMicrosoft} size="lg" />
                        <span>Inicio</span>
                    </button>

                    <div className="flex flex-col">
                        <button onClick={() => { if (currentView !== 'products') { onNavigate('products'); onClose(); } else { setProductosExpanded(!productosExpanded); } }} className={`flex cursor-pointer items-center justify-between px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'products' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faDolly} size="lg" />
                                <span>Productos</span>
                            </div>
                            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${productosExpanded ? 'rotate-90' : ''}`}></span>
                        </button>

                        <div className={`${productosExpanded ? 'flex' : 'hidden'} flex-col pl-[44px] pr-4 py-2 gap-2 border-l border-white/10 ml-6 mt-1`}>
                            <a className="text-primary font-medium transition-colors py-1 text-sm cursor-pointer" onClick={() => { onNavigate('products'); onClose(); }}>
                                Lista
                            </a>
                            <a className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm cursor-pointer">
                                Detalles
                            </a>
                            <a className="text-on-surface-variant hover:text-primary transition-colors py-1 text-sm cursor-pointer">
                                Registrar
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <button onClick={() => { if (currentView !== 'categories') { onNavigate('categories'); onClose(); } else { setCategoriasExpanded(!categoriasExpanded); }}} className={`flex cursor-pointer items-center justify-between px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${ currentView === 'categories' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5' }`}>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faLayerGroup} size="lg" />
                                <span>Categorías</span>
                            </div>
                            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${categoriasExpanded ? 'rotate-90' : ''}`}></span>
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <button onClick={() => { if (currentView !== 'users') { onNavigate('users'); onClose(); } else { setUsuariosExpanded(!usuariosExpanded); }}} className={`flex cursor-pointer items-center justify-between px-4 py-3 rounded-lg transition-all active:scale-[0.98] duration-150 w-full text-left ${currentView === 'users' ? 'text-primary bg-primary/10 font-bold' : 'text-on-surface-variant hover:bg-white/5'}`}>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                                <span>Usuarios</span>
                            </div>
                            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${usuariosExpanded ? 'rotate-90' : ''}`}></span>
                        </button>
                    </div>
                </nav>

                <div className="p-4 mt-auto border-t border-white/5 flex flex-col gap-4">
                    <button className="w-full cursor-pointer bg-primary-container text-gray-200 text-sm py-2 px-4 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 active:scale-[0.98]">
                        <span className="material-symbols-outlined">
                            <FontAwesomeIcon icon={faPlus} size="lg" />
                        </span>
                        Agregar Producto
                    </button>

                    <div className="flex flex-col gap-1">
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-on-surface-variant hover:bg-white/5 transition-colors cursor-pointer text-sm font-medium">
                            <span className="material-symbols-outlined">
                                <FontAwesomeIcon icon={faGear} size="lg" />
                            </span>
                            <span>Configuración</span>
                        </a>

                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-error hover:text-error hover:bg-error/10 transition-colors cursor-pointer text-sm font-medium">
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