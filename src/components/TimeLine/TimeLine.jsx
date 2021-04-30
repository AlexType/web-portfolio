import React from 'react';
import Body from './components/Body/Body';
import Info from './components/Info/Info';
import './TimeLine.scss';

const TimeLine = () => {

    const treatAsUTC = (date) => {
        const result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

        return result;
    }

    const weeksBetween = (startDate, endDate) => {
        const millisecondsPerDay = 24 * 60 * 60 * 1000 * 7;

        return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
    }

    const getTodayDate = () => {
        const today = new Date(),
            dd = String(today.getDate()).padStart(2, '0'),
            mm = String(today.getMonth() + 1).padStart(2, '0'),
            yyyy = today.getFullYear();

        return `${mm}/${dd}/${yyyy}`;
    };

    const maxYears = 70,
        weeksInYear = 52,
        weeksLived = Math.floor(weeksBetween('08/12/2000', getTodayDate()));

    return (
        <div className="time-line">
            <Body maxWeeks={maxYears * weeksInYear} weeksLived={weeksLived} />
            <Info maxYears={maxYears} />
        </div>
    );
};

export default TimeLine;