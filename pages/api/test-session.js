// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from 'next-auth/client'

const handler = async (req, res) =>  {
  const session = await getSession({req});
  // console.log(session);
  if(!session){
    res.status(401).json({error : "Unauthenticated User"});
  }else{
    res.status(200).json({message:'Success', session})
  }
}

export default handler;