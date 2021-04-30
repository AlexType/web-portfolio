import React, { Fragment } from 'react';

const Body = ({ weeksLived, maxWeeks }) => {

    const generateItems = () => {
        const items = [];

        for (let i = 0; i < maxWeeks; i++) {
            const status = i >= weeksLived ? '' : 'lived';
            items.push(<div key={i} className={`time-line__item ${status}`}></div>)
        }

        return items;
    };

    const items = generateItems();

    return (
        <Fragment>
            {items}
        </Fragment>
    );
};

export default Body;