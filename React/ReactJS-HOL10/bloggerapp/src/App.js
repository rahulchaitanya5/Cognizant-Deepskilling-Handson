import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  let showCourses = true;
  let showBooks = true;
  let showBlogs = true;

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "40px"
      }}
    >

      {showCourses && <CourseDetails />}

      {showBooks ? <BookDetails /> : null}

      {showBlogs ? <BlogDetails /> : null}

    </div>

  );

}

export default App;