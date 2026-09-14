'use client';

import React, { useState, useMemo } from 'react';
import { FOOD_DATA } from '../data';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<'all' | 'mcdonalds' | 'kfc' | 'burgerking' | 'subway'>('all');
  const [sortBy, setSortBy] = useState<'ratio' | 'protein' | 'calories'>('ratio');
  const [under500Kcal, setUnder500Kcal] = useState<boolean>(false);

  const filteredAndSortedData = useMemo(() => {
    return FOOD_DATA
      .filter((item) => {
        if (selectedChain !== 'all' && item.chain !== selectedChain) return false;
        if (under500Kcal && item.calories > 500) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'ratio') {
          const ratioA = (a.protein / a.calories) * 100;
          const ratioB = (b.protein / b.calories) * 100;
          return ratioB - ratioA;
        }
        if (sortBy === 'protein') return b.protein - a.protein;
        if (sortBy === 'calories') return a.calories - b.calories;
        return 0;
      });
  }, [selectedChain, sortBy, under500Kcal]);

  const getChainName = (chain: string) => {
    switch (chain) {
      case 'mcdonalds': return "McDonald's";
      case 'kfc': return 'KFC';
      case 'burgerking': return 'Burger King';
      case 'subway': return 'Subway';
      default: return chain;
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 max-w-md mx-auto pb-12">
      {/* Header */}
      <header className="py-6 text-center border-b border-slate-800 mb-6">
        <h1 className="text-3xl font-black tracking-tight text-amber-500">FitFastFood</h1>
        <p className="text-xs text-slate-400 mt-1">Nejlepší makra ke kiosku v ČR</p>
      </header>

      {/* Výběr Řetězce */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'Vše' },
          { id: 'mcdonalds', label: "McDonald's" },
          { id: 'kfc', label: 'KFC' },
          { id: 'burgerking', label: 'Burger King' },
          { id: 'subway', label: 'Subway' },
        ].map((chain) => (
          <button
            key={chain.id}
            onClick={() => setSelectedChain(chain.id as any)}
            className={`flex-1 min-w-[75px] py-2.5 px-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedChain === chain.id
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            {chain.label}
          </button>
        ))}
      </div>

      {/* Ovládací prvek: Řazení a Filtry */}
      <div className="space-y-3 mb-6 bg-slate-900 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Řadit podle:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-950 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 outline-none"
          >
            <option value="ratio">Top Poměr (Protein/100 kcal)</option>
            <option value="protein">Max Bílkoviny (g)</option>
            <option value="calories">Nejméně Kalorií (kcal)</option>
          </select>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/60 pt-2">
          <span className="text-xs text-slate-300">Pouze do 500 kcal</span>
          <input
            type="checkbox"
            checked={under500Kcal}
            onChange={(e) => setUnder500Kcal(e.target.checked)}
            className="w-4 h-4 accent-amber-500 rounded"
          />
        </div>
      </div>

      {/* Seznam jídel */}
      <div className="space-y-3">
        {filteredAndSortedData.map((item) => {
          const ratio = ((item.protein / item.calories) * 100).toFixed(1);
          return (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden"
            >
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500/80">
                    {getChainName(item.chain)}
                  </span>
                  <h3 className="font-bold text-base text-white">{item.name}</h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                    {ratio} g P / 100 kcal
                  </span>
                </div>
              </div>

              {/* Makra přehled */}
              <div className="grid grid-cols-4 gap-1 bg-slate-950 p-2 rounded-lg text-center text-xs mt-1">
                <div>
                  <div className="text-slate-500 text-[10px]">Kalorie</div>
                  <div className="font-semibold text-slate-200">{item.calories} <span className="text-[9px]">kcal</span></div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Bílkoviny</div>
                  <div className="font-bold text-emerald-400">{item.protein}g</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Sacharidy</div>
                  <div className="font-semibold text-slate-400">{item.carbs}g</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">Tuky</div>
                  <div className="font-semibold text-slate-400">{item.fat}g</div>
                </div>
              </div>

              {/* Tip */}
              {item.tip && (
                <p className="text-[11px] text-amber-200/70 italic bg-amber-500/5 p-1.5 rounded border border-amber-500/10 mt-1">
                  💡 {item.tip}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
