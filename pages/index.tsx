import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {Header} from './stories/Header/Header'
import { ProfileHeader } from './stories/Profile/ProfileHeader/ProfileHeader'
import { ProfileCard } from './stories/Profile/ProfileCard/ProfileCard';
import { ProfileInterest } from './stories/Profile/ProfileInterest/ProfileInterest';
import {useAuth} from '../context/AuthContext'

const Home: React.FC = () => {
  const {dataCustomer, } = useAuth();
  console.log(dataCustomer,'data customer')

  const onLogin=()=>{
    
  }
  const onLogout=()=>{
    
  }
  const onCreateAccount=()=>{
    
  }
  const bgImage = "https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/cover/2023/6/2023627154655.png"
  const image = "https://mydigilearn-dev.s3.ap-southeast-3.amazonaws.com/content/user-upload/avatar/2023/5/2023516131442.JPG"

  // const dataUser = {
  //   biography:'watashino namae ha bayu daramawan desu!',
  //   nik:2896,
  //   position:'your boss',
  //   company:'gorillaTech',
  //   jobFunction:'Front End',
  //   division:'all Role',
  //   location:'in your heart :*'
  // }
  const interest=[
    'Cheerleading',
    'StreetWorkout',
    'Parkour',
    'Mobile Legend',
    'Marathon',
    'Free Diving'
  ]

  const onEditProfile=()=>{

  }
  return (
    // <MyContextProvider>
      <div className="bg-[#f8f8f8] w-screen h-screen">
        <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}/>
        <div className="px-20 py-10 bg-[#f8f8f8]">
          <ProfileHeader label="Bayu Darmawan" name="Bayu Darmawan" bgImage={bgImage} title="GOD" image={image}/>
          <div className="px-5 lg:grid lg:grid-cols-6 gap-4">
            <div className="col-span-4">
              <ProfileCard  onClick={onEditProfile} dataUser={dataCustomer}  />
            </div>
            <div className="col-span-2 mt-6 lg:mt-0">
              <ProfileInterest  interest={interest} label="Bayu Darmawan" name="Bayu Darmawan" bgImage={bgImage} title="GOD" image={image}/>
            </div>
          </div>
        </div>
      </div>
    // </MyContextProvider>
  )
}

export default Home
