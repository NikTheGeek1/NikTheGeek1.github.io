import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useStore } from '../../../hooks-store/store';
import BoxTitle from '../../BoxTitle/BoxTitle';
import './GenericBox.css';
import { genericBoxTitle } from 'generic-box-title';

const GenericBox = ({ children, title, rowSpan, columnSpan, titleType }:
    {
        title: string,
        rowSpan: number,
        columnSpan: number,
        children?: JSX.Element | JSX.Element[],
        titleType: genericBoxTitle
    }) => {
    const scrDims = useStore()[0].scrDims;

    if (scrDims && scrDims.width < 500) {
        columnSpan = 4;
    }

    return (
        <div className="profile-generic-box"
            style={{
                gridColumn: "span " + columnSpan,
                gridRow: "span " + rowSpan
            }}>
            {
                titleType === 'title' ?
                    <SectionTitle title={title} /> :
                    <BoxTitle title={title} />
            }
            {children}
        </div>
    );
};

export default GenericBox;