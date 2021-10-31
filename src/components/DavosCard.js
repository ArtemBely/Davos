import React from 'react';

function DavosCard() {
    const cards = [
        {
            title: 'Billionaires for Youth',
            date: 'January 16',
            imgUrl: '../../images/BillionairesForYouth.png',
        },
        {
            title: 'Technologies of the Future',
            date: 'January 17',
            imgUrl: '../../images/TechnologiesForFuture.png',
        },
        {
            title: 'Beyond Blockchain',
            date: 'January 18',
            imgUrl: '../../images/BeyondBlockchain.png',
        },
        {
            title: 'Other Worlds',
            date: 'January 19',
            imgUrl: '../../images/OtherWorlds.png',
        },
        {
            title: '150 Years Old',
            date: 'January 20',
            imgUrl: '../../images/150YearsOld.png',
        },
        {
            title: 'Art Class',
            date: 'January 21',
            imgUrl: '../../images/ArtClass.png',
        },
        {
            title: 'Ski and Spa',
            date: 'January 22-23',
            imgUrl: '../../images/SkiAndSpa.png',
        },
    ];

    return (
        <div className="Card-wrapper">
            {cards.map((card, index) => {
                return (
                    <div className="davosCard" key={index}>
                        <img className="davosCard__img" src={card.imgUrl} alt="card background" />
                        <div className="davosCard__title">{card.title}</div>
                        <div className="davosCard__date">{card.date}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default DavosCard;

