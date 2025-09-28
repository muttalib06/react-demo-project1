import React from 'react';
import Feature from './Feature';

const PricingCard = ({plan}) => {
        return (
                <div className='bg-amber-600 text-white rounded-xl p-3'>
                        <div>
                                <h3 className='font-bold text-black'>Name: {plan.name}</h3>
                                <p>Price: {plan.price}</p>
                        </div>
                        <div className='bg-amber-300 p-3 rounded-md w-[50%] mt-3'>
                                {plan.features.map(feature => <Feature feature={feature} ></Feature>)}
                        </div>


                        
                </div>
        );
};

export default PricingCard;