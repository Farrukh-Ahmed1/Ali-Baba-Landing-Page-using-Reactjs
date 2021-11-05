import { Typography } from '@mui/material';
import React from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Modals from "./ModalCom.js"

const Subnavbar = () => {
    const arr = ["Ready To Ship", "Personal Protective", "Buyer Central", "Sell on Alibaba", "Help"]
    return (
        <div style={{ boxShadow: "1px 1px 5px 1px grey", backgroundColor: "white", border: "2px solid #E6E7EB", width: "100%", height: "60px", paddingLeft: "20px", display: "flex" }}>
            <div className="sub_cate_btn">
                <Modals name="Categories" />
            </div>
            <div>
                <ul className="sub_cate_center">
                    {
                        arr.map((e, i) => (
                            <>
                                <li style={{fontWeight:"500",fontSize:"18"}}>{e}</li>
                            </>
                        ))
                    }
                </ul></div>
            <div className="sub_cate_right">
                <Typography variant="h6">ENGLISH-PKR <ArrowDropDownOutlinedIcon /></Typography>
                <Typography variant="h6">Ship to: <ArrowDropDownOutlinedIcon /> </Typography>
            </div>
        </div>
    )
}
export default Subnavbar