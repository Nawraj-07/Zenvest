import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} >
      <div className="w-100 border-top mt-5"></div>


    <div className="container mt-5" >
      <div className="row mt-5">
        <div className='col'>
          <img src="media\Z-logo.png" style={{ width: "75%" }} alt="logo" /><br />
          <p className='text-muted' style={{fontSize: "14px" }}> © 2010 - 2025, Zenvest Broking Ltd.<br />  All rights reserved.</p>
        </div>
        <div className='col'>
          <p>Company</p>
          <a href=""style={{textDecoration:"none"}}> Account </a>
          <br /><br />
          <a href=""style={{textDecoration:"none"}}> Philosophy </a>
          <br /><br />
          <a href=""style={{textDecoration:"none"}}> Press & Media </a>
          <br /><br />
          <a href=""style={{textDecoration:"none"}}> Careers </a>
          <br /><br />
          <a href=""style={{textDecoration:"none"}}> Zenvest Cares(CRS) </a>
          <br /><br />
          <a href=""style={{textDecoration:"none"}}> Zenvest.Tech </a>
          <br /><br />
          <a href="" style={{textDecoration:"none"}}> Open source </a>
          <br />
        </div>
        <div className='col'>
          <p>Support</p>
          <a href="" style={{textDecoration:"none"}}> Contact </a>
          <br /><br/>
          <a href="" style={{textDecoration:"none"}}> Support portal </a>
          <br /><br/>
          <a href="" style={{textDecoration:"none"}}> Z-Connect Blog </a>
          <br /><br/>
          <a href="" style={{textDecoration:"none"}} > List of charges </a>
          <br /><br/>
          <a href="" style={{textDecoration:"none"}}> Downloads & resources </a>
          <br />
        </div>
        <div className='col'>
          <p>Account</p>
          <a href="" style={{textDecoration:"none"}}> Open an Account </a>
          <br /><br />
          <a href="" style={{textDecoration:"none"}}> Fund Transfer </a>
          <br /><br />
          <a href="" style={{textDecoration:"none"}}> 60 day challenge </a>
          <br /><br />
        </div>

      </div>

      <div className="mt-5 text-muted" style={{fontSize: "11px" }} >
      <p>Zenvest Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zenvest Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zenvest Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zenvest Broking Ltd., 271, Doluipara, Makhla,Uttarpara , Hooghly-712245, West Bengal, India. For any complaints pertaining to securities broking please write to complaints@zenvest.com, for DP related to dp@zenvest.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

      <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

      <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

      <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

      <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zenvest and offering such services, please create a ticket here.</p>
      </div>

    </div>
    </footer>
  );
}

export default Footer; // ✅ MUST be default export
