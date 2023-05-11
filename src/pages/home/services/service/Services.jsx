import { useEffect, useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const Services = () => {

    const [serviceCard, setServiceCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceCard(data))

    }, [])

    return (
        <div>
            <div className="text-center ">
                <h1 className="text-[#FF3811] text-2xl font-bold">Services</h1>
                <h1 className="text-[#151515] text-3xl lg:text-5xl font-bold pt-3">Our Service Area</h1>
                <p className="text-[#737373] mx-auto lg:w-1/2 pt-4">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid md:gird-cols-2 lg:grid-cols-3 gap-3 pt-4">
                {
                    serviceCard.map(card => <ServiceCard
                        key={card._id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center pt-5 mb-4">

                <button className="btn btn-outline font-bold text-[#FF3811] lg:w-1/4">More Service</button>
            </div>
        </div>
    );
};

export default Services;