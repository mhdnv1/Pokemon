import ItemCard from '../../components/ItemCard/ItemCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../../Layout/Header/Header';
import Pogination from '../../components/Pogination/Pogination';

const Home = () => {
    const [items, setItem] = useState([])
    const [current, setCurrent] = useState(1)
    const [postPerPage, setPerPost] = useState(8)
    const lastPostIndex = current * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = items.slice(firstPostIndex, lastPostIndex)
    useEffect(() => {
        getItems()
    }, [])
    const getItems = () => {
        let items = []
        for (let i = 1; i < 50; i++) {
            items.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(items.map((item) => axios.get(item))).then((res) => setItem(res)).catch((err) => alert(err))
    };
    const itemsFilter = (name) => {
        let filterItems = []
        if (name === '') {
            getItems()
        }
        for (const i in items) {
            if (items[i].data.name.includes(name)) {
                filterItems.push(items[i])
            }
        }
        setItem(filterItems)
    }
    return (
        <div className="home">
            <div className="container">
                <input type="text" onChange={(e) => itemsFilter(e.target.value)} />
                <ul className="home__cards">
                    {
                        currentPosts.map((item) => (
                            <div key={item.data.id} className="home__card">
                                <ItemCard
                                    name={item.data.name}
                                    image={item.data.sprites.front_default} />
                                <Link to={`/${item.data.id}`}><button>Подробнее</button></Link>
                            </div>

                        ))
                    }
                </ul>
                <Pogination 
                totalPosts={items.length} 
                postPerPage={postPerPage} 
                setCurrent={setCurrent}
                currentPage={current} />
            </div>
        </div>
    );
}

export default Home;
