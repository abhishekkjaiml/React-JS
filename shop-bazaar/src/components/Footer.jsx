import visa_logo from '../assets/visa_logo.png'
import Gpay_logo from '../assets/Gpay_logo.png'
import Mastercard_logo from '../assets/Mastercard_logo.webp'
import paytm_logo from '../assets/paytm_logo.png'
import apple_logo from '../assets/apple_logo.png'

const Footer = () => {
  return (
    <footer className='w-full h-auto flex flex-wrap bg-slate-900 text-white text-[15px] p-10 justify-center'>
        <div    className='flex flex-wrap grid-5 border-b border-gray-600 pb-5'>
            <div    className='flex flex-col w-[18vw] gap-2'>
                <img    src=''  alt='Logo'  className='size-10' />
                <p  className='w-[15vw]'>Your one-stop shop for the best products at the best prices. Shop more, save more</p>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold'>Shop</li>
                    <li>All Products</li>
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Deals</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold'>Customer Service</li>
                    <li>Track Order</li>
                    <li>Returns & Refunds</li>
                    <li>Shipping Info</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold'>Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>Affiliate Program</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold'>Help</li>
                    <li>Help Center</li>
                    <li>Tearms & Condition</li>
                    <li>Privacy Policy</li>
                    <li>Deals</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
        <div    className='flex flex-wrap  mt-5 items-center w-[90vw] justify-between  '>
            <div    className='flex'>
                <p  className=''>ⓒ 2026. All rights reserved</p>
            </div>
            <div    className='flex flex-wrap    gap-5 '>
                <img    src={visa_logo} alt='logo'   className='w-12 h-8 rounded'/>
                <img    src={Mastercard_logo} alt='logo'   className='w-12 h-8 rounded'/>
                <img    src={Gpay_logo} alt='logo'   className='w-12 h-8 rounded'/>
                <img    src={paytm_logo} alt='logo'   className='w-12 h-8 rounded'/>
                <img    src={apple_logo} alt='logo'   className='w-12 h-8 rounded'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer