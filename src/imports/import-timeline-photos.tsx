import codeclanGraduationThumb from '../assets/images/codeclan-graduation-thumbnail.jpg';
import codeclanGraduationlqMIN from '../assets/images/codeclan-graduation-lqMIN.jpg';
import codeclanGraduationlqMAX from '../assets/images/codeclan-graduation-lqMAX.jpg';
import codeclanGraduationrMIN from '../assets/images/codeclan-graduation-rMIN.jpg';
import codeclanGraduationrMAX from '../assets/images/codeclan-graduation-rMAX.jpg';

type allPhotosStructure = {[key: string]: ImagesVersionsInterface}

const allPhotos: allPhotosStructure = {
    codeclanGraduation: {
        thumbnail: [
            codeclanGraduationThumb,
        ],
        lowerQualityMin: [
            codeclanGraduationlqMIN,
        ],
        lowerQualityMax: [
            codeclanGraduationlqMAX,
        ],
        reducedMin: [
            codeclanGraduationrMIN,
        ],
        reducedMax: [
            codeclanGraduationrMAX,
        ]
    },

};

export default allPhotos;