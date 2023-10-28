"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MoonLoader from "react-spinners/MoonLoader";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function TabInfluenceurs({ data, loading, searchText }) {
    const [selectedRowsCount, setSelectedRowsCount] = useState(0);
    const [selectedRows, setSelectedRows] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      const router = useRouter();

      const handleRowClick = (id, isCheckbox) => {
        if (!isCheckbox) {
          // Naviguer vers la page de détails avec l'ID
          router.push(`/Details/${id}`);
        }
      };


    const columns = [
        {
            field: 'checkId',
            headerName: '▢',
            width: 70,
            renderCell: (params) => (
                <input
                    type="checkbox"
                    checked={selectedRows.includes(params.id)}
                    onChange={() => handleCheckboxChange(params.id)}
                    className="checkbox"
                    onClick={(e) => e.stopPropagation()}
                />
            ),
        },
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'completed', headerName: 'Completed', width: 130 },
        { field: 'Tauxdeconversion', headerName: 'Taux de conversion', width: 180 },
        { field: 'Note', headerName: 'Note', width: 130 },
        { field: 'Actions', headerName: 'Actions', width: 190 },
    ];

    const rows = data.slice(0, 4).map((todo) => ({
        id: todo.id,
        title: todo.title,
        completed: `${todo.completed}`,
        Tauxdeconversion: "8%",
        Note: "★ 4.5",
        Actions: '•••',
    }));

    // Filtrer les données en fonction de searchText
    // const filteredData = searchText
    // ? rows.filter((row) =>
    //     row.title.toLowerCase().includes(searchText.toLowerCase())
    //   )
    // : rows;

    useEffect(() => {
        setSelectedRowsCount(selectedRows.length);
    }, [selectedRows]);

    const handleCheckboxChange = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    return (
        <div className=" absolute w-[1150px] h-[532px] top-[314px] left-[285px] p-[25px] rounded-[12px] gap-[20px] bg-[#FFFFFE] shadow-md shadow-[#0000001A]"
        >
            <div className="flex justify-between w-[1100px] h-[38px]  mb-3">
                <div className="w-[208px] h-[22px] gap-[10px] flex justify-center">
                    <h2 className="w-[157px] h-[22px] font-nunito text-[16px] font-medium leading-[22px] tracking-[0em] text-center">Liste Elements Total</h2> <span className="w-[41px] h-[21px] font-roboto-flex text-[18px] font-medium leading-[21px] tracking-[0em] text-center text-[#818181]">({data.length})</span>
                </div>
                <button      className=" btnTab w-[94px] h-[38px] pl-[15px] text-center leading-3 pr-[15px] pt-[10px]  pb-[10px] text-white rounded-[8px] gap-[10px] bg-[#15A36E] hover:bg-[#15A36E]" onClick={handleOpen}>
                    <span className="font-bold">({selectedRowsCount})</span>Inviter
                </button>
            </div>
            {loading ? (
                <MoonLoader className="absolute left-1/2 right-1/2" />
            ) : (
                <table className="w-[1100px] h-[366px] rounded-t-[12px] border-t-[1px] border-l-[1px] border-r-[1px] border-b-[1px] border-solid border-[#D9D9D9]">
                    <thead className="w-[1100px] h-[58px] top-[83px] left-[25px] p-[19px] rounded-t-[12px] border-t-[1px] border-l-[1px] border-r-[1px] border-b-[1px] border-solid border-[#D9D9D9] justify-between bg-[linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #F8F8F8, #F8F8F8)]"
                    >
                        <tr className="bg-[#F8F8F8]">
                            {columns.map((column) => (
                                <th key={column.field} className="text-center py-5 pr-1 font-bold text-[#a2a2a2] text-lg">
                                    {column.headerName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        {rows.map((row) => (
                            <tr key={row.id} className="border cursor-pointer">
                                {columns.map((column) => (
                                    <td key={column.field} className="p-7 h-[78px] text-center border-b-[1px] border-solid border-[#D9D9D9] ">
                                        {column.field === 'checkId' ? (
                                            <div
                                                onClick={() => handleRowClick(row.id, true)}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.includes(row.id)}
                                                    onChange={() => handleCheckboxChange(row.id)}
                                                    className="rounded-md p-2"
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() => handleRowClick(row.id, false)}
                                            >
                                                {column.renderCell ? (
                                                    column.renderCell({
                                                        id: row.id,
                                                        field: column.field,
                                                        value: row[column.field],
                                                    })
                                                ) : (
                                                    row[column.field]
                                                )}
                                            </div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button variant="contained"  className=" btnTab w-[94px] text-white h-[38px] pl-[15px] text-center leading-3 pr-[15px] pt-[10px] pb-[10px] mt-3 rounded-[8px] gap-[10px] bg-[#15A36E] hover:bg-[#15A36E]" onClick={handleOpen}>
                <span className="font-bold">({selectedRowsCount})</span>Inviter
            </button>
            {open && <BasicModal handleClose={handleClose} open={open} />}
        </div>
    );
}

const BasicModal = ({ handleClose, open }) => {


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className=" relative w-[100%] h-[1024px] pt-[162px] pr-[370px] pb-[162px] pl-[370px] gap-10 bg-[#00000033]">
                    <form className='absolute w-[500px] h-[458px] p-[25px] rounded-[12px] gap-[20px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#FFFFFE] shadow-[0px 4px 15px 0px #0000001A] text-black flex flex-col   '>
                        <div className="w-[98%] h-[27px] mb-5 flex justify-between items-center">
                            <h1 className="w-[206px] h-[27px] font-[poppins] text-xl font-[400] leading-[27px] tracking-0 text-center">Choix de la campagne</h1>
                            <span className=' font-bold cursor-pointer w-[20px] gap-[20px] h-[20px]' onClick={handleClose}>X</span>
                        </div>
                        <div className="w-[450px] h-[61px]  gap-[5px] rounded-lg  flex flex-col items-center justify-center">
                            <label htmlFor="" className="w-[100%] h-[16px] font-Nunito text-lg font-[500] leading-[16px] text-left text-[#818181]">Nom de l'entreprise</label>
                            <Select
                                fullWidth
                                sx={{
                                    backgroundColor: "#fff",

                                    m: 1,
                                    borderRadius: "8px",
                                    borderBlockColor: "#A6A6A6",
                                    outline: "none",
                                    "&.MuiButtonBase-root:hover": {
                                        borderColor: "#A6A6A6",
                                        outlineColor: "#A6A6A6"
                                    }
                                }}
                                MenuProps={{ disableScrollLock: true }}
                                value="Automne hiver 2022-20%"
                                displayEmpty>
                                <MenuItem value={"Automne hiver 2022-20%"}>Automne hiver 2022-20%</MenuItem>
                                <MenuItem value={"Automne hiver 2022-20%"}>Automne hiver 2022-20%</MenuItem>
                            </Select>
                        </div>
                        <div className="w-[450px] h-[61px]  mt-5 gap-[5px] rounded-lg  flex flex-col items-center justify-center">
                            <label htmlFor="Budget par influenceur" className="w-[100%] h-[16px] font-Nunito text-lg font-[500] leading-[16px] text-left text-[#818181]">Budget par influenceur</label>
                            <TextField
                                fullWidth
                                sx={{
                                    backgroundColor: "#fff",

                                    m: 1,
                                    borderRadius: "8px",
                                    borderBlockColor: "#A6A6A6",
                                    outline: "none",
                                    "&.MuiButtonBase-root:hover": {
                                        borderColor: "#A6A6A6",
                                        outlineColor: "#A6A6A6"
                                    }
                                }}
                                id="Budget par influenceur"
                                placeholder=" Votre Budget"
                            />
                        </div>
                        <div className="w-[450px] h-[61px] gap-[5px] mt-5 rounded-lg  flex flex-col items-center justify-center">
                           <label htmlFor="Cout par action" className="w-[100%] h-[16px] font-Nunito text-lg font-[500] leading-[16px] text-left text-[#818181]">Cout par action</label>
                            <TextField
                                fullWidth
                                sx={{
                                    backgroundColor: "#fff",

                                    m: 1,
                                    borderRadius: "8px",
                                    borderBlockColor: "#A6A6A6",
                                    outline: "none",
                                    "&.MuiButtonBase-root:hover": {
                                        borderColor: "#A6A6A6",
                                        outlineColor: "#A6A6A6"
                                    }
                                }}
                                id="Budget par influenceur"
                                placeholder=" Votre Budget"
                            />
                        </div>

                       

                        <button variant="contained"    className="w-[136px] text-white h-[36px] pl-[15px] pr-[15px] pt-[10px] pb-[10px] rounded-[8px] text-center leading-3 text-sm bg-[#15A36E] hover:bg-[#15A36E] ">
                            Envoyer invitation
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
}

