import React from 'react';

// eslint-disable-next-line react/prop-types
function Item({text}) {
    return (
        <div className="flex mt-2">
            <div className="rounded-full flex justify-center items-center gap-4">
                <p className="border-2 w-10 h-10 flex items-center justify-center rounded-full border-green-700">
                    <i className="fa-solid fa-check text-green-400 text-2xl"></i>
                </p>
                <span>{text}</span>
            </div>
        </div>
    );
}

export default Item;