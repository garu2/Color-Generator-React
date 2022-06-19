import SinlgeColor from "./SinlgeColor";

const DisplayColors = ({ list }) => {
    return ( 
        <div className="colors-box">
            {
                list.map((color, index) => (
                    <SinlgeColor key={index} hexColor={color.hex}/>
                ))
            }
        </div>
    );
}
 
export default DisplayColors;