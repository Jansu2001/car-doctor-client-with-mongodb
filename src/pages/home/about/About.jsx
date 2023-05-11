import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className=" hero-content flex-col lg:flex-row">
                <div className='lg:relative lg:w-1/2 '>
                    <img src={person} className="lg:w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} className="lg:absolute right-5 top-1/2 rounded-lg border-8 border-white lg:w-1/2  rounded-lg shadow-2xl " />
                </div>
                <div className='lg:w-1/2 space-y-3 p-4 '>
                    <h4 className='text-orange-600 text-4xl font-bold'>About Us</h4>
                    <h1 className="text-4xl text-[#151515]  font-bold sm:w-full lg:w-1/2">We are qualified & of experience in this field</h1>
                    <p className="text-[#737373] py-2 lg:w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="text-[#737373] py-2 lg:w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;