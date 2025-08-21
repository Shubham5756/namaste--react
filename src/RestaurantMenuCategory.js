import React,{useState} from 'react'
import RestaurantMenuList from './RestaurantMenuList'


const RestaurantMenuCategory = ({data ,  showIndex, setShowIndex}) => {
    //console.log(data)
// const [showItem , setShowItem ] = useState(false)
    const handleClick = ()=>{
       setShowIndex()
    }
  return (
    <div className='w-6/12  bg-gray-100 mx-auto my-6 shadow-lg'>
        <div className='flex justify-between  my-6 py-4 cursor-pointer h-auto' onClick={handleClick}>
            <span className='font-bold pl-2 '>{data.title} ({data.categories.length}) </span>
            <span className='pr-4'>⬇️</span>
        </div>
        <div>
            {
                showIndex &&  <RestaurantMenuList items={data.categories} />
            }
          
        </div>
    </div>
  )
}

export default RestaurantMenuCategory
