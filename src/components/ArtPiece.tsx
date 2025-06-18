import React from 'react';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Artwork } from '../types/artwork';

interface ArtPieceProps {
  artwork: Artwork;
  onView: (artwork: Artwork) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const ArtPiece: React.FC<ArtPieceProps> = ({
  artwork,
  onView,
  onToggleFavorite,
  isFavorite = false,
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* 10x10 Canvas Container */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay with Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            <button
              onClick={() => onView(artwork)}
              className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <Eye className="w-5 h-5" />
            </button>
            {onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(artwork.id)}
                className={`p-3 rounded-full transition-colors duration-200 shadow-lg ${
                  isFavorite
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
                />
              </button>
            )}
            {/* {artwork.isAvailable && (
              <button className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-colors duration-200 shadow-lg">
                <ShoppingCart className="w-5 h-5" />
              </button>
            )} */}
          </div>
        </div>

        {/* Availability Badge */}
        {!artwork.isAvailable && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            SOLD
          </div>
        )}
      </div>

      {/* Artwork Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
          {artwork.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">by {artwork.artist}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full capitalize">
            {artwork.medium}
          </span>
          <span className="font-bold text-amber-600">
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtPiece;
