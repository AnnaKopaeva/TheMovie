import React from 'react';
import Select from 'react-select';

import { SORTED_OPTIONS } from './constants';

// styles
import s from './styles/NavigationBar.module.scss';


export class NavigationBar extends React.Component {
  handleSortChange = (selectedSortOption) => {
    this.props.changeSort(selectedSortOption.value);
  };

  render() {
    return (
      <Select
        className={s.root}
        onChange={this.handleSortChange}
        options={SORTED_OPTIONS}
        defaultValue={SORTED_OPTIONS[0]}
      />
    );
  }
}

export default NavigationBar;
