import React from 'react';
import Card from "./Card/Card";
import "../CssFiles/Navbar.css";
import { useState } from 'react';
import Bigcard from "./Card/BigCard";


const CardsRender = () => {
    const [state,] = useState(
        [
            {
                img: "https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png",
                tittle: "New Arrivals",
                img1: "https://s.alicdn.com/@sc04/kf/H17f238c697c94788b151a500bb74b4c8T.jpg_120x120.jpg",
                img2: "https://s.alicdn.com/@sc04/kf/Hf2c1b9c2e8c941d293add356039ebd2cV.jpg_120x120.jpg",
                des: "2 Pieces",
                
            },
            {
                img: "https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png",
                tittle: "Top-Ranked Product",
                img1: "https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg",
                img2: "	https://s.alicdn.com/@sc04/kf/Hf6254a5a3eaf44aeaa124b395e373c3bx.jpg_120x120xz.jpg",
                des: "3 Pieces",
            },
            {
                img: "https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png",
                tittle: "Personal Protective",
                img1: "https://s.alicdn.com/@sc04/kf/Hbb0f406b1e8446feb5433b22f43b4665H.jpg_120x120xz.jpg",
                img2: "https://s.alicdn.com/@sc04/kf/H09501b29f1654e7f963dcfe9c130971aM.jpg_120x120xz.jpg",
                des: "4 Pieces",
            },
            {
                img: "https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg",
                tittle: "Dropshipping",
                img1: "https://s.alicdn.com/@sc04/kf/H658f209c945d49d6a32d5649243945252.jpg_120x120xz.jpg",
                img2: "https://s.alicdn.com/@sc04/kf/H53c8e34332694dcab73f0178470416da7.jpg_120x120xz.jpg",
                des: "10 Pieces",
            },
            {
                img: "https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png",
                tittle: "Global Original Sources",
                img1: "https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg",
                img2: "https://s.alicdn.com/@sc04/kf/H360b8eb732cf49249b5a9ac653193f7cn.jpg_120x120xz.jpg",
                des: "1 Piece",
            },
            {
                img: "https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg",
                tittle: "Dropshipping",
                img1: "https://s.alicdn.com/@sc04/kf/H524face07b6f4e77866abab13e408ef4M.jpg_120x120xz.jpg",
                img2: "https://s.alicdn.com/@sc04/kf/Hd4a281b621614decb8984eb4f624a026b.jpg_120x120xz.jpg",
                des: "1 piece",
            },
        ]
    )
    return <> (
        <div className="card_main">
            {
                state.map((e, i) => {
                    return <Card
                        logo={e.img}
                        tittle={e.tittle}
                        img1={e.img1}
                        img2={e.img2}
                        price={e.price}
                        desc={e.des}
                        
                    />
                })
            }
        </div>
        )
        <div>
            <div style={{ display: "flex", margin: "2rem auto", width: "85%" }}>
                <h1>CONSUMER ELECTRONICS </h1>
            </div>
            <Bigcard
                Rightimg="	https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
                h2=" Select Novelty Products"
            />
            <div style={{ display: "flex", margin: "2rem auto", width: "85%" }}>
                <h1>APPAREL </h1>
            </div>
            <Bigcard
                Rightimg="	https://img.alicdn.com/tfs/TB1ZXXNIgHqK1RjSZFkXXX.WFXa-300-320.jpg"
                h2="Trending Style"
            />
        </div>
    </>
}
export default CardsRender
