import React,{ useState } from 'react'
import downImg from '../assets/down.png'
import close from '../assets/close.png'
import searchIcon from '../assets/search.png'

const arrays = [
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Honda'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Suzuki'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Hyundai'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'BMW'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Audi'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Toyota'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Datsun'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Chevrolet'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Fiat'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Ford'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Mahindra'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Nissan'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Skoda'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Tata'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Jaguar'},
    {img:'https://gm-retail-app.s3.ap-south-1.amazonaws.com/thumbnails/brand-6.jpeg',name:'Mini'},
]

const SideModal = () => {
  const [ getData, setData ] = useState('1');
  const [ getName, setName ] = useState('Honda');
  const [ searched, setSearch ] = useState(false);
  const [ getAll, setAll ] = useState(arrays);

  const goNext = () => {
    setData('2')
  }
  const goBack = () => {
    setData('1')
  }
  const fetchData = (name) => {
    setName(name);
    setData('1');
  }
  const search = (e) => {
    let text = e.target.value;
    let searchInput = text.toLowerCase();
    if (searchInput.length === 0) {
      setSearch(false);
      setAll(arrays)
    } else {
      let searchedList = arrays.filter((item) => {
          let names = item.name.toLowerCase();
          return (
            names.includes(searchInput)
          );
      });
      console.log(searchedList)
      setAll(searchedList)
    }
  }

  return (
   <div className='sideModal'>
    {getData=='1' ?
    <div className='p-5'>
        <h1 className=''>Experience The Best Car Service In Dubai</h1>
        <div className='mt-4'>Get instant quotes for your car service</div>
        <button className='input mt-2 w-100' onClick={goNext}>
            <span>{getName}</span>
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
            <img src={searchIcon} style={{width:20,height:20,marginTop:10}}/>
            <input type="text" placeholder='Search Brand' className='inputs w-100 p-2' onChange={(e)=>search(e)}/>
        </div>
        <div className='grid'>
            {
                getAll.map((item,index) => (
                    <div onClick={()=>fetchData(item.name)} className='column' >
                        <img src={item.img} style={{width:80,height:80}} />
                        <span>{item.name}</span>
                    </div>
                   
                ))
            }
        </div>
    </div>
    :
    <div>
        Work in progress
    </div>
    }
   </div>
  )
}

export default SideModal
