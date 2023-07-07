import React from 'react';

const Footer = ({toggle}) => {
    return (
        <footer className={`flex  ${toggle ? 'bg-base-300' : 'bg-slate-500 text-white'}`}>
            <div className='mx-auto py-20 text-center'>
            <img src="https://i.ibb.co/SrW2q87/logo-1.png" className="w-44 mb-4" />
            <p>© 2018-2023 Learn Go
                <br />
                All rights reserved.
                <br />
                email: stewieboyyy@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;