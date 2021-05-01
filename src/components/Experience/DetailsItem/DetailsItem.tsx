import './DetailsItem.css';

const DetailsItem = ({children}: {children: string | React.ReactNode}) => {

    return (
        <li className="experience-details-item">{children}</li>
    );
};

export default DetailsItem;