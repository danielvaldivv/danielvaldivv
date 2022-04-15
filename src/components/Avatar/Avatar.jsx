import React from 'react'
// import avatarImg from '../../assets/img/avatar.png'
import avatarImg from '../../assets/img/avatar.jpeg'

import './Avatar.styl'


function Avatar() {
  return (
    <>
      <img className="avatar" src={avatarImg} alt="Avatar danielvaldivv" width="30%"/>
    </>
  )
}

export default Avatar
