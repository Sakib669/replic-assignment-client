import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from '../../hooks/useAdmin';


const Products = () => {
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const[x, setX] = useState([]);
    // console.log(x);

    useEffect((() => {
        axios('/bags.json')
        .then(data => setX(data.data))
    }) ,[])

    const addToCart = (lecture) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/login');
                    return;
                }
            })
        }


        const productData = { lecture, email: user.email, statue: 'pending' }
        axios.post('http://localhost:5000/classes-cart', productData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        '',
                        'Added to Cart',
                        'success'
                    )
                }
            })

    }




    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 mx-40 gap-20 my-8">
            {
                x?.map(product =>
                    <div key={product._id} className={`border rounded-xl border-slate-300 w-[300px] p-4`}>
                        <img src={product.image} className="rounded-t-xl w-auto mb-4" />
                        <div className={`space-y-2`}>
                            <h3 className="text-2xl font-bold">{product.type}</h3>
                            <p>Color {product.color}</p>
                            <p>Price: ${product.price}</p>
                            <p>Materials : {product.material}</p>
                            <button disabled={isAdmin.length > 0 || isAdmin?.role == 'admin'} onClick={() => addToCart(product)} className="btn btn-neutral py-1">Add To Cart</button>

                        </div>
                    </div>)
            }

        </section>
    );
};

export default Products;