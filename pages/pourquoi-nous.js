import style_why from './why.module.css'
export default function WhyWe(){
    return(
        <div className={style_why.blog_whyWe}>
            <h1>Pourquoi HITECH-PRESENT ?</h1>
            <h2>Nous livrons des sites Web mémorables.</h2>
            <div className={style_why.blog_whyWe_text}>
                <h3 className={style_why.blog_whyWe_title}>Des victoires mémorables, à chaque fois.</h3>
                <div className={style_why.blog_whyWe_column}>
                    <p className={style_why.blog_whyWe_par}>
                    Nous aidons les entreprises, grandes et petites, à découvrir ce qui les rend uniques et à les canaliser dans une expérience mémorable qui surpasse et surpasse leurs concurrents en ligne.
                    </p>
                    <p className={style_why.blog_whyWe_par}>Nous gardons notre processus simple, transparent et axé sur le client. Nous évitons les mots à la mode et les conneries – nous dépensons notre énergie plutôt à nous concentrer sur la création d'expériences utilisateur de premier ordre qui se traduisent par des choses qui comptent.</p>
                </div>
            </div>
            <div className={style_why.blog_descrition}>
                <div>
                    <h3>Le service le plus réactif et le plus amical que vous ayez probablement jamais eu .</h3>
                    <p>Les clients nous embauchent en fonction de notre mérite - ils nous aiment pour notre accessibilité. Nous nous efforçons d'être incroyablement réactifs à vos besoins afin que vous ne vous sentiez jamais ignoré et que vous vous sentiez toujours pris en charge.</p>
                </div>
                <div>
                    <img src="./image/marketing.jpg" className={style_why.img_pc} />
                    <img src="./image/mark.jpg" className={style_why.img_mobile} />
                </div>
            </div>
            <div className={style_why.blog_descrition}>
                <div>
                    <img src="./image/2457347-bell.jpg" className={style_why.img_mobile} />
                    <img src="./image/2457347.jpg" className={style_why.img_pc} />
                </div>
                <div>
                    <h3>Vous êtes fier de votre marque. Maintenant, vous serez fier de votre site Web .</h3>
                    <p>Vous avez construit une marque incroyable - votre nouveau site Web le reflétera et le fera même passer au niveau supérieur. Chaque élément de votre nouveau site s'alignera parfaitement avec la voix et les valeurs de votre marque. (Découvrez-vous toujours votre marque ? Nous pouvons également vous aider.)</p>
                </div>
            </div>
            <div className={style_why.blog_descrition}>
                <div>
                    <h3>Des résultats massifs qui comptent vraiment .</h3>
                    <p>Vous avez des objectifs financiers à atteindre. Nous comprenons tout à fait cela. C'est pourquoi nous nous concentrons sur et améliorons considérablement les mesures qui comptent : les conversions, les ventes et l'engagement. Dites-nous vos KPI et nous vous créerons un site Web qui les fera sortir du parc.</p>
                </div>
                <div>
                    <img src="./image/5468690-lanczos3.jpg" className={style_why.img_mobile} />
                    <img src="./image/5468690.jpg" className={style_why.img_pc} />
                </div>
            </div>
        </div>
    )
}