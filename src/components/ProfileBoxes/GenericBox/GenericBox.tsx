import BoxTitle from '../../BoxTitle/BoxTitle';
import './GenericBox.css';

const GenericBox = ({children, title, rowSpan, columnSpan}: 
    {title: string, rowSpan: number, columnSpan: number, children?: JSX.Element|JSX.Element[];}) => {

    return (
        <div className="profile-generic-box" 
        style={{
            gridColumn: "span " + columnSpan,
            gridRow: "span " + rowSpan
            }}>
            <BoxTitle title={title} />
            {children}
        </div>
    );
};

export default GenericBox;