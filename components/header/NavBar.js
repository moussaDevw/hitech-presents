import Link from "next/link"

export const NavBar = ()=>{
    return(
       <div>
           <div className="hitech_text">
            <p>HITECH-PRESENT</p>
           </div>
            <div className="blog_navbar">
                <nav className="navbar_pc">
                    <Link href="/">
                        <a>
                            Acceuil
                        </a>
                    </Link>
                    <Link href="services">
                        <a>Service</a>
                    </Link>
                    <Link href="agence-conseil">
                        <a>Agence & Conseil</a>
                    </Link>
                    <Link href="pourquoi-nous">
                        <a>Pourquoi nous</a>
                    </Link>
                    <div class="animation start-home"></div>
                </nav>
                <nav className="navbar_mobile">
                    <Link href="/">
                        <a>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_580)">
                        <circle cx="24" cy="20" r="20" fill="#F2F2F2"/>
                        <path d="M30 25.9999C30 26.1989 29.921 26.3896 29.7803 26.5303C29.6397 26.6709 29.4489 26.7499 29.25 26.7499H18.75C18.5511 26.7499 18.3603 26.6709 18.2197 26.5303C18.079 26.3896 18 26.1989 18 25.9999V19.2499H15.75L23.4952 12.2089C23.6333 12.0833 23.8133 12.0137 24 12.0137C24.1867 12.0137 24.3667 12.0833 24.5048 12.2089L32.25 19.2499H30V25.9999Z" fill="#828282"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_2_580" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_580"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_580" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        </a>
                    </Link>
                    <Link href="services">
                        <a>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_590)">
                            <circle cx="24" cy="20" r="20" fill="#F0F0F6"/>
                            <g clip-path="url(#clip0_2_590)">
                            <path d="M32.5 15.287V15.5H27V11H27.2603C27.5338 11 27.7962 11.0889 27.9896 11.2471L32.198 14.6904C32.3913 14.8486 32.5 15.0632 32.5 15.287ZM26.6562 16.625C26.0891 16.625 25.625 16.2453 25.625 15.7812V11H17.0312C16.4617 11 16 11.3778 16 11.8438V28.1562C16 28.6222 16.4617 29 17.0312 29H31.4688C32.0383 29 32.5 28.6222 32.5 28.1562V16.625H26.6562ZM21.294 25.0803C21.2732 25.0984 21.2482 25.1131 21.2204 25.1234C21.1926 25.1337 21.1627 25.1394 21.1322 25.1402C21.1018 25.141 21.0714 25.1368 21.0429 25.1281C21.0144 25.1193 20.9883 25.106 20.966 25.0889L18.1788 22.951C18.1557 22.9332 18.1372 22.9118 18.1246 22.888C18.112 22.8641 18.1055 22.8384 18.1055 22.8125C18.1055 22.7865 18.112 22.7608 18.1246 22.737C18.1372 22.7132 18.1557 22.6917 18.1788 22.674L20.966 20.5361C20.9883 20.519 21.0144 20.5057 21.0429 20.4969C21.0714 20.4881 21.1018 20.484 21.1322 20.4848C21.1627 20.4856 21.1926 20.4913 21.2204 20.5016C21.2482 20.5119 21.2732 20.5265 21.294 20.5447L22.1353 21.2789C22.1566 21.2975 22.173 21.3194 22.1838 21.3432C22.1945 21.3671 22.1993 21.3925 22.1978 21.4179C22.1963 21.4433 22.1886 21.4682 22.1751 21.4911C22.1616 21.514 22.1426 21.5345 22.1193 21.5513L20.3678 22.8125L22.1193 24.0737C22.1426 24.0905 22.1616 24.111 22.1751 24.1339C22.1886 24.1568 22.1963 24.1817 22.1978 24.2071C22.1993 24.2325 22.1945 24.2579 22.1838 24.2818C22.173 24.3056 22.1566 24.3275 22.1353 24.3461L21.294 25.0803V25.0803ZM23.4981 26.8549L22.3185 26.5747C22.2594 26.5607 22.2095 26.528 22.1799 26.4839C22.1502 26.4398 22.1432 26.3878 22.1603 26.3394L24.8003 18.8995C24.8175 18.8511 24.8574 18.8103 24.9113 18.7861C24.9652 18.7618 25.0287 18.756 25.0878 18.7701L26.2674 19.0503C26.2967 19.0572 26.324 19.0688 26.3478 19.0844C26.3716 19.1 26.3914 19.1192 26.406 19.1411C26.4207 19.1629 26.43 19.1869 26.4334 19.2117C26.4367 19.2365 26.4341 19.2616 26.4256 19.2855L23.7856 26.7255C23.7771 26.7494 23.7629 26.7718 23.7439 26.7913C23.7248 26.8107 23.7013 26.8269 23.6746 26.8389C23.6479 26.851 23.6186 26.8586 23.5883 26.8613C23.558 26.864 23.5274 26.8619 23.4981 26.8549V26.8549ZM30.4071 22.951L27.6199 25.0889C27.5977 25.106 27.5716 25.1193 27.5431 25.1281C27.5145 25.1368 27.4842 25.141 27.4537 25.1402C27.4233 25.1394 27.3933 25.1337 27.3655 25.1234C27.3378 25.1131 27.3128 25.0984 27.2919 25.0803L26.4506 24.346C26.4293 24.3275 26.4129 24.3056 26.4021 24.2817C26.3914 24.2579 26.3866 24.2325 26.3881 24.2071C26.3896 24.1817 26.3973 24.1568 26.4108 24.1338C26.4243 24.1109 26.4433 24.0905 26.4666 24.0737L28.2182 22.8125L26.4666 21.5513C26.4433 21.5345 26.4243 21.514 26.4108 21.4911C26.3974 21.4682 26.3896 21.4433 26.3882 21.4179C26.3867 21.3925 26.3914 21.3671 26.4022 21.3432C26.4129 21.3194 26.4294 21.2975 26.4506 21.2789L27.292 20.5447C27.3128 20.5265 27.3378 20.5119 27.3656 20.5016C27.3934 20.4913 27.4233 20.4856 27.4538 20.4848C27.4842 20.484 27.5146 20.4881 27.5431 20.4969C27.5716 20.5057 27.5977 20.519 27.62 20.5361L30.4072 22.674C30.4303 22.6917 30.4488 22.7132 30.4614 22.737C30.474 22.7608 30.4805 22.7865 30.4805 22.8125C30.4805 22.8385 30.474 22.8641 30.4613 22.888C30.4487 22.9118 30.4303 22.9332 30.4071 22.951V22.951Z" fill="#767676"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_590" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_590"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_590" result="shape"/>
                            </filter>
                            <clipPath id="clip0_2_590">
                            <rect width="16.5" height="18" fill="white" transform="translate(16 11)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        </a>
                    </Link>
                    <Link href="agence-conseil">
                    <a>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_602)">
                        <circle cx="24" cy="20" r="20" fill="#F0F0F6"/>
                        <path d="M30.75 12.5C19.5 12.5 18 23 17.25 27.5H18.7485C19.248 25.0003 20.4983 23.6255 22.5 23.375C25.5 23 27.75 20.375 28.5 18.125L27.375 17.375L28.125 16.625C28.875 15.875 29.628 14.75 30.75 12.5Z" fill="#767676"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_2_602" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_602"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_602" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        </a>
                    </Link>
                    <Link href="pourquoi-nous">
                    <a>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_598)">
                        <circle cx="24" cy="20" r="20" fill="#F0F0F6"/>
                        <path d="M21.75 20.75V23H26.25V20.75H31.5V26C31.5 26.1989 31.421 26.3897 31.2803 26.5303C31.1397 26.671 30.9489 26.75 30.75 26.75H17.25C17.0511 26.75 16.8603 26.671 16.7197 26.5303C16.579 26.3897 16.5 26.1989 16.5 26V20.75H21.75ZM23.25 19.25H24.75V21.5H23.25V19.25ZM20.25 14.75V12.5C20.25 12.3011 20.329 12.1103 20.4697 11.9697C20.6103 11.829 20.8011 11.75 21 11.75H27C27.1989 11.75 27.3897 11.829 27.5303 11.9697C27.671 12.1103 27.75 12.3011 27.75 12.5V14.75H30.75C30.9489 14.75 31.1397 14.829 31.2803 14.9697C31.421 15.1103 31.5 15.3011 31.5 15.5V19.25H26.25V17.75H21.75V19.25H16.5V15.5C16.5 15.3011 16.579 15.1103 16.7197 14.9697C16.8603 14.829 17.0511 14.75 17.25 14.75H20.25ZM21.75 13.25V14.75H26.25V13.25H21.75Z" fill="#767676"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_2_598" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_598"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_598" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        </a>
                    </Link>
                </nav>
            </div>
       </div>
    )
}