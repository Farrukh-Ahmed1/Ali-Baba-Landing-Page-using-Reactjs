import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BigCardInner from './BigCardInner';

export default function BigCard({ Rightimg, h2 }) {
  
  return (
    <>
      <Card sx={{ display: 'flex', width: "85%", margin: "1rem auto", height: "370px" }}>
        <CardMedia
          component="img"
          sx={{ width: 390 }}
          image={Rightimg}
          alt="Live from space album cover"
        />
        <h2 style={{
          position: "absolute",
          marginTop: "40px",
          width: "270px",
          marginLeft: "38px",
          fontWeight: "500",
          color: "white",
          fontSize: "30px",
          lineHeight: "30x",
          paddingRight: "30px",
          textShadow: "0 2px 4px rgb(0 0 0 / 12%)"
        }}>
          {h2}
        </h2>
        <span style={{
          padding: "10px 16px",
          backgroundColor: "white",
          position: "absolute",
          marginTop: "280px",
          marginLeft: "38px",
          overflow: "hidden",
          fontSize: "20px",
          borderRadius: "20px",
          fontWeight: "500"
        }}>
          Source Now
        </span>
        <Box style={{ display: 'flex', width: "auto", flexDirection: 'column' }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div >
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Factories"
                text="Customization service Avail"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Delivered Duty Paid"
                text="Include Shipping and duty fees"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
            </div>
            <div >
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Top sales"
                text="Computer Hardware & Software"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Camera  & Accessories"
                text="Customization service Avail"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
            </div>
            <div >
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Premium OEM Factories"
                text="Customization service Avail"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
              <BigCardInner
                icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
                h2="Premium OEM Factories"
                text="Customization service Avail"
                veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
                img="https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"
              />
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
}
