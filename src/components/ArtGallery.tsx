import React, { useState, useMemo } from 'react';
import { Artwork, FilterType, StyleType } from '../types/artwork';
import { artworks } from '../data/artworks';
import ArtPiece from './ArtPiece';
import ArtModal from './ArtModal';
import FilterControls from './FilterControls';
import Header from './Header';

const ArtGallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedium, setSelectedMedium] = useState<FilterType>('all');
  const [selectedStyle, setSelectedStyle] = useState<StyleType>('all');

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMedium = selectedMedium === 'all' || artwork.medium === selectedMedium;
      const matchesStyle = selectedStyle === 'all' || artwork.style === selectedStyle;
      
      return matchesSearch && matchesMedium && matchesStyle;
    });
  }, [searchTerm, selectedMedium, selectedStyle]);

  const handleViewArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header favoriteCount={favorites.size} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedMedium={selectedMedium}
          onMediumChange={setSelectedMedium}
          selectedStyle={selectedStyle}
          onStyleChange={setSelectedStyle}
        />
        
        {/* Results Info */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredArtworks.map((artwork) => (
            <ArtPiece
              key={artwork.id}
              artwork={artwork}
              onView={handleViewArtwork}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.has(artwork.id)}
            />
          ))}
        </div>
        
        {/* No Results */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Palette className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No artworks found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
      
      <ArtModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ArtGallery;