import React from 'react'
import BoxComponent from '../../components/BoxComponent'
import tara from '../../assets/tara.jpeg'


const MainBar = () => {
  return (
    <div className='flex flex-col w-full bg-green-800 text-white'>
     <div className="w-11/12 m-auto bg-white">
      
      <BoxComponent>
              <div className="flex col">
                <p>Hello</p>
                <p>Hello</p>
              </div>
              <img src={tara} alt="" />
      </BoxComponent>



      {/* 
      
      
            <Avatar
              backgroundColor="#009dff"
              px="5px"
              py="7px"
              borderRadius="51%"
              color="white"
              mx="10px"
              textDecoration="none"
            >
              <Link
                to={`/users/${user.result._id}`}
                style={{ textDecoration: "none" }}
              >
                {user.result.name.charAt(0).toUpperCase()}{" "}
              </Link>
            </Avatar>
      */}
     </div>
  
    </div>
  )
}

export default MainBar
