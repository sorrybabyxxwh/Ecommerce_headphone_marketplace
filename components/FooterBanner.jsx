import React from 'react';
import Link from 'next/link';

import { urlFor } from "../lib/client";

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime,
    smallText, midText, buttonText, product, image, desc}}) =>{
    return(
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>{discount}</p>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <p>{saleTime}</p>
                </div>
                <div className='right'>
                    <img src={urlFor(image)} alt="footer-banner-image" className='footer-banner-image'/>
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <Link href={`/product/${product}`}>
                        <button type='button'>{buttonText}</button>
                    </Link>

                </div>


            </div>
        </div>
    )
}
export default FooterBanner