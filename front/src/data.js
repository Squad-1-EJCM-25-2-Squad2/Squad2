/* Importa todas as imagens das pastas 'products' e 'categorias'
  O 'eager' garante que as imagens sejam carregadas imediatamente.
  O caminho é relativo ao arquivo 'data.js'. */
const productImages = import.meta.glob('./assets/products/*.{png,jpg,jpeg,svg}', { eager: true });
const categoryImages = import.meta.glob('./assets/categorias/*.{png,jpg,jpeg,svg}', { eager: true });

/*Cada id, é um card de Produtos de Destaque*/
export const products = [
  {
    id: 1,
    name: 'Vintage Denim Jacket',
    category: 'Jaket',
    imageFileName: 'general-img-landscape.png',
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
    name: 'Oversize Blazer',
    category: 'Blazer',
    imageFileName: 'general-img-landscape.png',
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
    name: 'Confort Slim Jeans',
    category: 'Jeans',
    imageFileName: 'general-img-landscape.png',
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
    name: 'Silk Blouse',
    category: 'Blusa',
    imageFileName: 'general-img-landscape.png',
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
  { name: 'Womens Fashion\'s Fashion', imageFileName: 'general-img-landscape.png', itemCount: '500+ items' },
  { name: 'Mens Fashion\'s Fashion', imageFileName: 'general-img-landscape.png', itemCount: '350+ items' },
  { name: 'Acessories', imageFileName: 'general-img-landscape.png', itemCount: '200+ items' },
  { name: 'Shoes', imageFileName: 'general-img-landscape.png', itemCount: '180+ items' },
];

// Mapeia os dados para adicionar o caminho da imagem 
export const getProductsWithImages = () => {
  return products.map(product => ({
    ...product,
    imageUrl: productImages[`./assets/products/${product.imageFileName}`]?.default || ''
  }));
};

export const getCategoriesWithImages = () => {
  return categories.map(category => ({
    ...category,
    imageUrl: categoryImages[`./assets/categorias/${category.imageFileName}`]?.default || ''
  }));
};