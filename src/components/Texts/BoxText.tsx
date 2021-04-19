import './BoxText.css';

const BoxText = ({children}: {children: string}) => {

    return (
        <p className="box-plain-text">
            {children}
        </p>
    );
};

export default BoxText;