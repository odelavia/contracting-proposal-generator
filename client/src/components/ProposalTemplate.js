import React, { Component } from 'react';
import TemplateSection from './TemplateSection';
import Header from './Header';
import OverLineInput from './OverLineInput';

class ProposalTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  		// window.print();

  render() {
    return (
      <div className='template-container page' contentEditable="true" suppressContentEditableWarning>
        <TemplateSection id="proposalNo" className='proposalNo-container'>
          <div className='border-bottom padd5'>Proposal No. </div>
          <div className='padd5'>Date </div>
        </TemplateSection>
        <Header/>
        <TemplateSection id='servicesAvail' >
          <div className='services-available'>
            <div className='margin3-75'>Painting</div>
            <div className='margin3-75'>Carpentry</div>
            <div className='margin3-75'>Drywall</div>
            <div className='margin3-75'>Finishing</div>
            <div className='margin3-75'>Tile</div>
            <div className='margin3-75'>Roofing</div>
          </div>
        </TemplateSection>
        <TemplateSection id='namephone'>
          <section className='namephone-container'>
            <div className='border-bottom padd5'>Name</div>
            <div className='border-bottom'></div>
            <div className='padd5'>Phone</div>
          </section>
        </TemplateSection>
        <TemplateSection id='customer-address'>
          <section className='customer-address-container'>
            <div className='border-bottom padd5'>Address</div>
            <div className='border-bottom'></div>
          </section>
        </TemplateSection>
        <TemplateSection id='body'>
          <section className='body-container'>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
            <div className='border-bottom-small'></div>
          </section>
        </TemplateSection>
        <section id='legal'>
          <div className='off-red legal-container'>
            <h4 className='acceptance'>ACCEPTANCE OF PROPOSAL:</h4>
            <p className='small-print'> The above prices, specifications and conditions are satisfactory and are hereby accepted. You are authorized to do the work as specified. Payments will be made as outlined.</p>
          </div>
        </section>
        <section id='sig-date'>
          <OverLineInput className='sig1 padd5'>Signature</OverLineInput>
          <OverLineInput className='date1 padd5'>Date</OverLineInput>
          <OverLineInput className='sig2 padd5'>Signature</OverLineInput>
          <OverLineInput className='date2 padd5'>Date</OverLineInput>
        </section>
        <TemplateSection id='cost'>
          <section className='cost-container'>
            <div className='cost-line'>
              <div className='border-bottom padd5 labor'>Total Labor</div>
              <div className='cents-box'></div>
            </div>
            <div className='cost-line'>
              <div className='border-bottom padd5 tax'>Tax</div>
              <div className='cents-box'></div>
            </div>
            <div className='cost-line'>
              <div className='padd5 total'>Grand Total</div>
            </div>
          </section>
        </TemplateSection>
      </div>
    );
  }
}

export default ProposalTemplate;
