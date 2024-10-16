import { useParams } from 'react-router-dom'
import s from './ProductPage.module.css'
import { products } from '../../data/data';

export function ProductPage(){
    const {id} = useParams();
    const product = products.find(product => product.id == id);
    return(
        <section className={s.product}>
            <div className={s.product__img}>
                <img src={product.image} alt="" />
            </div>
            <div className={s.product__about}>
                <h1 className={s.product__name}>
                {product.name}
                </h1>
                <p className={s.product__price}>
                {product.price} руб.
                </p>
            </div>
        </section>
    )
}