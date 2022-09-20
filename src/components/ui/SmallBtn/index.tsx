import React from 'react'
import * as S from "./style";
type styleType = {
  children: string
  line?: boolean
}
function SmallBtn(props: styleType) {
  return (
    <>
      <S.SmallBtn {...props}>
        {props.children}
      </S.SmallBtn>
    </>
  )
}

export default SmallBtn