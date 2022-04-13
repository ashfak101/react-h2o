import React, { useEffect, useState } from 'react';
import ClubFund from '../clubFund/ClubFund';
import ClubMember from '../clubMember/ClubMember';
import './ClubDetails.css'

const ClubDetails = () => {
    const [members, setMembers] = useState([]);
    const [fund, setFund] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    const handleFund = member => {
        const newFund = [...fund, member]
        setFund(newFund);
    }

    return (
        <div className='clubDetails-container'>
            <div className='members-container'>
                {
                    members.map((member,index )=> <ClubMember
                        key={index}
                        handleFund={handleFund}
                        member={member}
                    ></ClubMember>)

                }
            </div>

            <div className='clubFund'>
                <ClubFund fund={fund}></ClubFund>
            </div>
        </div>
    );
};

export default ClubDetails;