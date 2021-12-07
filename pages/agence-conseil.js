import style_agency from './agency.module.css'
export default function AgenceConseil(){
    return(
        <div>
            <p className={style_agency.blog_agency_title}>CONCEPTION ET DÉVELOPPEMENT DE SITES WEB POUR LES AGENCES ET LES CONSULTANTS</p>
            <h1 className={style_agency.blog_agency_par}>Nous créons des sites portfolio pour les cabinets de conseil qui se démarquent et communiquent clairement .</h1>
            <div className={style_agency.blog_background_agency}>
                <div className={style_agency.blog_background_agency1}>

                </div>
                <div className={style_agency.blog_background_agency2}>
                    
                </div>
            </div>
            <div className={style_agency.agency_column}>
                <div className={style_agency.agency_column_text}>
                    <h3>Votre travail ou service présenté de la manière la plus efficace possible.</h3>
                    <p>Ce que vous avez accompli et ce que vous faites est précieux. Nous vous aiderons à communiquer cela aux clients potentiels de manière efficace.</p>
                    <h5>Rédaction</h5>
                    <p>Nous pouvons aider votre entreprise en rédigeant une copie marketing efficace pour toutes les pages de destination clés que vous désirez.</p>
                </div>
                <div className={style_agency.blog_img_agency}>
                    <img src="./image/marketing.jpg" className={style_agency.agency_img} />
                </div>
            </div>
            <div className={style_agency.agency_column}>
                <div className={style_agency.blog_img_agency}>
                    <img src="./image/freedom.jpg" className={style_agency.agency_img} />
                </div>
                <div className={style_agency.agency_column_text}>
                    <h3>Conçu pour répondre aux exigences de votre entreprise en pleine croissance.</h3>
                    <p>Votre entreprise est en pleine croissance et votre industrie est en constante évolution. Nos thèmes personnalisés sont conçus pour évoluer avec les exigences de votre entreprise.</p>
                </div>
            </div>
            <div className={style_agency.agency_column}>
                <div className={style_agency.agency_column_text}>
                    <h3>Un design qui vous différencie sur un marché concurrentiel.</h3>
                    <p>Ce que vous avez accompli et ce que vous faites est précieux. Nous vous aiderons à communiquer cela aux clients potentiels de manière efficace.</p>
                </div>
                <div className={style_agency.blog_img_agency}>
                    <img src="./image/makeup.jpg" className={style_agency.agency_img} />
                </div>
            </div>
        </div>
    )
}