const CourseIdPage = ({
    params
}: {params: {courseId: string}}) => {
    return ( 
        <div>
            Course id page {params.courseId}
        </div>
     );
}
 
export default CourseIdPage;