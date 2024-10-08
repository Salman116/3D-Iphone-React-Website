import apple from "../../public/assets/images/apple.svg"
import search from "../../public/assets/images/search.svg"
import bag from "../../public/assets/images/bag.svg"
import {navLists} from "../constants/";

const Navbar = () => {
  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center ">
        <img src={apple} alt="apple Navbar" className="" />
        <div className="flex justify-center gap-7 flex-1 items-center">
            {
                navLists.map( (element) => (
                    <div key={element} className="cursor-pointer text-gray hover:text-white">
                        {element}
                    </div>
                )

                )
            }
        </div >
        <div className="flex items-center items-baseline gap-8 max-sm:justify-end max-sm:flex-1">
            <img src={search} alt="Search" className="items-end"/>
            <img src={bag} alt="Bag"/>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
