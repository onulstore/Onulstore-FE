import React, { useState } from 'react';
import * as S from './style';
//CONSTANT
import { IsmallCategoryModalItemContent, IcategoryElement } from 'utils/constants';
//ICON
import { ArrowBottomIcon, ArrowTopIcon } from 'components/Icons/index';
//STORE
import { useAppDispatch, useItemSlice } from 'store/hooks/index';
import {
  smallCategoryModalHandler,
  brandSelectBoxHandler,
  itemSortSelectBoxHandler,
  getNowPosition,
  brandFilterHandler,
} from 'store/slices/itemSlice';
//API
import { getAllItemList, searchItemByCategory, getAllBrandList } from 'utils/Api/itemApi';

interface Props {
  item: IsmallCategoryModalItemContent;
}

const SmallCategoryModalItem = ({ item }: Props) => {
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const dispatch = useAppDispatch();

  const isOpenCategoryHandler = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const itemFilterHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
    switch (item.category) {
      case 'ITEMS':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(getAllItemList());
        }

      case 'FASHION':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(searchItemByCategory(1));
        } else if (e.currentTarget.innerHTML === 'BAG') {
          return dispatch(searchItemByCategory(4));
        }
      case 'LIVING':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(searchItemByCategory(2));
        } else if (e.currentTarget.innerHTML === 'SPORTS') {
          return dispatch(searchItemByCategory(9));
        } else if (e.currentTarget.innerHTML === 'LIFE STYLE') {
          return dispatch(searchItemByCategory(10));
        }
      case 'BEAUTY':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(searchItemByCategory(3));
        } else if (e.currentTarget.innerHTML === 'COSME') {
          return dispatch(searchItemByCategory(11));
        }
    }
  };

  const searchBrandHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
    dispatch(getAllBrandList);
    switch (item.category) {
      case 'ITEMS':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(
            brandFilterHandler([
              'Around ann',
              'meeLabs',
              'Deep Roller',
              'Lukta',
              'CHIRO CARE',
              'Dr.esthe',
            ]),
          );
        }
      case 'FASHION':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(brandFilterHandler(['Around ann']));
        } else if (e.currentTarget.innerHTML === 'BAG') {
          return dispatch(brandFilterHandler(['Around ann']));
        }
      case 'LIVING':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(brandFilterHandler(['meeLabs', 'Deep Roller', 'Lukta', 'CHIRO CARE']));
        } else if (e.currentTarget.innerHTML === 'SPORTS') {
          return dispatch(brandFilterHandler(['meeLabs', 'Deep Roller']));
        } else if (e.currentTarget.innerHTML === 'LIFE STYLE') {
          return dispatch(brandFilterHandler(['Lukta', 'CHIRO CARE']));
        }
      case 'BEAUTY':
        if (e.currentTarget.innerHTML === 'ALL') {
          return dispatch(brandFilterHandler(['Dr.esthe']));
        } else if (e.currentTarget.innerHTML === 'COSME') {
          return dispatch(brandFilterHandler(['Dr.esthe']));
        }
      default:
        return dispatch(
          brandFilterHandler([
            'Around ann',
            'meeLabs',
            'Deep Roller',
            'Lukta',
            'CHIRO CARE',
            'Dr.esthe',
          ]),
        );
    }
  };

  return (
    <S.SmallCategoryModalItemContainer>
      <section className="category__nav-bar" onClick={isOpenCategoryHandler}>
        <p className="category-title">{item.category}</p>
        <span>
          {isOpenCategory ? (
            <ArrowTopIcon width="0.7rem" height="1rem" color="#A9A9A9" />
          ) : (
            <ArrowBottomIcon width="0.7rem" height="1rem" color="#A9A9A9" />
          )}
        </span>
      </section>

      {isOpenCategory && (
        <section className="category__element-container">
          {item.categoryElement.map((el: IcategoryElement) => {
            return (
              <p
                className="category-element"
                key={el.id}
                onClick={async (e) => {
                  dispatch(getNowPosition(`${item.category} ${e.currentTarget.innerHTML}`));
                  itemFilterHandler(e);
                  searchBrandHandler(e);
                  dispatch(itemSortSelectBoxHandler(false));
                  dispatch(brandSelectBoxHandler(false));
                  dispatch(smallCategoryModalHandler());
                }}
              >
                {el.title}
              </p>
            );
          })}
        </section>
      )}
    </S.SmallCategoryModalItemContainer>
  );
};

export default SmallCategoryModalItem;
