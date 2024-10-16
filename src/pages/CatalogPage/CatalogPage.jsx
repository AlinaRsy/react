import { Card } from '../../components/Card/Card'
import s from './CatalogPage.module.css'
import { products } from '../../data/data'
import { Search } from '../../components/Search/Search'
import { useState } from 'react'
export function CatalogPage(){
    const [query, setQuery] = useState('');
    function handleChange(e){
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return(
        <section>
            <div className="container">
                <Search handleChange={handleChange}/>
                <div className={s.catalog__inner}>
                   {
                        filteredProducts.length ?
                        filteredProducts.map((product)=>{
                            return(
                                <Card {...product}/>
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по завпросу "{query}"</p>
                    }
            </div>
            </div>
           
        </section>
    )
}