import { useState } from 'react'
import style_service from './service.module.css'

export default function Services(){
    const [selected, setSelected] = useState('soutenir')
    return(
        <div className={style_service.blog_service}>
           <div className={style_service.blog_service_build}>
                <div className={style_service.service_build}>
                    <h3 className={style_service.service_build_title}>Nous créons des expériences numériques de pointe.</h3>
                    <p className={style_service.body_text}>Vous avez bâti une entreprise incroyable. Nous veillons à ce que les gens s'en souviennent.</p>
                    <p className={style_service.body_text}>Nous aidons les entreprises comme la vôtre à définir ce qui les rend uniques et à en faire une expérience en ligne de premier ordre. Ces expériences stimulent la croissance en ligne et améliorent finalement le résultat net.</p>
                </div>
                <div className={style_service.blog_img_service}>
                    <img src="./image/background_services.jpg" className={style_service.img_service}/>
                </div>
           </div>
           <div className={style_service.What_We_Do}>
                <h2 className={style_service.What_We_Do_title}>Ce que nous faisons.</h2>
                <p className={style_service.What_We_Do_text}>Vous méritez mieux qu'une option unique. Les capacités de notre agence se concentrent sur une chose : la création de sites Web leaders du secteur. Vous trouverez ci-dessous une brève liste des domaines où nous excellons.</p>
                <div className={style_service.What_We_Do_column}>
                    <div>
                        <h3>Stratégie</h3>
                        <ul>
                            <li>Analyse et recherche</li>
                            <li>Ateliers interactifs</li>
                            <li>Stratégie de marque</li>
                            <li>Stratégie de contenu</li>
                            <li>Stratégie numérique</li>
                            <li>Optimisation de conversion</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Conception</h3>
                        <ul>
                            <li>Direction créative</li>
                            <li>Guides de marque</li>
                            <li>Prototypes</li>
                            <li>UI/UX & Web Design</li>
                            <li>Création d'actifs visuels</li>
                            <li>Motion Design</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Développement</h3>
                        <ul>
                            <li>Conception de l'architecture système</li>
                            <li>Développement full-stack</li>
                            <li>Intégrations tierces Optimisation des performances</li>
                        </ul>
                    </div>
                </div>
           </div>
           <div className={style_service.last_part}>
               <h3 className={style_service.last_part_title}>CE QUE NOUS OFFRONS.</h3>
               <div className={style_service.last_part_column}>
                   <div className={style_service.last_part_choix}>
                       <h3 className={style_service.cursore} onClick={()=>setSelected('construire')}>Construire</h3>
                       <h3 className={style_service.cursore} onClick={()=>setSelected('grandir')}>Grandir</h3>
                       <h3 className={style_service.cursore} onClick={()=>setSelected('soutenir')}>Soutenir</h3>
                   </div>
                   <div className={style_service.last_part_middle}>
                        {
                            selected === 'construire' && 
                            (
                                <div>
                                    <h3>QU'EST-CE QUE LA CONSTRUCTION ?</h3>
                                    <p>Construire est une approche de base axée sur la refonte et la réingénierie complètes de votre site Web existant.</p>
                                    <h3>CONSTRUISEZ UN AJUSTEMENT PARFAIT SI...</h3>
                                    <ul>
                                        <li>Vous avez récemment subi un changement de marque, ou prévoyez de subir un changement de marque</li>
                                        <li>Votre site Web actuel rencontre de nombreux problèmes techniques</li>
                                        <li>Votre site Web actuel est obsolète depuis plus de 5 ans</li>
                                    </ul>
                                    <h3>QU'EST-CE QUE CELA COMPREND?</h3>
                                    <p>Un atelier de lancement numérique ou en personne, planification stratégique, conception UI/UX, rédaction, référencement sur site, création d'actifs, développement Web full-stack, intégration CMS, intégrations tierces et contrôle qualité interne.</p>
                                </div>
                            )
                        }
                        {
                            selected === 'grandir' && 
                            (
                                <div>
                                    <h3>QU'EST-CE QUI GRANDIR ?</h3>
                                    <p>Grandir est une approche stratégique rapide axée sur la réalisation de vos objectifs avec un site Web existant.</p>
                                    <h3>GRANDIR EST UN BON CHOIX SI...</h3>
                                    <ul>
                                        <li>Vous êtes principalement satisfait de votre site Web actuel mais souhaitez mieux atteindre des objectifs spécifiques</li>
                                        <li>Vous avez besoin de résultats à court terme</li>
                                        <li>Les revenus de votre entreprise sont étroitement liés aux performances du site Web</li>
                                    </ul>
                                </div>
                            )
                        }
                        {
                            selected === 'soutenir' && 
                            (
                                <div>
                                    <h3>QU'EST-CE QUE L'ASSISTANCE ?</h3>
                                    <p>L'assistance est une approche systématique, proactive et réactive pour garantir que votre site Web est sain et sécurisé.</p>
                                    <h3>LE SUPPORT EST SUPER SI…</h3>
                                    <ul>
                                        <li>Vous êtes satisfait de votre site Web actuel mais n'avez pas la bande passante pour le suivre</li>
                                        <li>Vous n'avez pas de personnel technique en interne</li>
                                        <li>Votre site Web nécessite des mises à jour de contenu périodiques, mais pas constantes</li>
                                    </ul>
                                    <h3>QU'EST-CE QUE CELA COMPREND?</h3>
                                    <p>Audits mensuels des performances du site Web, développement Web complet, sauvegardes quotidiennes, mises à jour fréquentes du système, contrôle qualité en interne et rapports mensuels.</p>
                                </div>
                            )
                        }
                   </div>
                   <div className={style_service.last_part_rigth}>
                        <h3>CE À QUOI VOUS DEVEZ VOUS ATTENDRE</h3>
                        <p>Un gestionnaire de compte sur appel, situé dans le pays</p>
                        <p>Un site web sécurisé et toujours à jour</p>
                        <p>Un investissement de 5000 FCFA/mois ou plus</p>
                   </div>
               </div>
           </div>
        </div>
    )
}