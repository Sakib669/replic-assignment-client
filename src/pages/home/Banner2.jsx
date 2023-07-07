import axios from 'axios';
import { SunnyMorning } from 'moving-letters'
import { useEffect, useState } from 'react';



const Banner2 = () => {
    const [data, setData] = useState([]);
    const links = [
        "https://i.postimg.cc/HscpBgCX/medical.jpg",
        "https://i.postimg.cc/fL8wgWLj/foundation.jpg",
        "https://i.postimg.cc/3RxhpMBy/varisty.jpg",
        "https://i.postimg.cc/xT0vz6rw/chem.jpg"
    ]
    useEffect(() => {
        axios.get('http://localhost:5000/classes/banner2')
        .then(res => setData(res.data))
    }, [])
    return (
        <article className=' my-10'>
            
            <span className='font-bold text-center mb-10 '><SunnyMorning  text={`Popular Classes`}/></span>
            <figure className='grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-5'>
                {
                    data?.map((item, index) =>
                        <img key={index} className='shadow-neutral-400 shadow-2xl w-[400px] h-[250px] object-cover ' src={item.image} />)
                }
            </figure>
        </article>
    );
};

export default Banner2;