import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
    ];


    return (
        <nav className="text-black bg-yellow-200 p-6 ">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu className=""></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex absolute md:static 
            ${open ? 'top-16' : '-top-60'} 
            bg-yellow-200 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav >
    );
};

export default NavBar;