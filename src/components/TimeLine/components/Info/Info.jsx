import React from 'react';

const Info = ({ maxYears }) => {

    const generateInfoItems = () => {
        const items = [<li key={'year_0'}>Год</li>];

        for (let i = 4; i <= maxYears; i += 4) {
            items.push(<li key={`year_${i}`}>{i}</li>)
        }

        return items;
    }

    const infoItems = generateInfoItems();

    return (
        <ul className="time-line__info">
            {infoItems}
        </ul>
    );
};

export default Info;