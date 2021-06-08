import './Code.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";



const Code = ({ children, onChange, height, width }: { 
    height: string, 
    width?: string,
    children: string, 
    onChange?: (value: string) => void 
}) => {
    return (
        <div className="code-container">
            <AceEditor
                height={height}
                width={width || "100%"}
                className="code-mirror"
                value={children}
                mode='typescript'
                theme='monokai'
                onChange={onChange}
                readOnly={onChange ? false : true}
            />
        </div>
    );
};

export default Code;