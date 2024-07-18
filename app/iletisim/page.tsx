import React from 'react'

const bilgiler = () => {
    return (
        <div id='ulaş' className='flex flex-col items-center justify-center   gap-8'>
            <div className='h-full w-full flex-1 max-md:h-8 '>
                <iframe className='max-md:h-96 '   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.91770885815!2d41.992601344174375!3d40.54522514373132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40692163422f6969%3A0xf8d5e9f620982b7d!2sOltu%20Belediyesi%20Sosyal%20Tesisleri!5e0!3m2!1str!2str!4v1721341458509!5m2!1str!2str" width="100%" height="580" style={{ backgroundColor: "black" }} loading="lazy" ></iframe>
            </div>
            <h4 className='text-6xl max-md:text-4xl font-fontpopins'>-İLETİŞİM-</h4>
            <div className='flex flex-col items-center'>
                <p className='text-xl max-md:text-lg font-semibold'>+90 0530 746 4899</p>
                <p className='text-xl max-md:text-lg font-semibold'>+90 0544 782 4655</p>
                <p className='text-2xl max-md:text-lg'>oltubelediyesi@gmail.com</p>
            </div>
            <p className='text-center'>Cumhuriyet, Cumhuriyet Blv. No:144, 25400 Oltu/Erzurum</p>
            <div className='flex gap-5 '>
                <a title='belediye instagram' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.instagram.com/arlanmedya/">
                    <img src="instagram.svg" alt="qr menü instagram" />
                </a>
                <a title='belediye facebook' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo">
                    <img src="facebook.svg" alt="qr menü facebook" />
                </a>
                <a title='belediye x' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.linkedin.com/company/arlan-medya">
                    <img src="x.svg" alt="qr menü linkedn" />
                </a>
                
            </div>
            <div>
            <p className="text-sm">-Website designed by <a href="https://arlanmedya.com/" className="text-blue-500 hover:underline">Arlan Medya-</a></p>
            </div>
        </div>
    )
}

export default bilgiler