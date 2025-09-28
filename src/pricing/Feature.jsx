import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
        return (
          <p className='flex gap-1'><Check/> {feature}</p>
        );
};

export default Feature;