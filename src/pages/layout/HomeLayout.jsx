import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const HomeLayout = () => {
    const [toggle, setToggle] = useState(true);
    console.log(toggle);
    return (
        <main>
            <Navbar toggle={toggle} setToggle={setToggle} />
            <section className={`${toggle ? 'bg-transparent' : 'bg-slate-400'}`}>
            <Outlet />
            </section>
            <Footer toggle={toggle} />
        </main>
    );
};

export default HomeLayout;