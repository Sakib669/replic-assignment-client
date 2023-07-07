import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const imgURL = 'https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/404-error.svg';
    return (
        <div className="hero min-h-screen"  style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <button onClick={() => navigate('/')} className="btn btn-primary">Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;