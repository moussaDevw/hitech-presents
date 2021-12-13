import React from 'react'
import style_footer from './footer.module.css'
export const Footer = ()=>{
    return(
        <address className={style_footer.blog_footer}>
            <div>
                <h3>HITECH-PRESENT</h3>
                <p>
                    <a href='pourquoi-nous' className="text-white">Pourquoi nous ?</a>
                </p>
                <p>
                    <a href='services' className="text-white">Nos services</a>
                </p>
            </div>
            <div>
                <h3>CONTACT</h3>
                <p>78 010 54 16</p>
                <p>Hitech@hitech-present.com</p>
            </div>
            <div>
                <h3>HTP</h3>
                <p>
                Hitect-present est une startup basée à Dakar,SN. Elle a été crée en 2021 et a pour vocation de contribuer à la révolution numérique en cours dans le but de créer mais aussi d’accompagner des jeunes porteurs de projet à créer des produits innovants à forte valeur ajoutée.
                </p>
            </div>
        </address>
    )
}