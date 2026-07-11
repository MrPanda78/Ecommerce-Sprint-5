import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faCaretDown, faCaretLeft, faCaretRight, faDownload, faEye, faImage, faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const PRODUCTS_PER_PAGE = 10;

    const [categoryFilter, setCategoryFilter] = useState('');
    const [showCategoryFilter, setShowCategoryFilter] = useState(false);
    const categoryRef = useRef(null);

    const [statusFilter, setStatusFilter] = useState('');
    const [showStatusFilter, setShowStatusFilter] = useState(false);
    const statusRef = useRef(null);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;

    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (categoryRef.current && !categoryRef.current.contains(e.target)) setShowCategoryFilter(false);
            if (statusRef.current && !statusRef.current.contains(e.target)) setShowStatusFilter(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-4">
                <div>
                    <h2 className="font-display-lg text-3xl font-bold text-on-surface tracking-tight">Gestión de Productos</h2>
                    <p className="text-on-surface-variant mt-1 text-sm">Administra tu inventario, precios y disponibilidad.</p>
                </div>
            </div>

            <div className="glass-panel rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-1 w-full gap-4 flex-wrap lg:flex-nowrap">
                    <div className="relative flex-1 min-w-[200px]">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input className="w-full input-inset text-on-surface pl-10 pr-4 py-2 rounded-lg text-sm transition-all placeholder:text-on-surface-variant/50" placeholder="Buscar..." type="text" />
                    </div>
                    <div className="relative min-w-[160px]" ref={categoryRef}>
                        <button
                            onClick={() => setShowCategoryFilter(prev => !prev)}
                            className={`w-full input-inset text-on-surface pl-4 pr-10 py-2 rounded-lg text-sm appearance-none cursor-pointer border-none focus:ring-1 focus:ring-primary/50 flex items-center transition-all ${showCategoryFilter ? 'ring-1 ring-primary/50' : ''}`}
                        >
                            <span className={categoryFilter === '' ? 'text-on-surface-variant/70' : 'text-on-surface'}>
                                {categoryFilter === '' ? 'Todas las Categorías' : categoryFilter}
                            </span>
                            <FontAwesomeIcon 
                                icon={faCaretDown} 
                                className={`absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-transform duration-200 ${showCategoryFilter ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {showCategoryFilter && (
                            <div className="absolute z-20 w-full mt-1 bg-surface-container-high border border-white/10 rounded-lg shadow-xl overflow-hidden">
                                <button onClick={() => { setCategoryFilter(''); setShowCategoryFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Todas las Categorías</button>
                                <button onClick={() => { setCategoryFilter('Electrónica'); setShowCategoryFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Electrónica</button>
                                <button onClick={() => { setCategoryFilter('Ropa'); setShowCategoryFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Ropa</button>
                                <button onClick={() => { setCategoryFilter('Accesorios'); setShowCategoryFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Accesorios</button>
                            </div>
                        )}
                    </div>
                    <div className="relative min-w-[140px]" ref={statusRef}>
                        <button
                            onClick={() => setShowStatusFilter(prev => !prev)}
                            className={`w-full input-inset text-on-surface pl-4 pr-10 py-2 rounded-lg text-sm appearance-none cursor-pointer border-none focus:ring-1 focus:ring-primary/50 flex items-center transition-all ${showStatusFilter ? 'ring-1 ring-primary/50' : ''}`}
                        >
                            <span className={statusFilter === '' ? 'text-on-surface-variant/70' : 'text-on-surface'}>
                                {statusFilter === '' ? 'Estado (Todos)' : statusFilter}
                            </span>
                            <FontAwesomeIcon 
                                icon={faCaretDown} 
                                className={`absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant transition-transform duration-200 ${showStatusFilter ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {showStatusFilter && (
                            <div className="absolute z-20 w-full mt-1 bg-surface-container-high border border-white/10 rounded-lg shadow-xl overflow-hidden">
                                <button onClick={() => { setStatusFilter(''); setShowStatusFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Estado (Todos)</button>
                                <button onClick={() => { setStatusFilter('En Stock'); setShowStatusFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">En Stock</button>
                                <button onClick={() => { setStatusFilter('Stock Bajo'); setShowStatusFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Stock Bajo</button>
                                <button onClick={() => { setStatusFilter('Agotado'); setShowStatusFilter(false); }} className="w-full px-3 py-2 text-left text-sm text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors cursor-pointer">Agotado</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-2 w-full lg:w-auto justify-end">
                    <button className="p-1.5 cursor-pointer transition-all rounded-lg border border-white/10 hover:bg-white/5 text-on-surface-variant duration-300 active:scale-95" title="Exportar">
                        <span className="material-symbols-outlined">
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                    </button>
                    <button className="p-1.5 cursor-pointer transition-all rounded-lg border border-white/10 hover:bg-white/5 text-on-surface-variant duration-300 active:scale-95" title="Vista Cuadrícula">
                        <span className="material-symbols-outlined">
                            <FontAwesomeIcon icon={faBorderAll} />
                        </span>
                    </button>
                </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 bg-surface-container-high/50 text-on-surface-variant text-[10px] uppercase font-bold tracking-wider">
                                <th className="p-4 w-16">Imagen</th>
                                <th className="p-4">Producto</th>
                                <th className="p-4">Categoría</th>
                                <th className="p-4 text-right">Stock</th>
                                <th className="p-4 text-right">Precio</th>
                                <th className="p-4 text-center w-32">Estado</th>
                                <th className="p-4 text-center w-24">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-white/5">
                            {currentProducts.map(product => (
                                <ProductRow
                                    key={product.id}
                                    img={`products/${product.category}/` + product.image}
                                    name={product.name}
                                    sku={product.sku}
                                    category={product.category}
                                    stock={product.stock}
                                    price={`$${product.points}`}
                                    status={product.stock > 0 ? product.stock <= 10 ? "Bajo Stock" : "En Stock" : "Agotado"}
                                    statusClass={
                                        product.stock > 0
                                            ? product.stock <= 10 ? "bg-tertiary-container/10 text-tertiary border border-tertiary/20"
                                            : "bg-secondary-container/10 text-secondary border border-secondary/20"
                                            : "bg-error-container/20 text-error border border-error/20"
                                    }
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="border-t border-white/10 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low mt-auto">
                    <div className="text-sm text-on-surface-variant text-center sm:text-left">
                        Mostrando{" "}
                        <span className="font-medium text-on-surface">
                            {products.length === 0 ? 0 : indexOfFirstProduct + 1}
                        </span>
                        {" "}a{" "}
                        <span className="font-medium text-on-surface">
                            {Math.min(indexOfLastProduct, products.length)}
                        </span>
                        {" "}de{" "}
                        <span className="font-medium text-on-surface">
                            {products.length}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <button
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            disabled={currentPage === 1}
                            className={`p-1${currentPage === 1 ? "" : " cursor-pointer"} rounded text-on-surface-variant hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300`}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-8 h-8 cursor-pointer rounded text-sm flex items-center justify-center transition-all duration-300 ${
                                    currentPage === i + 1
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "hover:bg-white/5 text-on-surface-variant"
                                }`}
                            >
                            {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-1${currentPage === totalPages ? "" : " cursor-pointer"} rounded text-on-surface-variant hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300`}
                        >
                            <FontAwesomeIcon icon={faCaretRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductRow({ img, isPlaceholder, imgClass = "", rowClass = "", name, sku, category, stock, stockClass = "text-on-surface", price, status, statusClass } ) {
    return (
        <tr className={`table-row-hover transition-colors group ${rowClass}`}>
            <td className="p-4">
                <div className="w-10 h-10 rounded bg-surface-container-highest overflow-hidden border border-white/5">
                    {isPlaceholder ? (
                        <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                            <span className="material-symbols-outlined">
                                <FontAwesomeIcon icon={faImage} size="lg" />
                            </span>
                        </div>
                    ) : (
                        <img src={img} alt="Product" className={`w-full h-full object-cover ${imgClass}`} />
                    )}
                </div>
            </td>
            <td className="p-4">
                <div className="font-medium text-on-surface">{name}</div>
                <div className="text-on-surface-variant text-xs mt-0.5 font-data-mono">{sku}</div>
            </td>
            <td className="p-4 text-on-surface-variant">{category}</td>
            <td className={`p-4 text-right font-data-mono ${stockClass}`}>{stock}</td>
            <td className="p-4 text-right font-data-mono text-on-surface">{price}</td>
            <td className="p-4 text-center">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusClass}`}>
                {status}
                </span>
            </td>
            <td className="p-4">
                <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors p-1" title="Ver">
                        <span className="material-symbols-outlined text-[20px]">
                            <FontAwesomeIcon icon={faEye} />
                        </span>
                    </button>
                    <button className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors p-1" title="Editar">
                        <span className="material-symbols-outlined text-[20px]">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </span>
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default Products;