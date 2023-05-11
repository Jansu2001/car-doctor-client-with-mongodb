import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Providers/AuthProviders";
import BookingsRow from "../bookingsRow/BookingsRow";
import Swal from "sweetalert2";


const Bookings = () => {

    const { user } = useContext(AuthContext)
    const URL = (`http://localhost:5000/bookings?email=${user?.email}`)

    const [bookings, setBookings] = useState([])


    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [URL])


    const handleCancle = (_id) => {
        console.log(_id);


        const proceed = confirm('are you sure you want to delete ')

        if (proceed) {

            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining=bookings.filter(booking=>booking._id!==_id)
                        setBookings(remaining)
                    }

                })
        }
    }

    return (
        <div>
            <h4>My Bookings {bookings.length}</h4>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr >
                            <th>
                                <p>Cancle</p>
                            </th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => <BookingsRow
                            key={booking._id}
                            booking={booking}
                            handleCancle={handleCancle}
                        ></BookingsRow>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;