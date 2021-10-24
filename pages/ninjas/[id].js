import React from 'react';
import Head from 'next/head'
import { useEffect , useState } from 'react';
import {getSession, signIn} from 'next-auth/client'
import User from '../../components/User';

const NinjaDetails = ({ singleNinja }) => {
    const [loading, setLoading] = useState(true)

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
    // console.log("single Ninja" , singleNinja);
    return ( 
        <React.Fragment>
            <Head>
                <title>Ninja List | {singleNinja.id}</title>
            </Head>
            <User singleNinja={singleNinja}/>
        </React.Fragment>
     );
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params : {id : ninja.id.toString()}
        }
    })

    return{
        paths,fallback : false,
    }
}
export async function getStaticProps(context){
    console.log("context => ",context );
    const id = context.params.id;


    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const singleNinja = await res.json();

    return {
        props : {
            singleNinja,
        }
    }
}
 
export default NinjaDetails;