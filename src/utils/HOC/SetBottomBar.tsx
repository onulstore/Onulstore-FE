import { Component } from 'react';
import BottomTabBar from 'components/ui/navbar/BottomTabBr';

export default function SetBottomTabBar(SpecComponent: any) {
  return class SetBottomTabBar extends Component {
    render() {
      return (
        <>
          <SpecComponent />
          <BottomTabBar />
        </>
      );
    }
  };
}
