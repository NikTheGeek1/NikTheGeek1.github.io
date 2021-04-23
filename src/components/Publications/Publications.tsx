import './Publications.css';
import { storeVisitorLocation } from '../../utils/visitor-tracker';
import { LOCATIONS_ENUM } from '../../hooks-store/stores/visitor-map';
import { useStore } from '../../hooks-store/store';
import { useEffect } from 'react';
import GenericBox from '../ProfileBoxes/GenericBox/GenericBox';
import Publication from './Publication/Publication';
import TagBubble from '../TagBubble/TagBubble';

const Publications = () => {
    const visitorToken = useStore(false)[0].visitorToken;

    useEffect(() => {
        storeVisitorLocation(visitorToken, LOCATIONS_ENUM.PUBLICATIONS);
    }, []);

    return (
        <GenericBox title="Publications" rowSpan={1} columnSpan={4}>
            <Publication 
                title="Algorithms of adaptation in inductive inference."
                authorString="JP. Franken, N. C. Theodoropoulos, N. R. Bramley"
                year="2021"
                journal="Submited"
                tags={[<TagBubble title="Experiment 1" link="https://zendo-cond-3.herokuapp.com/signup"/>, <TagBubble title="Repo" link="https://github.com/NikTheGeek1/zendo-cond-3"/>]}
            />
            <Publication 
                title="Belief revision in a micro-social network: Modelling sensitivity to statistical dependencies in social learning."
                authorString="JP. Franken, N. C. Theodoropoulos, A. B. Moore, N. R. Bramley"
                year="2020"
                journal="Proceedings of the 42nd Annual Meeting of the Cognitive Science Society 2020"
                tags={[<TagBubble title="Project" link="https://cogsci.mindmodeling.org/2020/papers/0240/0240.pdf"/>, <TagBubble title="Repo" link="https://github.com/NikTheGeek1/belief-revision-experiment-2"/>]}
            />
            <Publication 
                title="External coding and salience in the tactile Simon Effect."
                authorString="J. Medina, N. Theodoropoulos, Y. Liu, P.G. Reyesa, E. Gherri"
                year="2019"
                journal="Acta Psychologica Vol. 198"
                tags={<TagBubble title="Project" link="https://doi.org/10.1016/j.actpsy.2019.102874"/>}
            />
        </GenericBox>
    );
};

export default Publications;