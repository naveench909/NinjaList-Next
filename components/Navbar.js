import Link from 'next/link';
import Image from 'next/image'
import { signIn , signOut , useSession} from 'next-auth/client'

const Navbar = () => {
    const [session , loading] = useSession();
    return (  
        <nav >
            <div className="logo">
                <Image src="/logo.png" width={125} height={80} alt=""/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Same Home</a></Link>
            <Link href="/ninjas"><a>Ninjas Listing</a></Link>
            <Link href="/about"><a>About</a></Link>
          
            {!session && !loading && (
                <Link href="/api/auth/signin"><a onClick={(e) => {
                    e.preventDefault();
                    signIn()
                }}>Sign In</a></Link>
                )}

            {session && (
                <Link href="/api/auth/signout"><a onClick={(e) => {
                    e.preventDefault();
                    signOut()
                }}>Sign Out</a></Link>
                )}
        </nav>
    );
}
 
export default Navbar;