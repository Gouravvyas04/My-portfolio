import React from 'react';

const Mode = () => {
    const handleClick = () => {
        const mainElement = document.querySelector('.main');
        if (mainElement) {
            mainElement.classList.toggle('active');
        }
    };

    return (
        <div>
            <input
                type="checkbox"
                role="switch"
                className="liquid-3"
                onClick={handleClick}
            />
        </div>
    );
};

export default Mode; // Only default export of Mode component
