import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ClubMember.css'

const ClubMember = (props) => {
    // console.log(props)
    const { name, country, img, Rank, cash } = props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='card-image'>
                    <img src={img} alt="" />
                </div>

                <div className='card-details'>
                    <h3>Name: {name}</h3>
                    <p>country: {country}</p>
                    <p>Rank: {Rank}</p>
                    <p>H20-Cash: {cash}</p>
                    <button onClick={() => props.handleFund(props.member)} className="btn-regular"
                    >{element}add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default ClubMember;