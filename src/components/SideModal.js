import React,{ useState } from 'react'

const SideModal = () => {
    const [ getData, setData ] = useState(true);
  return (
   <div className='sideModal'>
    {getData ?
    <div className='p-5'>
        <h1 className=''>Experience The Best Car Service In Ahamedabad</h1>
        <div className='mt-4'>Get instant quotes for your car service</div>
        <div className='input mt-2'><span>Honda Amaze, Petrol</span></div>
        <div className='w-100 btn btn-danger mt-2'>CHECK PRICE FOR FREE</div>
        <div className='terms mt-2'>By continuing, you agree to GoMechanic's Terms & Conditions and Privacy Policy</div>
    </div>
    :
    <div>
        Rizwan
    </div>
    }
   </div>
  )
}

export default SideModal
