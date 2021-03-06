import React from 'react';

const SharedButton = ({children}) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-0 ">{children}</button>
        </div>
    );
};

export default SharedButton;