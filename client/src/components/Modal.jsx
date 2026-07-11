import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ type, title, description, onClose }) => {
    // --- Estados para el body ---
    const [addType, setAddType] = useState(''); // 'Product' | 'Category'
    const [showAddType, setShowAddType] = useState(false);
    const addTypeRef = useRef(null);

    const [productCategory, setProductCategory] = useState('');
    const [showProductCategory, setShowProductCategory] = useState(false);
    const productCategoryRef = useRef(null);

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productStock, setProductStock] = useState('');

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (addTypeRef.current && !addTypeRef.current.contains(e.target)) setShowAddType(false);
            if (productCategoryRef.current && !productCategoryRef.current.contains(e.target)) setShowProductCategory(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleClick = (e) => {
        if (!e.target.closest('.modal')) {
            onClose();
        }
    };

    return (
        <div className="relative z-50" onClick={handleClick}>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4">
                    <div className="modal w-full max-w-md">
                        <div className="relative bg-zinc-900 animate-fadeUp border border-zinc-800 rounded-2xl shadow-2xl overflow-visible">

                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent rounded-t-2xl"></div>

                            {/* Header */}
                            <div className="flex items-start justify-between p-5 border-b border-zinc-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </span>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-sm font-semibold">{title}</h5>
                                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{description}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="flex items-center justify-center w-7 h-7 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer shrink-0 ml-2"
                                >
                                    <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor">
                                        <path d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                <div className="space-y-3">

                                    {/* Row 1: Type selector */}
                                    <div className="relative" ref={addTypeRef}>
                                        <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Tipo</label>
                                        <button
                                            onClick={() => setShowAddType(prev => !prev)}
                                            className={`h-10 px-3 w-full bg-zinc-800 border ${showAddType ? 'border-zinc-600' : 'border-zinc-700 hover:border-zinc-600'} rounded-xl flex items-center justify-between gap-2 transition-all cursor-pointer`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                                                    <path d="M20 7H4C3.44772 7 3 7.44772 3 8V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V8C21 7.44772 20.5523 7 20 7Z" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M16 21V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V21" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <span className={`text-xs ${addType === '' ? 'text-zinc-500' : 'text-zinc-100'}`}>
                                                    {addType === '' ? 'Seleccionar tipo...' : addType === 'Product' ? 'Producto' : 'Categoría'}
                                                </span>
                                            </div>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`shrink-0 transition-transform ${showAddType ? 'rotate-180' : ''}`}>
                                                <path d="M6 9L12 15L18 9" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        {showAddType && (
                                            <div className="absolute z-20 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-xl shadow-custom overflow-hidden">
                                                <button
                                                    onClick={() => { setAddType('Product'); setShowAddType(false); }}
                                                    className="w-full px-3 py-2.5 text-left text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                                                >
                                                    Producto
                                                </button>
                                                <button
                                                    onClick={() => { setAddType('Category'); setShowAddType(false); }}
                                                    className="w-full px-3 py-2.5 text-left text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                                                >
                                                    Categoría
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Conditional: Product */}
                                    {addType === 'Product' && (
                                        <>
                                            {/* Row 2: Category dropdown + Product name */}
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="relative" ref={productCategoryRef}>
                                                    <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Categoría</label>
                                                    <button
                                                        onClick={() => setShowProductCategory(prev => !prev)}
                                                        className={`h-10 px-3 w-full bg-zinc-800 border ${showProductCategory ? 'border-zinc-600' : 'border-zinc-700 hover:border-zinc-600'} rounded-xl flex items-center justify-between gap-1.5 transition-all cursor-pointer`}
                                                    >
                                                        <span className={`text-xs truncate ${productCategory === '' ? 'text-zinc-500' : 'text-zinc-100'}`}>
                                                            {productCategory === '' ? 'Seleccionar...' : productCategory}
                                                        </span>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`shrink-0 transition-transform ${showProductCategory ? 'rotate-180' : ''}`}>
                                                            <path d="M6 9L12 15L18 9" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                    {showProductCategory && (
                                                        <div className="absolute z-20 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-xl shadow-custom overflow-hidden">
                                                            <button onClick={() => { setProductCategory('Bebidas'); setShowProductCategory(false); }} className="w-full px-3 py-2.5 text-left text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">Bebidas</button>
                                                            <button onClick={() => { setProductCategory('Electrónicos'); setShowProductCategory(false); }} className="w-full px-3 py-2.5 text-left text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">Electrónicos</button>
                                                            <button onClick={() => { setProductCategory('Comidas'); setShowProductCategory(false); }} className="w-full px-3 py-2.5 text-left text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer">Comidas</button>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="relative">
                                                    <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Nombre</label>
                                                    <div className="absolute left-3 h-10 flex items-center pointer-events-none">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                            <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Nombre del Producto"
                                                        value={productName}
                                                        onChange={(e) => setProductName(e.target.value)}
                                                        autoComplete="off"
                                                        className="w-full h-10 pl-8 pr-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            {/* Row 3: Price + Stock */}
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="relative">
                                                    <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Precio</label>
                                                    <div className="absolute left-3 h-10 flex items-center pointer-events-none">
                                                        <span className="text-zinc-500 text-xs">$</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="0.00"
                                                        value={productPrice}
                                                        onChange={(e) => setProductPrice(e.target.value)}
                                                        autoComplete="off"
                                                        className="w-full h-10 pl-7 pr-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all"
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Stock</label>
                                                    <div className="absolute left-3 h-10 flex items-center pointer-events-none">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                            <path d="M21 16V8C21 7.44772 20.5523 7 20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16Z" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M1 20H23" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        placeholder="Unidades"
                                                        value={productStock}
                                                        onChange={(e) => setProductStock(e.target.value)}
                                                        autoComplete="off"
                                                        className="w-full h-10 pl-8 pr-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Conditional: Category */}
                                    {addType === 'Category' && (
                                        <>
                                            {/* Row 2: Category name */}
                                            <div className="relative">
                                                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Nombre de Categoría</label>
                                                <div className="absolute left-3 h-10 flex items-center pointer-events-none">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                        <path d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Ejemplo: Bebidas"
                                                    value={categoryName}
                                                    onChange={(e) => setCategoryName(e.target.value)}
                                                    autoComplete="off"
                                                    className="w-full h-10 pl-8 pr-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all"
                                                />
                                            </div>

                                            {/* Row 3: Description */}
                                            <div className="relative">
                                                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Descripción</label>
                                                <textarea
                                                    placeholder="Descripción de la categoría..."
                                                    value={categoryDescription}
                                                    onChange={(e) => setCategoryDescription(e.target.value)}
                                                    rows={3}
                                                    className="w-full px-3 py-2.5 bg-zinc-800 border border-zinc-700 hover:border-zinc-600 focus:border-zinc-500 rounded-xl text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-all resize-none"
                                                />
                                            </div>
                                        </>
                                    )}

                                </div>

                                {/* Footer buttons */}
                                <div className="flex gap-2 justify-end mt-4">
                                    <button
                                        onClick={onClose}
                                        className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 transition-all cursor-pointer"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-zinc-900 hover:bg-zinc-200 transition-all cursor-pointer"
                                    >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 5V19M5 12H19"/>
                                        </svg>
                                        Crear {addType ? "Producto" : "Categoría"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;