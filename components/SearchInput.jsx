
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchStore } from '@/store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '20%',
  height:"79%",
  border: '1px solid #A6A6A6',
//   met un border radius
    borderRadius: '5px',
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '60%',
  },
}));


export default function SearchInput() {
   const searchText = useSearchStore((state) => state.searchText);
  const setSearchText = useSearchStore((state) => state.setSearchText);
  // const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Met à jour le texte de recherche
  };
//   console.log(searchText)
  return (
    <>
    <Search>
      <SearchIconWrapper>
        <SearchIcon  width={10}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="title de l'influenceur"
        inputProps={{ 'aria-label': 'search' }}
        value={searchText}
        onChange={handleSearchChange}
      />
    </Search>
    </>
  );
}
