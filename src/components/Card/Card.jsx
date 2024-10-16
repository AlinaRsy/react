import { Link } from 'react-router-dom'
import s from './Card.module.css'
export function Card({id, image = 'https://avatars.mds.yandex.net/i?id=28be8a0aa3b48def5ed2051ac8fe460cfc3518cf-4577151-images-thumbs&n=13', name = 'что-то', price = 'нет в наличии'}){
    return(
        <div className={s.card}>
            <div className={s.image}>
                <img src={image} alt="#" />
            </div>
            <p className={s.name}>{name}</p>
            <p className={s.price}>{price} руб</p>
            <Link className={s.btn} to={`${id}`}>Подробнее</Link>
        </div>
    )
}


