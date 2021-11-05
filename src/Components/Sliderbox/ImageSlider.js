import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1200}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        style={{margin:"0 1rem"}}
      />
    </div>
  );
}

export default ImageSlider