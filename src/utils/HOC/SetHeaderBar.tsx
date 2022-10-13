import { Component } from 'react';
import HeaderBar from 'components/ui/navbar/HeaderBar';

export default function SetHeaderBar(SpecComponent: any) {
  return class SetHeaderBar extends Component {
    render() {
      return (
        <>
          <HeaderBar />
          <SpecComponent />
        </>
      );
    }
  };
}
