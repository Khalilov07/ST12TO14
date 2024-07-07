import './homepage.css'

import CourseItem from '../../components/CourseItem/CourseItem';

const HomePage = () => {

    const array = [
        {
            title: "HTML",
            duration: 2,
            descr: "HTML - это скелет сайта"
        },
        {
            title: "CSS",
            duration: 2,
            descr: "CSS - это стилизация сайта"
        },
        {
            title: "JS",
            duration: 2,
            descr: "JS - это логика сайта"
        },
    ]

    return (
        <div className='wrapper'>
            {array.map(course =>  <CourseItem title={course.title} duration={course.duration} descr={course.descr} /> )}
        </div>
    );
};

export default HomePage;

