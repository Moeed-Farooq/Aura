import React from 'react';
import apple from '../images/apple.png';
import google from '../images/google.png';
import paypal from '../images/paypal.png';


const PayoutHistoryCard = () => {
  // Array of data directly within the component
  const payoutData = [
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple },
    { method: 'Paypal', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:google  },
    { method: 'Google', transactionNumber: '#123456789', amount: 400, time: '03:00 am' ,img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:paypal  },
    { method: 'Sadapay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:paypal  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'Paypal', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:google  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:google  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:google  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:google  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },
    { method: 'ApplePay', transactionNumber: '#123456789', amount: 400, time: '03:00 am',img:apple  },

    
  ];

  return (
    <>
      {payoutData.map((data, index) => (
        <div className="row payoutContainer "  key={index}>
          <div className="col-md-6 text-start d-flex">
            <div className='payoutHistoryImg'>
              <img src={data.img} alt="" />
            </div>
            <div className='payoutHistoryData'>
              <p>{data.method}</p>
              <p>{data.transactionNumber}</p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className='payoutHistoryData'>
              <p>{`$ ${data.amount}`}</p>
              <p>{data.time}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PayoutHistoryCard;
