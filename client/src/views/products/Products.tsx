import './Products.scss';
import { ProductItemProps } from '../../types/products';
import ProductItem from './ProductItem';

export default function Products() {

    let productsList: ProductItemProps[] = [
        {
            id: 100, 
            title: 'Nike Vomero 17 Talaria',
            price: '120.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/230b8e64-8eb0-4568-aaed-d0142f97dc70/tenis-de-correr-en-pavimento-vomero-17-talaria-gKRN8M.png'
            ],
            description: 'Comodidad y soporte para largas distancias.'
        },
        {
            id: 101, 
            title: 'Nike InfinityRN 4',
            price: '140.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/083db8cd-ef0f-4fbb-9fbf-9da0be98f802/tenis-de-correr-en-carretera-infinityrn-4-DFLSP1.png'
            ],
            description: 'Diseño moderno y ajuste seguro.'
        },
        {
            id: 102, 
            title: 'Nike Invincible 3 Blanco',
            price: '160.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/bc7ba009-3113-4645-aafc-1cdb4b903b69/tenis-de-correr-en-pavimento-invincible-3-WWqs3BKC.png'
            ],
            description: 'Diseño moderno y ajuste seguro.'
        },
        {
            id: 103, 
            title: 'Nike Invincible 3 Azul',
            price: '160.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/6872bd5a-ded9-42be-9226-e0bd00713f61/tenis-de-correr-en-pavimento-invincible-3-8tDZXB.png'
            ],
            description: 'Ideal para correr en pavimento.'
        },
        {
            id: 104, 
            title: 'Nike InfinityRN 4 Negro',
            price: '140.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/9f1f2db7-fc8a-4f79-ad35-65cf9f40b556/tenis-de-correr-en-pavimento-infinityrn-4-jJgXNj.png'
            ],
            description: 'Resistencia y estilo en cada paso.'
        },
        {
            id: 105, 
            title: 'Nike Invincible 3 Rojo',
            price: '160.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/772341cc-ed36-4eed-bb9e-0da296178b4b/tenis-de-correr-en-pavimento-invincible-3-8tDZXB.png'
            ],
            description: 'Estilo vibrante y tecnología premium.'
        },
        {
            id: 106, 
            title: 'Nike Vomero 17 Talaria Edición Especial',
            price: '125.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/230b8e64-8eb0-4568-aaed-d0142f97dc70/tenis-de-correr-en-pavimento-vomero-17-talaria-gKRN8M.png'
            ],
            description: 'Edición especial para corredores exigentes.'
        },
        {
            id: 107, 
            title: 'Nike InfinityRN 4 Running',
            price: '145.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/083db8cd-ef0f-4fbb-9fbf-9da0be98f802/tenis-de-correr-en-carretera-infinityrn-4-DFLSP1.png'
            ],
            description: 'Perfectos para corredores de carretera.'
        },
        {
            id: 108, 
            title: 'Nike Invincible 3 Premium',
            price: '180.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/bc7ba009-3113-4645-aafc-1cdb4b903b69/tenis-de-correr-en-pavimento-invincible-3-WWqs3BKC.png'
            ],
            description: 'Construcción de calidad y diseño sofisticado.'
        },
        {
            id: 109, 
            title: 'Nike Invincible 3 Clásico',
            price: '150.00',
            imgs: [
                'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_381,c_limit/6872bd5a-ded9-42be-9226-e0bd00713f61/tenis-de-correr-en-pavimento-invincible-3-8tDZXB.png'
            ],
            description: 'Un diseño atemporal para todos.'
        }
    ];    

  return (
    <div className="products">
      <div className="products__box">
        <h1>Products</h1>

        <div className="products__list">
            { productsList.map((product) => (
                <ProductItem key={product.id} product={product} />
            )) }
        </div>
      </div>
    </div>
  )
}
