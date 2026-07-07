import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faCalendarDays, faCaretDown, faCartPlus, faCaretRight, faClock, faExclamation, faMoneyBills, faRotate, faTriangleExclamation, faTruckArrowRight, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const currentDate = new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
                <div>
                <h2 className="font-display-lg text-3xl font-bold text-on-surface tracking-tight">
                    Panel de Control
                </h2>
                <p className="text-on-surface-variant mt-1 text-sm">
                    Resumen general de operaciones de hoy.
                </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant bg-surface-container py-2 px-4 rounded-full border border-white/5 w-fit">
                <span className="material-symbols-outlined text-[16px]">
                    <FontAwesomeIcon icon={faCalendarDays} />
                </span>
                <span>{currentDate}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                title="Ventas del Día"
                value="$12,450.00"
                icon={faMoneyBills}
                trend="+12.5%"
                trendIcon={faArrowTrendUp}
                colorClass="primary"
                />

                <StatCard
                title="Pedidos Pendientes"
                value="48"
                icon= {faTruckArrowRight}
                trend="Activos"
                trendIcon= {faClock}
                colorClass="tertiary-container"
                />

                <StatCard
                title="Bajo Stock"
                value="12"
                icon= {faTriangleExclamation}
                trend="Atención"
                trendIcon= {faExclamation}
                colorClass="error"
                />

                <StatCard
                title="Nuevos Clientes"
                value="156"
                icon={faUserPlus}
                trend="+4.2%"
                trendIcon={faArrowTrendUp}
                colorClass="secondary"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-surface-container-low rounded-xl border border-white/10 flex flex-col overflow-hidden">
                <div className="p-5 border-b border-white/5 flex justify-between items-center">
                    <div>
                    <h3 className="text-lg font-semibold text-on-surface">
                        Rendimiento de Ventas
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                        Últimos 7 días
                    </p>
                    </div>

                    <button className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-primary/10 px-3 py-1.5 rounded-md transition-colors cursor-pointer">
                    Ver Reporte
                    <span className="material-symbols-outlined text-[16px]">
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                    </button>
                </div>

                <div className="p-5 flex-1 relative min-h-[300px]">
                    <div className="absolute inset-x-5 inset-y-5 flex items-end gap-2 sm:gap-4">
                    <div className="h-full flex flex-col justify-between text-xs text-on-surface-variant/50 pr-4 pb-6 font-data-mono border-r border-white/5">
                        <span>$15k</span>
                        <span>$10k</span>
                        <span>$5k</span>
                        <span>$0</span>
                    </div>

                    <div className="flex-1 flex items-end justify-around h-full pb-6 relative group">
                        <div className="w-full flex justify-around items-end h-full z-10">
                        <div className="w-8 sm:w-12 h-[40%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Lun
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[65%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Mar
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[45%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Mié
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[80%] bg-primary rounded-t-sm relative cursor-pointer shadow-[0_0_15px_rgba(173,198,255,0.3)]">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-primary font-bold">
                            Jue
                            </div>

                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-on-surface text-xs px-2 py-1 rounded shadow-lg border border-white/10 hidden group-hover:block">
                            $12.4k
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[55%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Vie
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[30%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Sáb
                            </div>
                        </div>

                        <div className="w-8 sm:w-12 h-[20%] bg-surface-variant rounded-t-sm hover:bg-primary/40 transition-colors relative cursor-pointer">
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-on-surface-variant">
                            Dom
                            </div>
                        </div>
                        </div>

                        <div className="absolute top-[0%] w-full h-px bg-white/5"></div>
                        <div className="absolute top-[33%] w-full h-px bg-white/5"></div>
                        <div className="absolute top-[66%] w-full h-px bg-white/5"></div>
                        <div className="absolute bottom-6 w-full h-px bg-white/10"></div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-surface-container-low rounded-xl border border-white/10 flex flex-col lg:h-[400px]">
                <div className="p-5 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-on-surface">
                    Actividad Reciente
                    </h3>

                    <button className="text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 rounded-md cursor-pointer">
                    <span className="material-symbols-outlined text-[20px]">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    <ActivityItem
                    icon={faCartPlus}
                    title="Nueva Venta #INV-4029"
                    desc="Carlos Mendoza compró 3 items."
                    time="Hace 5 min"
                    colorClass="secondary"
                    />

                    <ActivityItem
                    icon={faTriangleExclamation}
                    title="Alerta de Stock"
                    desc="iPhone 15 Pro Max (Black) bajo límite."
                    time="Hace 22 min"
                    colorClass="error"
                    />

                    <ActivityItem
                    icon={faUserPlus}
                    title="Nuevo Usuario Registrado"
                    desc="Ana García (Cajero) agregada al sistema."
                    time="Hace 1 hora"
                    colorClass="primary"
                    />

                    <ActivityItem
                    icon={faRotate}
                    title="Sincronización de Catálogo"
                    desc="Actualización masiva de precios completada."
                    time="Hace 3 horas"
                    colorClass="tertiary-container"
                    />
                </div>

                <div className="p-3 border-t border-white/5 text-center">
                    <button className="text-primary text-sm font-medium hover:underline cursor-pointer">
                    Ver todo el historial
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, icon, trend, trendIcon, colorClass, }) {
    const bgColors =
        {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        error: 'bg-error/10 text-error',
        'tertiary-container': 'bg-tertiary-container/10 text-tertiary-container',
        }[colorClass] || 'bg-white/10 text-white';

    const badgeColors =
        {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        error: 'bg-error/10 text-error',
        'tertiary-container': 'bg-white/5 text-on-surface-variant',
        }[colorClass] || 'bg-white/5 text-white';

    const glowColors = {
        primary: 'bg-primary/5',
        secondary: 'bg-secondary/5',
        error: 'bg-error/5',
        'tertiary-container': 'bg-tertiary-container/5',
    }[colorClass];

    return (
        <div className="bg-surface-container-low rounded-xl p-5 border border-white/10 flex flex-col relative overflow-hidden group">
        <div
            className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-110 ${glowColors}`}
        ></div>

        <div className="flex justify-between items-start mb-6 z-10">
            <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${bgColors}`}
            >
            <span className="material-symbols-outlined"><FontAwesomeIcon icon={icon} /></span>
            </div>

            <span
            className={`flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${badgeColors}`}
            >
            <span className="material-symbols-outlined text-[14px] mr-1">
                <FontAwesomeIcon icon={trendIcon} />
            </span>
            {trend}
            </span>
        </div>

        <div className="z-10 mt-auto">
            <p className="text-on-surface-variant text-sm mb-1">{title}</p>
            <h3 className="font-data-mono text-[28px] font-medium text-on-surface leading-none block">
            {value}
            </h3>
        </div>
        </div>
    );
    }

    function ActivityItem({ icon, title, desc, time, colorClass }) {
    const bgColors =
        {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        error: 'bg-error/10 text-error',
        'tertiary-container': 'bg-tertiary-container/10 text-tertiary-container',
        }[colorClass] || 'bg-white/10 text-white';

    return (
        <div className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
        <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${bgColors}`}
        >
            <span className="material-symbols-outlined text-[16px]">
            <FontAwesomeIcon icon={icon} />
            </span>
        </div>

        <div className="flex-1 min-w-0">
            <p className="text-sm text-on-surface font-medium truncate group-hover:text-primary transition-colors">
            {title}
            </p>

            <p className="text-sm text-on-surface-variant truncate">{desc}</p>

            <p className="text-[11px] font-semibold tracking-wide text-on-surface-variant/70 mt-1 uppercase">
            {time}
            </p>
        </div>
        </div>
    );
}