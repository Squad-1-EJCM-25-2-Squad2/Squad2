import React from 'react';
import type { Product } from '../../types.ts';

interface WishlistProductCardProps {
    product: Product;
    onRemove: (id: number) => void;
}

const WishlistProductCard: React.FC<WishlistProductCardProps> = ({ product, onRemove }) => {
    // Determine o estado do produto para renderizar o botão correto
    const isOutOfStock = product.status === 'out-of-stock';
    const buttonText = isOutOfStock ? 'Notify Me' : 'Add to Cart';

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative border border-gray-200">
            {/* Tags de status e desconto */}
            {(product.tag || isOutOfStock) && (
                <div className="absolute top-2 left-2 flex flex-col space-y-1 z-10">
                    {product.tag && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{product.tag}</span>
                    )}
                    {isOutOfStock && (
                         <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">Out of Stock</span>
                    )}
                </div>
            )}

            {/* Ícone de coração para remover da wishlist */}
            <button onClick={() => onRemove(product.id)} className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364l-1.06 1.06-1.06-1.06a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>

            {/* Imagem do produto */}
            <div className="w-full h-48 overflow-hidden relative">
                <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/400x400?text=Wishlist+Image';
                    }}
                />
                 {isOutOfStock && (
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">Notify when available</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                {/* Informações do produto */}
                <h3 className="text-sm font-semibold text-gray-800">{product.name.replace('\n', ' ')}</h3>
                
                {/* Avaliação (estrelas) */}
                <div className="flex items-center mt-1 text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating))}</span>
                    <span className="text-xs text-gray-500 ml-1">({product.ratingCount})</span>
                </div>
                
                {/* Preços */}
                <div className="flex items-baseline mt-2">
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="text-xs line-through text-gray-400 ml-2">${product.originalPrice.toFixed(2)}</span>
                    )}
                </div>

                {/* Data de adição */}
                {product.dateAdded && (
                    <span className="text-xs text-gray-500 block mt-1">{product.dateAdded}</span>
                )}

                {/* Botões do card da Wishlist */}
                <div className="flex items-center mt-4 space-x-2">
                    <button className={`flex-1 text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300 ${isOutOfStock ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'}`}>
                        {buttonText}
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full transition-colors duration-300 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistProductCard;