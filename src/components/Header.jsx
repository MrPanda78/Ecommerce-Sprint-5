import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

export function Header({ onMenuToggle, title }) {
    return (
        <header className="fixed top-0 right-0 w-full md:w-[calc(100%-260px)] h-16 bg-surface/80 backdrop-blur-md border-b border-white/10 z-30 flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center gap-2 flex-1">
                <button onClick={onMenuToggle} className="md:hidden text-on-surface hover:text-primary transition-colors p-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[24px]">
                        <FontAwesomeIcon icon={faBars} size="sm" />
                    </span>
                </button>
                <span className="md:hidden font-headline-sm text-lg font-bold text-primary w-48">{title}</span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
                <button className="text-on-surface-variant hover:text-primary transition-all active:opacity-80 relative w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined text-[22px]">
                        <FontAwesomeIcon icon={faBell} size="sm" />
                    </span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
                </button>
                
                <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block"></div>
                
                <button className="flex items-center gap-3 hover:opacity-80 transition-opacity ml-1">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-on-surface leading-tight">Admin User</p>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant leading-tight mt-0.5">Manager</p>
                    </div>

                    <img 
                        alt="User Profile" 
                        className="w-9 h-9 rounded-full border border-white/10 object-cover hover:border-primary/50 transition-colors" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXQwx08-GTEM2iyrwHISN6R91L02e5YJv_0pTuITcFYEpBNBaQPShJ7FX4cKtR3diiYIo2nojkDRSRSUo5Trtwrlm5dss8WVvn5TB6vy_AyO_yeZzVjTUgt-K32aLR-UWmkNkBFuijFnXRyNtCinhFYmf-GFGbgNpudWnK1HxPAKgYkRg-1DH9D-R36RsPIsoPKhcuPIvSvKRhakgsnC1Lj-jd5nyszZPidjNxxg5Fq9149TSWTqGkTwHJ-GiU_FqNL0MuMRXeZM" 
                    />
                </button>
            </div>
        </header>
    );
}