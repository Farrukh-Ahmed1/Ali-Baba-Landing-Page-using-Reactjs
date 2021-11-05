import React from 'react';
import Box from '@mui/material/Box';
import SliderBoxItem from "./SliderBoxItems";
import ImageSlider from './ImageSlider.js';

function BoxSx() {
  return (
    <>
      <Box
        style={{
          width: "85%",
          height: 550,
          display: "flex",
          backgroundColor: 'white',
          margin: "2rem auto",
          border: "1px solid grey",
          boxShadow: "1px 1px 5px 1px grey"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px auto" }}>
          <div>
            <h3 style={{ margin: "1rem 2rem" }}>MY MARKETS</h3>
            <hr />
            <SliderBoxItem
              img="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg"
              img="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg"
            /></div>
          <ImageSlider />
        </div>
      </Box>
    </>
  );
}
export default BoxSx