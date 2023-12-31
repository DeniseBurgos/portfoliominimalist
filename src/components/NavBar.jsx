import Menu from "./Menu"
import { useState } from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const links=[
        {link:'About', 
        id:1},
        {link:'Projects', 
        id:2},
        {link:'Experience', 
        id:3},
        {link:'Contact', 
        id:4},

    ]

  return (
    <div className={["absolute",
    !isMenuOpen
    ? " z-[300] absolute w-[69px] p-10 left-4 h-[47px] "
    : " items-center justify-evenly flex flex-col z-[300] fixed w-screen h-screen bg-[#2b2b29]",
    ]}>
        <Menu isMenuOpen={isMenuOpen} handleMenu={() => setIsMenuOpen (!isMenuOpen)} />

        {isMenuOpen &&
        links.map ((l) => (
            <Link className="text-[30px] text-white cursor-pointer" onClick={() => setIsMenuOpen(false)} to={l.link} key={l.id}> {l.link} </Link>
        ))
        }
    </div>
  )
}

export default Navbar