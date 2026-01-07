import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LanguageIcon from '@mui/icons-material/Language';
import CakeIcon from '@mui/icons-material/Cake';

const InfoCard = ({user}) => {
  return (
    <div className='min-w-68 max-w-200 max-h-150 p-1 md:p-5'>
        <h1 className='text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl font-dancing font-bold mb-2 md:mb-4 xl:mb-5'>{user.firstName} {user.lastName}</h1>
        <h2 className='text-base md:text-xl xl:text-2xl 2xl:text-3xl font-garamond mb-5 md:mb-10 xl:mb-15 2xl:mb-20 pl-2 md:pl-3 text-blue-500'>{user.company?.title}</h2>

        <div className='text-xs md:text-base xl:text-xl 2xl:text-2xl pl-2 md:pl-6 xl:pl-10'>
          <p className='mb-2 md:mb-3 xl:mb-5'><EmailIcon className='text-lg! md:text-2xl!'/> : {user.email}</p>
          <p className='mb-2 md:mb-3 xl:mb-5'><PhoneIcon className='text-lg! md:text-2xl!' /> : {user.phone}</p>
          <p className='mb-2 md:mb-3 xl:mb-5'><CakeIcon className='text-lg! md:text-2xl!' /> : {user.birthDate}</p>
          <p className='mb-2 md:mb-3 xl:mb-5'><BloodtypeIcon className='text-lg! md:text-2xl!' /> : {user.bloodGroup}</p>
          <p className='mb-2 md:mb-3 xl:mb-5'><HomeIcon className='text-lg! md:text-2xl!' /> : {user.address?.address} , {user.address?.city} , {user.address?.state} </p>
          <p className='mb-2 md:mb-3 xl:mb-5'><LanguageIcon className='text-lg! md:text-2xl!' /> : {user.address?.country}</p>
        </div>
    </div>
  )
}

export default InfoCard