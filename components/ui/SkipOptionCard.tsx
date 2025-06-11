import React from 'react';
import Image from 'next/image';

interface SkipOptionProps {
  size: number;
  price: number;
  hirePeriod: string;
  selected: boolean;
  onSelect: () => void;
}

const SkipOptionCard: React.FC<SkipOptionProps> = ({
  size,
  price,
  hirePeriod,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`border rounded-xl p-4 shadow-md cursor-pointer transition-all ${
        selected
          ? 'border-blue-500 ring-2 ring-blue-400 bg-blue-50'
          : 'hover:ring-2 hover:ring-blue-200'
      }`}
      onClick={onSelect}
    >
      <div className="relative w-full h-48 sm:h-56 md:h-60">
        <Image
          src="/trash.svg"
          alt={`${size} Yard Skip`}
          fill
          className="object-cover rounded"
          priority
        />
      </div>

      <div className="flex items-center justify-between gap-4 mt-4">
        <h3 className="text-lg font-semibold text-gray-500">
          {size} Yard Skip
        </h3>
        <p className="text-sm text-gray-500">{hirePeriod}</p>
      </div>

      <p className="text-xl font-bold text-blue-600 mt-2">£{price}</p>

      <button
        className={`mt-3 w-full py-2 rounded-md ${
          selected
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        }`}
      >
        {selected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
};

export default SkipOptionCard;
