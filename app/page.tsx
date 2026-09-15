'use client';

import React, { useState, useMemo } from 'react';
import { FOOD_DATA } from '../data';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<'all' | 'mcdonalds' | 'kfc' | 'burgerking' | 'subway' | 'popeyes' | 'bb' | 'generic'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'ratio' | 'protein' | 'calories'>('ratio');
  const [under500Kcal, setUnder500Kcal] = useState<boolean>(false);
  const [onlyVeggie, setOnlyVeggie] = useState<boolean>(false);

  const filteredAndSortedData = useMemo(() => {
    return FOOD_DATA
      .filter((item) => {
        if (selectedChain !== 'all' && item.chain !== selectedChain) return false;
        if (under500Kcal && item.calories > 500) return false;
        if (onlyVeggie && !item.isVegetarian) return false;

        if (selectedCategory !== 'all') {
          const name = item.name.toLowerCase();
          if (selectedCategory === 'burgers' && !name.includes('burger') && !name.includes('mac') && !name.includes('whopper') && !name.includes('king') && !name.includes('bageta') && !name.includes('sandwich')) return false;
          if (selectedCategory === 'chicken' && !name.includes('kuř') && !name.includes('chicken') && !name.includes('nugget') && !name.includes('strip') && !name.includes('wing') && !name.includes('tenders') && !name.includes('ryb') && !name.includes('fish') && !name.includes('losos') && !name.includes('tuňák')) return false;
          if (selectedCategory === 'breakfast' && !name.includes('mcmuffin') && !name.includes('snídan') && !name.includes('toast') && !name.includes('bagel') && !name.includes('egg') && !name.includes('vajíč')) return false;
          if (selectedCategory === 'sides' && !name.includes('hranolky') && !name.includes('lupínky') && !name.includes('brambor') && !name.includes('salát') && !name.includes('coleslaw') && !name.includes('kroužky') && !name.includes('omáčka')) return false;
          if (selectedCategory === 'desserts' && !name.includes('shake') && !name.includes('taštička') && !name.includes('zmrzlina') && !name.includes('cookie') && !name.includes('dort') && !name.includes('brownie')) return false;
        }

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
  }, [selectedChain, selectedCategory, sortBy, under500Kcal, onlyVeggie]);

  const getChainName = (chain: string) => {
    switch (chain) {
      case 'mcdonalds': return "McDonald's";
      case 'kfc': return 'KFC';
      case 'burgerking': return 'Burger King';
      case 'subway': return 'Subway';
      case 'popeyes': return 'Popeyes';
      case 'bb': return 'Bageterie Boulevard';
      case 'generic': return 'Stánky / Kebab';
      default: return chain;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 max-w-md mx-auto pb-16 font-sans">
      {/* Hlavní Hlavička */}
      <header className="flex items-center justify-between py-4 mb-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">Fastfood Výběr</h1>
          <p className="text-xs text-zinc-400 mt-0.5 font-medium">
            ČR • {selectedChain === 'all' ? 'Všechny řetězce' : getChainName(selectedChain)}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl shadow-inner">
          🍔
        </div>
      </header>

      {/* Přepínač Řetězců (Pill Tabs) */}
      <div className="bg-zinc-900/90 p-1 rounded-2xl border border-zinc-800/80 flex overflow-x-auto gap-1 mb-4 no-scrollbar">
        {[
          { id: 'all', label: 'Vše' },
          { id: 'mcdonalds', label: "McDonald's" },
          { id: 'kfc', label: 'KFC' },
          { id: 'burgerking', label: 'Burger King' },
          { id: 'subway', label: 'Subway' },
          { id: 'popeyes', label: 'Popeyes' },
          { id: 'bb', label: 'Bageterie B.' },
          { id: 'generic', label: 'Stánky/Kebab' },
        ].map((chain) => (
          <button
            key={chain.id}
            onClick={() => setSelectedChain(chain.id as any)}
            className={`py-2.5 px-4 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 ${
              selectedChain === chain.id
                ? 'bg-amber-500 text-black shadow-md font-extrabold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {chain.label}
          </button>
        ))}
      </div>

      {/* Rychlé Filtry & Řazení */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar text-xs">
        <button
          onClick={() => setUnder500Kcal(!under500Kcal)}
          className={`px-3.5 py-1.5 rounded-full border transition font-medium flex items-center gap-1.5 whitespace-nowrap ${
            under500Kcal
              ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold'
              : 'bg-zinc-900 border-zinc-800 text-zinc-300'
          }`}
        >
          <span className="text-[10px]">●</span> Do 500 kcal
        </button>

        <button
          onClick={() => setOnlyVeggie(!onlyVeggie)}
          className={`px-3.5 py-1.5 rounded-full border transition font-medium flex items-center gap-1.5 whitespace-nowrap ${
            onlyVeggie
              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold'
              : 'bg-zinc-900 border-zinc-800 text-zinc-300'
          }`}
        >
          🌱 Veggie
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3.5 py-1.5 rounded-full outline-none font-medium whitespace-nowrap appearance-none cursor-pointer"
        >
          <option value="ratio">⚡ Protein/kcal</option>
          <option value="protein">💪 Max Bílkoviny</option>
          <option value="calories">🔥 Nejméně kcal</option>
        </select>
      </div>

      {/* Kategorie položek */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto no-scrollbar">
        {[
          { id: 'all', label: 'Vše' },
          { id: 'burgers', label: 'Burgery' },
          { id: 'chicken', label: 'Kuřecí & ryba' },
          { id: 'breakfast', label: 'Snídaně' },
          { id: 'sides', label: 'Přílohy' },
          { id: 'desserts', label: 'Dezerty' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`py-1.5 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Počet položek */}
      <div className="text-xs text-zinc-500 font-semibold mb-3 px-1">
        {filteredAndSortedData.length} položek
      </div>

      {/* Seznam Karet Jídel */}
      <div className="space-y-3">
        {filteredAndSortedData.map((item) => {
          const ratio = ((item.protein / item.calories) * 100).toFixed(1);
          return (
            <div
              key={item.id}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-4 flex flex-col gap-3 relative shadow-sm"
            >
              {/* Horní řádek: Název + Zelený Poměr */}
              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-500/90">
                      {getChainName(item.chain)}
                    </span>
                    {item.isVegetarian && (
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold">
                        🌱 Veggie
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-white leading-snug">{item.name}</h3>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-emerald-400 text-xl font-black tracking-tight leading-none">
                    {ratio}%
                  </div>
                  <div className="text-[9px] text-zinc-500 font-bold tracking-wider uppercase mt-0.5">
                    PROTEIN/KCAL
                  </div>
                </div>
              </div>

              {/* Badges: Kalorie + Bílkoviny */}
              <div className="flex gap-2">
                <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                  🔥 <span>{item.calories} kcal</span>
                </div>
                <div className="bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  💪 <span>{item.protein} g bílkovin</span>
                </div>
              </div>

              {/* Vedlejší Makra: Tuky & Sacharidy */}
              <div className="bg-zinc-900/80 rounded-xl p-2.5 grid grid-cols-2 text-center text-xs border border-zinc-800/40">
                <div>
                  <div className="text-zinc-200 font-black text-sm">{item.fat} g</div>
                  <div className="text-zinc-500 text-[9px] font-bold tracking-wider uppercase mt-0.5">TUKY</div>
                </div>
                <div>
                  <div className="text-zinc-200 font-black text-sm">{item.carbs} g</div>
                  <div className="text-zinc-500 text-[9px] font-bold tracking-wider uppercase mt-0.5">SACHARIDY</div>
                </div>
              </div>

              {/* Tip Zpráva */}
              {item.tip && (
                <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200/90 leading-relaxed">
                  <span className="text-amber-400 font-bold">Tip: </span>
                  {item.tip}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
