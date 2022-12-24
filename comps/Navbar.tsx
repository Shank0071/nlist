import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container flex">
                <div className="logo">
                    {/* <Image src="/Screenshot (24).png" width="128" height="128" alt={""}/> */}
                    <h1>Ninja List</h1>
                </div>
                <div className="navlinks">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/ninjas">Ninja Listing</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;