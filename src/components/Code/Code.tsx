import './Code.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";



const Code = ({ children, onChange, readOnly }: { readOnly: boolean, children: string, onChange?: (value: string) => void }) => {
    return (
        <div className="code-container">
            <AceEditor
                className="code-mirror"
                value={children}
                mode='typescript'
                theme='monokai'
                name="UNIQUE_ID_OF_DIV"
                onChange={onChange}
                readOnly={readOnly}
            />
        </div>
    );
};

export default Code;