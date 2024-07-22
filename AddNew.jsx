import React from 'react'

const AddNew = () => {
  return (
    <div >
      
    <form >
        <div >
        
        <p className='main-content container'>Case Details</p>
        <div className='case-detail'>
        <label>Case Name</label>
        <input type='text' placeholder='Enter Case Name' />
        </div>
        <div className='main-content'>
        <label>Case ID</label>
        <input type='text' placeholder='Enter Case ID' />
        </div>
        <div className='main-content'>
        <label>Allocation Date</label>
        <input type='date' placeholder='select Allocation Date' />
        </div>
        <div className='main-content'>
        <label>Month</label>
        <input type='month' placeholder='select Month' className='month'/>
        </div>
         </div>
        <div >
            <p className='main-content container'>Loan Details</p>
            <div className='main-content'>
        <label>Product</label>
        <input type='text' placeholder='select Product' />
        </div>
        <div className='main-content'>
        <label>Loan Amount(in RS)</label>
        <input type='text' placeholder='Enter Loan Amount' className='loan' />
        </div>
        <div className='main-content'> 
        <label>Tenure(in month)</label>
        <input type='text' placeholder='Enter Tenure' className='loan'/>
        </div>
        <div className='main-content'>
        <label>ROI</label>
        <input type='text' placeholder='Enter ROI' />
        </div>
        </div>
        <button>Go Back</button>
    </form>
    </div>
  )
}

export default AddNew