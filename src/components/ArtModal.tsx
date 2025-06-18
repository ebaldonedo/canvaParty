import React from 'react';
import { X, Calendar, Palette, Ruler, Tag, User } from 'lucide-react';
import { Artwork } from '../types/artwork';

interface ArtModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtModal: React.FC<ArtModalProps> = ({ artwork, isOpen, onClose }) => {
  if (!isOpen || !artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            {!artwork.isAvailable && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                SOLD
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {artwork.title}
                </h2>
                <p className="text-xl text-gray-600 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {artwork.artist}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-amber-500" />
                <span>14 Jun·2025</span>
              </div>

              <div className="flex items-center text-gray-700">
                <Palette className="w-5 h-5 mr-3 text-amber-500" />
                <span className="capitalize">{artwork.medium}</span>
              </div>

              {/* <div className="flex items-center text-gray-700">
                <Tag className="w-5 h-5 mr-3 text-amber-500" />
                <span className="capitalize">{artwork.style}</span>
              </div> */}

              <div className="flex items-center text-gray-700">
                <Ruler className="w-5 h-5 mr-3 text-amber-500" />
                <span>10x10</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {artwork.description}
            </p>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-amber-600">
                  ${artwork.price.toLocaleString()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    artwork.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {artwork.isAvailable ? 'Available' : 'Sold'}
                </span>
              </div>

              {artwork.isAvailable && (
                <button className="w-full bg-amber-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-200">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtModal;
