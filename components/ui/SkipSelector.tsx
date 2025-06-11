"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SkipOptionCard from './SkipOptionCard';

const skipOptions = [
  { size: 101, price: 227, hirePeriod: '7 day hire period' },
  { size: 205, price: 300, hirePeriod: '14 day hire period' },
  { size: 333, price: 325, hirePeriod: '7 day hire period' },
  { size: 444, price: 350, hirePeriod: '7 day hire period' },
  { size: 555, price: 375, hirePeriod: '7 day hire period' },
  { size: 666, price: 400, hirePeriod: '7 day hire period' },
];

const SkipSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  // Toggle selection and update URL
  const handleSelect = (size: number) => {
    const updated = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(updated);

    const params = new URLSearchParams();

    if (updated.length > 0) {
      updated.forEach((id) => params.append('selected', id.toString()));
      router.push(`?${params.toString()}`, { scroll: false });
    } else {
      // No selections: reset to base URL
      router.push('/', { scroll: false });
    }
  };

  // Load selections from URL on initial render
  useEffect(() => {
    const allSelected = searchParams.getAll('selected');
    const parsed = allSelected.map((id) => parseInt(id, 10)).filter((n) => !isNaN(n));
    setSelectedSizes(parsed);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold">Choose Your Skip Size</h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-4">
          Select one or more skip sizes. The URL will reflect each selection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skipOptions.map((skip) => (
          <SkipOptionCard
            key={skip.size}
            size={skip.size}
            price={skip.price}
            hirePeriod={skip.hirePeriod}
            selected={selectedSizes.includes(skip.size)}
            onSelect={() => handleSelect(skip.size)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">Back</button>
        <button
          className={`px-4 py-2 rounded ${
            selectedSizes.length > 0 ? 'bg-blue-600 text-white' : 'bg-gray-500 cursor-not-allowed'
          }`}
          disabled={selectedSizes.length === 0}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default SkipSelector;
