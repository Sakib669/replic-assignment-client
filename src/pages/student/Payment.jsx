const stripePromise = loadStripe(import.meta.env.VITE_stripe_test_key);
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Payment = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [price, setPrice] = useState(null);
    const [lectureId, setLectureId] = useState(null);
    const [lectureId2, setLectureId2] = useState(null);
    axiosSecure(`http://localhost:5000/classes-cart/${id}`)
    .then(res => {
        setPrice(res.data?.lecture?.price);
        setLectureId2(res.data?.lecture);
        setLectureId(res.data?._id);
    })

    return (
        <section className='mx-40 min-h-screen'>
            <Elements  stripe={stripePromise}>
                <CheckoutForm id={id} lecture={lectureId2} lectureId={lectureId} price={price} />
            </Elements>
        </section>
    );
};

export default Payment;