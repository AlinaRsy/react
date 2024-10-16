import { Btn } from '../Btn/Btn'
import s from './Banner.module.css'
export function Banner(){
    return(
        <section className={s.banner}>
            <h1 className={s.title}>
                Lorem ipsum dolor sit.
            </h1>
            <Btn/>
        </section>
    )
}