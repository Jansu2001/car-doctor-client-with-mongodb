
const BookingsRow = ({ booking, handleCancle }) => {
    const { _id, img, date, price, customerName, service } = booking;




    return (
        <tr>
            <th>
                <button onClick={() => handleCancle(_id)} className="btn btn-circle btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div >
                            <td>{service}</td>
                        </div>
                        <div className="text-sm ml-5 opacity-100">

                            {customerName && customerName}
                        </div>


                    </div>
                </div>
            </td>


            <td>{date}</td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs text-orange-700">Pending</button>
            </th>
        </tr>
    );
};

export default BookingsRow;