import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
    }


    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// state comes from reducer (index.js) name => courses
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// double brackets take result of first function (which returns a function) and then runs it with the next brackets parameter
// if we don't supply a "mapDispatchToProps" function, connect will automatically inject a dispatch prop into the component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);