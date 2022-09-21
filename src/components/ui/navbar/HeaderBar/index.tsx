import React from 'react'
import { ArrowLeftIcon, LogoIcon, SearchIcon, ShoppingBagIcon } from 'components/Icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './style'

function HeaderBar() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  return (
    <S.HeaderBar>
    {'/' === pathname ?
      <S.HeaderLeft onClick={() => navigate("/")}>
        <LogoIcon/>
      </S.HeaderLeft>
    : <>
        <S.HeaderLeft onClick={() => navigate(-1)}>
          <ArrowLeftIcon/>  
        </S.HeaderLeft>
      </> 
    }
      <S.HeaderUl>
        <S.HeaderLi>
          <SearchIcon/>
        </S.HeaderLi>
        <S.HeaderLi onClick={() => navigate("/cart")}>
          <ShoppingBagIcon/>
        </S.HeaderLi>
      </S.HeaderUl>
    </S.HeaderBar>
  )
}

export default HeaderBar