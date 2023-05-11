import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";



const CheckOut = () => {
    const loader = useLoaderData()

    const { user } = useContext(AuthContext)
    const { _id, title, price, img } = loader;


    const handleBookNow = (event) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const bookService = {
            customerName:
                firstName +
                lastName,
            phone,
            email,
            service_id: _id,
            img: img,
            service: title,
            price: price,
            date: date,
            message: message,
        }
        console.log(bookService);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Thank You',
                        'Your Just Booked Our Services',
                        'success'
                    )
                }
            })



    }



    return (
        <div>
            <h1>This is Check Out </h1>
            <h3>Name: {title}</h3>

            <form onSubmit={handleBookNow}>

                <div className="card-body bg-base-200 lg:p-20 ">
                    <div className="lg:flex gap-5 w-full">
                        <div className="form-control lg:w-1/2">

                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="firstname" placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="lastname" placeholder="Last Name" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="lg:flex gap-5 w-full">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="lg:flex gap-5 w-full">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Ammount</span>
                            </label>
                            <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control ">

                        <input type="text" name="message" placeholder="Message" className="input input-bordered h-48 input-lg w-full " />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn bg-[#FF3811]" type="submit" value="Confirm Order" />

                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;