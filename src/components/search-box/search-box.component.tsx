// import { Component } from 'react';
import { ChangeEventHandler, ChangeEvent } from 'react';

import './search-box.styles.css';

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type USAddress = {
//   street: string;
//   state: string;
// }

// type ItalianAddress = {
//   street: string;
//   region: string;
// }

// type WesternAddress = CanadianAddress | USAddress | ItalianAddress;

// const Address: WesternAddress = {
//   street: 'ada',
//   state: 'erwr'
//   // province: 'rewrewr'
//   // region: 'werewrew'
// }

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;

//     return (
//       <input
//         className={`search-box ${className}`}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
