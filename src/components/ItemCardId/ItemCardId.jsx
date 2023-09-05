import React , {useEffect , useState} from 'react';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';

const ItemId = () => {
    const {id} = useParams()
    const [item , setItem] = useState({})
    useEffect(()=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({data})=> setItem(data))
        .catch((err)=> alert(err.message))
    }, [])
    return (
        <div className="item__id">
            <div className="container">
               <div  key={item.id} className="cards">
                {
                    <div >
                        <img src={item.sprites && item.sprites.front_default} alt="" />
                        <h3>name :{item.name}</h3>
                        <h3>order:{item.order}</h3>
                        <h3>height:{item.height}</h3>
                        <h3>weight:{item.weight}</h3>
                    </div>
                }
              </div>
            </div>
        </div>
    );
}

export default ItemId;
