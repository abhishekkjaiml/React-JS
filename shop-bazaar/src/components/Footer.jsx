import visa_logo from '../assets/visa_logo.png'
import Gpay_logo from '../assets/Gpay_logo.png'
import Mastercard_logo from '../assets/Mastercard_logo.webp'
import paytm_logo from '../assets/paytm_logo.png'
import apple_logo from '../assets/apple_logo.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className=' w-full h-auto flex flex-wrap bg-slate-900 text-white text-[15px] p-10 justify-center'>
        <div    className='flex flex-wrap grid-5 border-b border-gray-600 pb-5'>
            <div    className='flex flex-col w-[18vw] gap-2'>
                <img    src={logo}  alt='Logo'  className='w-50 bg-gray-700 rounded-md' />
                <p  className='w-[15vw]'>Your one-stop shop for the best products at the best prices. Shop more, save more</p>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold text-[20px]'>Shop</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>All Products</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>New Arrivals</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Best Sellers</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Deals</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Gift Cards</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold text-[20px]'>Customer Service</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Track Order</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Returns & Refunds</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Shipping Info</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>FAQs</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold text-[20px]'>Company</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>About Us</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Careers</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Blog</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Press</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Affiliate Program</li>
                </ul>
            </div>
            <div    className='flex flex-col w-[18vw]'>
                <ul className='flex flex-col gap-2'>
                    <li className='font-semibold text-[20px]'>Help</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Help Center</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Tearms & Condition</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Privacy Policy</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Deals</li>
                    <li className='hover:text-indigo-700 cursor-pointer'>Cookie Policy</li>
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