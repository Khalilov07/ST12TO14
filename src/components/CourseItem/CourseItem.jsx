import './courseitem.css'

const CourseItem = (props) => {

    // props, props, props

    return (
        <div className='course'>
            <h2 className='course__title'>Название: {props.title}</h2>
            <h3 className='course__duration'>Продолжительность: {props.duration}</h3>
            <p className='course__descr'>Описание: {props.descr}</p>
        </div>
    );
};

export default CourseItem;