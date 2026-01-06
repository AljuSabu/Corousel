import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LanguageIcon from '@mui/icons-material/Language';
import CakeIcon from '@mui/icons-material/Cake';

const InfoCard = ({user}) => {
  return (
    <div className='w-200 h-150 p-5'>
        <h1 className='text-8xl font-dancing font-bold mb-5'>{user.firstName} {user.lastName}</h1>
        <h2 className='text-3xl font-garamond mb-20 pl-3 text-blue-500'>{user.company?.title}</h2>

        <div className='text-2xl pl-10'>
          <p className='mb-5'><EmailIcon /> : {user.email}</p>
          <p className='mb-5'><PhoneIcon /> : {user.phone}</p>
          <p className='mb-5'><CakeIcon /> : {user.birthDate}</p>
          <p className='mb-5'><BloodtypeIcon /> : {user.bloodGroup}</p>
          <p className='mb-5'><HomeIcon /> : {user.address?.address} , {user.address?.city} , {user.address?.state} </p>
          <p className='mb-5'><LanguageIcon /> : {user.address?.country}</p>
        </div>
    </div>
  )
}

export default InfoCard