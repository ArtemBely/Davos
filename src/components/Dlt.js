import React from 'react';
import { NavLink } from 'react-router-dom';
import eachTech from '../../public/images/Vector.png';

function Dlt () {
  return(
    <div className='wrap_of_tech'>
        <div className="tech_0 tech_0_dlt">
            <p className='title_of_tech title_of_tech_dlt'>DLT and Blockchain</p>
            <p className='text_of_tech_dlt'>Traditional transactions are complex and costly.
              Prone to human error or fraud — each participant has its own separate ledger.
              Inefficient — intermediaries are needed for validation. Frequent delays & losses —
              paper-based and data stored locally by each party. Blockchain is the solution.
              Peers have a single shared ledger — once the transaction is validated, the record is permanent,
              secure and immutable. A smart contract — code running on top of a blockchain that contains a set
              of rules under which the parties mutually agree — eliminating the need for third parties.
              Owner of the transaction has the power to move anything of value freely and instantly without intermediaries.
              Eliminates or reduces paper processes, need for intermediaries, speeds up transaction times and increases efficiencies and transparency.
            </p>
             <div className='to_be_cont_dlt'>The content of the page will be updated</div>
             <img src={eachTech} className='tech_img_dlt'/>
        </div>
    </div>
 )
}

export default Dlt;
