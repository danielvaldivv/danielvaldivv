import React from 'react'
import avatarImg from '../../assets/img/avatar.png'

import './Avatar.css'


function Avatar() {
  return (
    <>
      <img className="avatar" src={avatarImg} alt="Avatar danielvaldivv" width="30%"/>
    </>
  )
}

export default Avatar
