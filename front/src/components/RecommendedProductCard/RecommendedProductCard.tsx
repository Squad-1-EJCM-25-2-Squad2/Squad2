import React from 'react';
import type { Product } from '../../types.ts';

interface RecommendedProductCardProps {
    product: Product;
}

const RecommendedProductCard: React.FC<RecommendedProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative border border-gray-200">
            <div className="w-full h-48 overflow-hidden">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/400x400?text=Recommended+Image';
                    }}
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-1 text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button className="bg-white text-gray-700 text-sm font-bold py-2 px-4 rounded-full border border-gray-300 transition-colors duration-300 hover:bg-gray-100">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendedProductCard;