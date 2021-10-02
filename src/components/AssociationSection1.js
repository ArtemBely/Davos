import React from 'react';
import AssociationMainLogo from "../../public/images/AssociationMainLogo.svg"


function AssociationSection1 () {
  return(
    <div className="wrap__association1">
        <div className="association1">
            <img src={AssociationMainLogo} className="association1-img"></img>
            <h2 className="association1__about-title">About</h2>
            <div className="association1__about-container">
                <div className="association1__about-section">
                    <p className="association1__about-paragraph1">
                        International EmTech Investment <br />
                        Association with its Headquarters <br />
                        in Switzerland focuses on uniting <br />
                        vision-driven people to build <br className="about-br1"/>
                        a <br className="about-br2"/> better future leveraging emerging <br />
                        technologies. Investments with <br />
                        purpose — is the only way <br className="about-br1"/>
                        when <br className="about-br2"/> money really works <br />
                        for people’s good.
                    </p>
                    <p className="association1__about-paragraph2" id="AssociationAboutParagraph2">
                        The Association highlights the best practices of such <br />
                        investment trends. Together with members from <br />
                        tech companies, it opens new opportunities for <br />
                        scaling up the businesses and increasing <br />
                        understanding and adoption of the newest <br />
                        technologies.
                    </p>
                    <p className="association1__about-paragraph2">
                        The website of the Association is a digital platform <br />
                        for showcases placed in different “tech rooms”. It <br />
                        also allows seeing the stage of the project and the <br />
                        implementation status. It gives a better way of <br />
                        understanding the technology and its applicability in <br />
                        private or corporate use.
                    </p>
                </div>
                <div className="association1__about-section" id="aboutSection2">
                    <div className="association1__about-background">
                        <button className="association1__about-btn">Download Articles of Association</button>
                    </div>
                    <p className="association1__about-paragraph2 about-paragraph2">
                        The Association is welcoming members from Tech <br />
                        companies, the Investment communities. <br />
                        Governmental and Intergovernmental structures, <br />
                        as well as not-for-profit organizations, are welcome <br />
                        to participate in a status of a partner.
                    </p>
                    <p className="association1__about-paragraph2 about-paragraph2" id="aboutParagraph2">
                        In times of massive digitalization, real-life meetings <br />
                        have become a new luxury. But sometimes <br />
                        it is better one time to see than 5 times to hear. <br />
                        Thus, the Association Forum in Davos as well <br />
                        as local meetups organized by the Members will <br />
                        take place on a regular basis.
                    </p>
                </div>
            </div>
        </div>
    </div>
 )
}

export default AssociationSection1;
