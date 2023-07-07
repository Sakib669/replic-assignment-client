import React from 'react';
import Footer from '../shared/Footer';
import DashboardNavbar from './DashboardNavbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const toggle = true;
    return (
        <main>
            <DashboardNavbar />
            <Outlet />
            <Footer toggle={toggle} />
        </main>
    );
};

export default Dashboard;