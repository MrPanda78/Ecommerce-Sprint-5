import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBottleWater, faBurger, faCaretDown, faComputerMouse, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    const [products, setProducts] = useState([]);

    const categoryCount = useMemo(() => {
        return products.reduce((acc, product) => {
            acc[product.category] = (acc[product.category] || 0) + 1;
            return acc;
        }, {});
    }, [products]);

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h2 className="font-display-lg text-3xl font-bold text-on-surface tracking-tight">Gestión de Categorías</h2>
                    <p className="text-on-surface-variant text-sm">Organiza y administra la estructura del catálogo.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CategoryCard 
                    icon={faBottleWater}
                    title="Bebidas" 
                    desc="Bebidas con y sin alcohol, gaseosas, jugos y agua." 
                    count={categoryCount.beverages || 0}
                    colorClass="primary" 
                />
                <CategoryCard 
                    icon={faComputerMouse} 
                    title="Electrónica" 
                    desc="Equipos electrónicos, periféricos y accesorios tecnológicos." 
                    count={categoryCount.electronic || 0}
                    colorClass="secondary" 
                />
                <CategoryCard 
                    icon={faBurger}
                    title="Comida" 
                    desc="Alimentos frescos, congelados, envasados y de consumo diario."
                    count={categoryCount.food || 0}
                    colorClass="yellow-200" 
                />
            </div>
        </div>
    );
}

function CategoryCard({ icon, title, desc, count, colorClass }) {
    const bgHover = {
        'primary': 'group-hover:bg-primary/20 text-primary',
        'secondary': 'group-hover:bg-secondary/20 text-secondary',
        'yellow-200': 'group-hover:bg-yellow-200/10 text-yellow-200',
    }[colorClass] || 'group-hover:bg-white/20 text-white';

    return (
        <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full min-h-[220px]">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center transition-all duration-300 ${bgHover}`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                </div>
                <button className="cursor-pointer text-on-surface-variant hover:text-primary p-1 rounded-full hover:bg-white/5 transition-all duration-300">
                    <span className="material-symbols-outlined">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </button>
            </div>
            <h3 className="text-xl font-semibold text-on-surface mb-2">{title}</h3>
            <p className="text-on-surface-variant mb-6 text-sm flex-1">{desc}</p>
            
            <div className="mt-auto">
                <div className="flex justify-between items-center mb-4 border-t border-white/5 pt-4">
                    <span className="text-on-surface-variant text-sm">Productos</span>
                    <span className="font-data-mono text-primary font-medium">{count}</span>
                </div>
                <button className="w-full cursor-pointer py-2 px-4 rounded border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-all duration-300 text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </span>
                    Agregar/Quitar
                </button>
            </div>
        </div>
    );
}

export default Categories;