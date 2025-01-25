import './BlogPostBox.css';
import { useStore } from '../../../hooks-store/store';
import BoxTitle from '../../BoxTitle/BoxTitle';
import BoxText from '../../../components/Texts/BoxText';
import FullScreenModal from '../../../components/FullScreenModal/FullScreenModal';
import { useState } from 'react';

const BlogPostBox = ({ children, title, rowSpan, columnSpan, subtitle }:
    {
        title: string,
        rowSpan: number,
        columnSpan: number,
        children?: React.ReactNode | React.ReactNode[],
        subtitle: string
    }) => {
    const [showModal, setShowModal] = useState<boolean>();
    const scrDims = useStore()[0].scrDims;

    if (scrDims && scrDims.width < 500) {
        columnSpan = 4; // this also exists in the GenericBox component
    }

    const toggleModal = () => {
        const closingModal = showModal;
        if (closingModal) {
            document.getElementsByTagName("body")[0].setAttribute("style", "overflow: auto");
        }
        setShowModal(oldState => !oldState);
    };

    return (
        <div className="blog-post-box"
            style={{
                gridColumn: "span " + columnSpan,
                gridRow: "span " + rowSpan
            }}
            onClick={toggleModal}
        >
            <BoxTitle title={title} />
            <BoxText>{subtitle}</BoxText>
            {showModal && <FullScreenModal toggleModal={toggleModal}>
                {children}
            </FullScreenModal>}
        </div>
    );
};

export default BlogPostBox;