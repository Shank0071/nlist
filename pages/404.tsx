import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; // gives us method to redirect the user


const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return ( 
        <div className="notFound">
            <h1>Oops.... the page is not found</h1>
            <Link href="/">
                <p className="btn">Go back to Homepage</p>
            </Link>
        </div>
     );
}
 
export default NotFound
