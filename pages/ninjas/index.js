import Link from 'next/link';
import React from 'react';
import Head from 'next/head'
import styles from '../../styles/ninjas.module.css'
import { useEffect , useState } from 'react';
import {getSession, useSession} from 'next-auth/client'
import Modal from '../../components/Modal';

const NinjaList = ({ninjas}) => {
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const secureRoute = async () => {
        const session = await getSession();
        if(!session){
            // signIn();
        }else{
            setLoading(false);
        }
    }

    useEffect(() => {
        secureRoute();
    }, [])

    if(loading){
        return <h1 style={{textAlign:'center'}}>Please SignIn before Access this page!</h1>
    }
    return ( 
        <React.Fragment>
            <Head>
                <title>Ninja List | All</title>
            </Head>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja)=>{
                return (
                    <div className={styles.Ninja} key={ninja.id} onClick={()=>setShow(true)}>                   
                        <a className={styles.singleNinja}>
                            <h4>{ninja.name}</h4>
                        </a>
                    </div>
                )
            })}
            <Modal onClose={()=>setShow(false)} show={show} title="Modal Title" body="This is the Content."/>
        </React.Fragment>
     );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : {
            ninjas : data,
        }
    }
}
 
export default NinjaList;