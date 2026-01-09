
import { Link } from 'react-router-dom'
import head from '../assets/images/CTA.png'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const MembershipForm = () => {
    return (
        <div className=" w-full lg:w-[80%] lg:h-[50vh] mx-auto rounded-xl p-10 my-[15vh] grid grid-cols-1 lg:grid-cols-[30%_70%] items-center">
            <div className="relative mb-10 lg:mb-0 w-full aspect-square bg-primary rounded-2xl overflow-visible flex justify-center">
                <img
                    src={head}
                    alt="member of blackleaf"
                    className="absolute bottom-0 h-[110%] w-auto object-cover object-bottom"
                />
            </div>
            <div className='w-full lg:w-[90%] lg:ml-[10%] flex flex-col justify-center mx-auto h-full '>
                <div className="w-fit rounded-4xl border border-primary px-6 py-2 mb-5 text-primary">Join Us</div>
                <h2 className="w-full lg:w-[90%] font-primary text-2xl lg:text-4xl uppercase my-2">Become Part of Blackleaf</h2>
                <p className="text-[18px] w-full font-secondary lg:w-[90%]">Blackleaf is open to driven black students and young professionals looking to build real-world investment skills. 
                Members gain hands-on training, structured mentorship, and access to a collaborative community focused on long-term financial excellence.</p>
                <Link
                    to="/team">
                    <div className='mt-10 w-fit rounded-4xl bg-primary text-white px-8 py-3 flex flex-row items-center gap-4 cursor-pointer transition-all ease-in-out hover:translate-x-2'>Membership Form
                        <MdOutlineArrowRightAlt />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MembershipForm