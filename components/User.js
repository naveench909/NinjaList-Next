import React from 'react'

function User({singleNinja}) {
    return (
        <div className="modal" >
            <div className="main-content">
                <div style={{display:'flex' , alignItems:"flex-end"}}>
                    <h1>{singleNinja.name} , </h1>
                    <h1>{singleNinja.id}</h1>
                </div>
                <h3 className="h3Text">Email : {singleNinja.email}</h3>
                <h3 className="h3Text">Phone No. : {singleNinja.phone}</h3>
                <h3 className="h3Text">Address : {singleNinja.address.street},{singleNinja.address.city}</h3>
                <h3 className="h3Text">Company : {singleNinja.company.name}</h3>
                <h3 className="h3Text">Website : {singleNinja.website}</h3>
            </div>
        </div>   
    )
}



export default User
