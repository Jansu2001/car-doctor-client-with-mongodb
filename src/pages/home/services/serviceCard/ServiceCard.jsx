
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ card }) => {
    const { _id,title, img, price } = card;
    return (
        <div className="">
            <div className="card card-compact h-full bg-base-100 shadow-xl">
                <figure>
                    <img className="h-[250px] rounded-lg" src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className="text-[#FF3811] font-bold">Price: ${price}</p>
                    <div className="card-actions justify-end text-[#FF3811]">
                        <Link to={`/check-out/${_id}`}><FaArrowRight></FaArrowRight></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;