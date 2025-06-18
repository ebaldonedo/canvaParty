import React from 'react';
import { Palette, Heart } from 'lucide-react';

interface HeaderProps {
  favoriteCount: number;
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({ favoriteCount }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-amber-500 p-3 rounded-xl">
              <Palette className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">EB Canvas Gallery</h1>
              <p className="text-gray-300 text-lg">
                Curated collection of contemporary art
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm font-semibold">{favoriteCount}</span>
            </div>

            {/* <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold">{cartCount}</span>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
