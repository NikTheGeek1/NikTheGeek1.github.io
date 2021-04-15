import './BoxTitle.css';
import TertiaryHeading from "../Headings/TertiaryHeading/TertiaryHeading";

const BoxTile = ({ title }: { title: string }) => {

    return (
        <div className="box-title-container">
            <TertiaryHeading content={title}/>
        </div>
    );
};

export default BoxTile;