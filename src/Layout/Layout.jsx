import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from '../pages/Home/Home';
import ItemId from '../components/ItemCardId/ItemCardId';
import NotFound from '../pages/NotFound/NotFound';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Routes>
                    <Route path='/' element={<Home/>} />    
                    <Route path='/:id' element={<ItemId/>} />    
                    <Route path='*' element={<NotFound/>} />    
            </Routes>
            <Footer/>
        </div>
    );
}

export default Layout;
