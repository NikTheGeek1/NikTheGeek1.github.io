import './BoxText.css';

const BoxText = ({children, extraClasses}: {children: string | string[], extraClasses?:string}) => {

    return (
        <p className={"box-plain-text " + extraClasses}>
            {children}
        </p>
    );
};

export default BoxText;