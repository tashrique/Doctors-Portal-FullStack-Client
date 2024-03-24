import React from 'react';
import bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className=''>

            <div className="p-10 bg-[#051a45] text-white py-28" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}>
                <div className='flex justify-around items-'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Emergency Checkup</a>
                        <a className="link link-hover">Monthly Checkup</a>
                        <a className="link link-hover">Weekly Checkup</a>
                        <a className="link link-hover">Deep Checkup</a>
                    </nav>

                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Oral Health</h6>
                        <a className="link link-hover">Fluoride Treatment</a>
                        <a className="link link-hover">Cavity Filling</a>
                        <a className="link link-hover">Teath Whitening</a>
                    </nav>

                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Our Address</h6>
                        <a className="link link-hover">New York - 101010 Hudson</a>

                    </nav>
                </div>

            </div>

            <div>
                <p className="text-center text-white py-4">© 2024 Doctors Portal. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;