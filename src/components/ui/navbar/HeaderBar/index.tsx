import React from 'react'
import { ArrowLeftIcon, LogoIcon, SearchIcon, ShoppingBagIcon } from 'components/Icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './style'
import { pageName } from 'utils/constants'

function HeaderBar() {
  const navigate = useNavigate()
  const pathname: any = useLocation().pathname

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
        <S.HeaderCenter>{pageName[pathname]}</S.HeaderCenter>
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