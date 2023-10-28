"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
// import SearchInput from './SearchInput';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BiSearchAlt2 } from "react-icons/bi";
import SearchInput from "./SearchInput";

export default function Influenceurs({
    data,
    searchText,
    setTodos,
    initialData,
}) {
    const [filteredData, setFilteredData] = useState(data);
    // Filtrer les données en fonction de searchText
    if (searchText === "") {
        // Réinitialiser filteredData à sa valeur d'origine lorsque searchText est vide
        setTodos(initialData);
    }
    const handleSearch = () => {
        if (searchText != "") {
            // Filtrer les données en fonction de searchText
            const filtered = data.filter((row) =>
                row.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setTodos(filtered);
        }
    };
    return (
        <div className=" absolute w-[1150px] h-[155px] top-[144px] left-[285px] p-[25px] rounded-[8px] border gap-[30px] bg-[#FFFFFE]">
            <div className=" flex w-[1100px] h-[38px] justify-between">
                <h3 className="w-[182px] h-[22px] font-nunito text-[16px] font-medium leading-[22px] text-center text-[#12130F]">
                    Rechercher influenceurs
                </h3>
                <button className="w-[132px] h-[35px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-[8px] gap-[10px] bg-[#15A36E] text-center text-white leading-3" onClick={handleSearch}>
                    Rechercher
                </button>
            </div>
            {/* row inputs */}
            <div className="w-[1100px] h-[50px] flex justify-evenly my-6 items-center ">
                <SearchInput />
                <Select
                    size='small'
                    sx={{
                        backgroundColor: "#fff",
                        
                        m: 1,
                        borderRadius: "8px",
                        borderBlockColor:"#A6A6A6",
                        outline:"none",
                        "&.MuiButtonBase-root:hover": {
                         borderColor: "#A6A6A6",
                         outlineColor:"#A6A6A6"
                         }
                    }}
                    MenuProps={{ disableScrollLock: true }}
                    value="Nombre de followers"
                    displayEmpty>
                    <MenuItem value={"Nombre de followers"}>Nombre de followers</MenuItem>
                    <MenuItem value={"Nombre de followers"}>Nombre de followers</MenuItem>

                </Select>
                <Select
                   size='small'
                    sx={{
                        backgroundColor: "#fff",
                        m: 1,
                        width: "20ch",
                        borderRadius: "5px",
                         borderRadius: "8px",
                        borderBlockColor:"#A6A6A6",
                    }}
                    MenuProps={{ disableScrollLock: true }}
                    value="Nombre de vue"
                    displayEmpty
                >
                    <MenuItem value={"Nombre de vue"}>Nombre de vue</MenuItem>
                    <MenuItem value={"Nombre de vue"}>Nombre de vue</MenuItem>

                </Select>
                <Select
                    size='small'
                    sx={{
                        backgroundColor: "#fff",
                        m: 1,
                        borderRadius: "5px",
                         borderRadius: "8px",
                        borderBlockColor:"#A6A6A6",
                    }}
                    MenuProps={{ disableScrollLock: true }}
                    value="Categorie"
                >
                    <MenuItem value={"Categorie"}>Categorie</MenuItem>
                    <MenuItem value={"Categorie"}>Categorie</MenuItem>

                </Select>
                <Select
                    size="small"
                    sx={{
                        backgroundColor: "#fff",
                        m: 1,
                        borderRadius: "5px",
                         borderRadius: "8px",
                        borderBlockColor:"#A6A6A6",
                    }}
                    MenuProps={{ disableScrollLock: true }}
                    value="Audiance age"
                    displayEmpty
                >
                    <MenuItem value={"Audiance age"}>Audiance age</MenuItem>
                    <MenuItem value={"Audiance age"}>Audiance age</MenuItem>

                </Select>
                <Select
                    size='small'
                    sx={{
                        backgroundColor: "#fff",
                        m: 1,
                        width: "15ch",
                         borderRadius: "8px",
                        borderBlockColor:"#A6A6A6",
                    }}
                    MenuProps={{ disableScrollLock: true }}
                    value="note"
                    displayEmpty
                >
                    <MenuItem value={"note"}>note</MenuItem>
                    <MenuItem value={"note2"}>note2</MenuItem>

                </Select>

            </div>
        </div>
    );
}
