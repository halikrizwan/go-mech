import React,{ useState } from 'react'
import downImg from '../assets/down.png'
import close from '../assets/close.png'
import search from '../assets/search.png'

const SideModal = () => {
  const [ getData, setData ] = useState('1');

  const goNext = () => {
    setData('2')
  }
  const goBack = () => {
    setData('1')
  }
  return (
   <div className='sideModal'>
    {getData=='1' ?
    <div className='p-5'>
        <h1 className=''>Experience The Best Car Service In Dubai</h1>
        <div className='mt-4'>Get instant quotes for your car service</div>
        <button className='input mt-2 w-100' onClick={goNext}>
            <span>Honda Amaze, Petrol</span>
            <img src={downImg} style={{width:20,height:20}}/>
        </button>
        <div className='w-100 btn btn-danger mt-2'>CHECK PRICE FOR FREE</div>
        <div className='terms mt-2'>By continuing, you agree to GoMechanic's Terms & Conditions and Privacy Policy</div>
    </div>
    :
    getData == '2' ?
    <div className='p-3'>
        <div className='head'>
            <h6>Select Manufacturer</h6>
            <a onClick={goBack} className="pointer">
                <img src={close} style={{width:20,height:20}}/>
            </a>
        </div>
        <div className='head inputN'>
            <img src={search} style={{width:20,height:20,marginTop:10}}/>
            <input placeholder='Search Brand' className='inputs w-100 p-2' />
        </div>
        <div>

        </div>
    </div>
    :
    <div>
        Data
    </div>
    }
   </div>
  )
}

export default SideModal
