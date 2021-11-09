import React from 'react';
import DavosCard from './DavosCard';
import ArrowButton from '../../images/download-arrow.svg';

import WorldEconomicForum from '../../images/WorldEconomicForum.png';
import IEEE from '../../images/IEEE.png';
import IDAXA from '../../images/IDAXA.png';
import CryptoValley from '../../images/CryptoValley.png';
import TheWorldBank from '../../images/TheWorldBank.png';
import Cambridge from '../../images/CambridgeUniversity.png';
import WorldMaskGroup from '../../images/WorldMaskGroup.png';
import SheikhOffice from '../../images/OfficeOfSheikh.png';

function DavosMain() {
    return (
        <div>
        <div className="concept">
            <h3 className="concept__title">Concept</h3>
            <div className="concept__wrapper">
                <div className="join-us">
                    <div className="join-us__header">7 days — 7 trends</div>
                    <div className="join-us__descr">Emerging Technologies are a part of our life. It is time to SHOW it: Rising stars. Investors. Corporates.</div>
                    <button className="join-us__btn">Become part of the future</button>
                </div>
                <DavosCard />
            </div>
            <button className="concept-download">
                <div className="download-wrap">
                    <img className="arrow-button" src={ArrowButton} alt="Download"/>
                    <div className="concept-donwload__text">Download Concept Presentation</div>
                </div>
            </button>
        </div>
        <div className="partners">
            <h3 className="partners__title">Partners</h3>
            <div className="partners__wrapper">
                <div className="partners__descr">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
                <div className="partners__supported">
                    <img className="supported-logo" src={SheikhOffice} alt="Office of Sheikh"/>
                    <div className="supported-descr">The conference is supportedby The Private Office of Sheikh Saqer Bin Mohamed Al Qasimi</div>
                </div>
            </div>
            <div className="partners__logos">
                <img className="supporters one" src={WorldEconomicForum} alt="World Economic Forum"/>
                <img className="supporters two" src={IEEE} alt="IEEE"/>
                <img className="supporters three" src={IDAXA} alt="IDAXA"/>
                <img className="supporters four" src={CryptoValley} alt="Crypto Valley"/>
                <img className="supporters supporters-2 five" src={TheWorldBank} alt="The World Bank"/>
                <img className="supporters supporters-2 six" src={Cambridge} alt="Cambridge University"/>
                <img className="supporters supporters-2 seven" src={WorldMaskGroup} alt="WorldMaskGroup"/>
            </div>


            <div className="dekstop">
                <div className="dekstop__wrapper">
                    <div className="dekstop__logo">
                    <div className="OfficeDescr">
                        <img className="supportersOffice" src={SheikhOffice} alt="Office of Sheikh"/>
                        <div className="supported-descr">The conference is supportedby The Private Office of Sheikh Saqer Bin Mohamed Al Qasimi</div>
                    </div>
                    <img className="supportersCypro" src={CryptoValley} alt="Crypto Valley"/>
                    </div>
                    <div className="dekstop__logo">
                    <img className="supportersIdaxa" src={IDAXA} alt="IDAXA"/>
                    <img className="supportersUni" src={Cambridge} alt="Cambridge University"/>
                    <img className="supportersWorld" src={WorldMaskGroup} alt="WorldMaskGroup"/>
                    </div>
                    <div className="dekstop__logo">
                    <img className="supportersForum" src={WorldEconomicForum} alt="World Economic Forum"/>
                    <img className="supportersIe" src={IEEE} alt="IEEE"/>
                    <img className="supportersBank" src={TheWorldBank} alt="The World Bank"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DavosMain;
