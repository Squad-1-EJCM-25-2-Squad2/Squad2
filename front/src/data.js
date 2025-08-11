/*Cada id, é um card de Produtos de Destaque*/
export const products = [
  {
    id: 1,
    name: 'Jaqueta Denim Vintage',
    category: 'Jaqueta',
    imageUrl: 'https://via.placeholder.com/300',
    originalPrice: 120,
    price: 89,
    rating: 4.8,
    ratingCount: 134,
    isNew: false,
    isSale: true,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Plussize Blazer',
    category: 'Blazer',
    imageUrl: 'https://via.placeholder.com/300',
    originalPrice: null,
    price: 145,
    rating: 4.9,
    ratingCount: 89,
    isNew: true,
    isSale: false,
    tag: 'New'
  },
  {
    id: 3,
    name: 'Jeans Slim',
    category: 'Jeans',
    imageUrl: 'https://via.placeholder.com/300',
    originalPrice: 99,
    price: 79,
    rating: 4.7,
    ratingCount: 203,
    isNew: false,
    isSale: true,
    tag: 'Sale'
  },
  {
    id: 4,
    name: 'Blusa de seda',
    category: 'Blusa',
    imageUrl: 'https://via.placeholder.com/300',
    originalPrice: null,
    price: 125,
    rating: 4.8,
    ratingCount: 198,
    isNew: false,
    isSale: false,
    tag: 'Premium'
  },
];
/*Aqui são os cards de Categoria*/
export const categories = [
  { name: 'Feminino\'s Fashion', imageUrl: 'https://via.placeholder.com/300', itemCount: '500+ items' },
  { name: 'Masculino\'s Fashion', imageUrl: 'https://via.placeholder.com/300', itemCount: '350+ items' },
  { name: 'Acessórios', imageUrl: 'https://via.placeholder.com/300', itemCount: '200+ items' },
  { name: 'Sapatos', imageUrl: 'https://via.placeholder.com/300', itemCount: '180+ items' },
];