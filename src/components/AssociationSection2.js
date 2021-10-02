import React from 'react';
import Sponsorships_Img from "../../public/images/Sponsorships_Img.svg"



function AssociationSection2 () {
  return(
    <div className="wrap__association2">
        <div className="association2">
            <div className="association2__sponsorships">
                <h2 className="association2__sponsorships-title">Sponsorships</h2>
                <p className="association2__sponsorships-pargraph">
                    At vero eos et accusamus et iusto odio dignissimos <br />
                    ducimus qui blanditiis praesentium voluptatum <br />
                    deleniti atque corrupti qui officia deserunt mollitia <br />
                    animi, id est laborum et dolorum fuga.
                </p>
                <button className="association2__sponsorships-btn">Become a sponsor</button>
            </div>
            <img src={Sponsorships_Img} className="association2__sponsorships-img"></img>
        </div>
    </div>
 )
}

export default AssociationSection2;
