import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { FilterType, StyleType } from '../types/artwork';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedMedium: FilterType;
  onMediumChange: (medium: FilterType) => void;
  selectedStyle: StyleType;
  onStyleChange: (style: StyleType) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedMedium,
  onMediumChange,
  selectedStyle,
  onStyleChange
}) => {
  const mediums: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All Mediums' },
    { value: 'painting', label: 'Paintings' },
    { value: 'photography', label: 'Photography' },
    { value: 'sculpture', label: 'Sculptures' },
    { value: 'digital', label: 'Digital Art' }
  ];

  const styles: { value: StyleType; label: string }[] = [
    { value: 'all', label: 'All Styles' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'contemporary', label: 'Contemporary' },
    { value: 'classical', label: 'Classical' },
    { value: 'modern', label: 'Modern' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-amber-500" />
        <h3 className="font-semibold text-gray-900">Filter & Search</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search artworks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        {/* Medium Filter */}
        <select
          value={selectedMedium}
          onChange={(e) => onMediumChange(e.target.value as FilterType)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          {mediums.map((medium) => (
            <option key={medium.value} value={medium.value}>
              {medium.label}
            </option>
          ))}
        </select>
        
        {/* Style Filter */}
        <select
          value={selectedStyle}
          onChange={(e) => onStyleChange(e.target.value as StyleType)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-white"
        >
          {styles.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterControls;