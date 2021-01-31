import { createContext, useEffect, useReducer,useContext, useState} from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

export const context = createContext()

function App() {
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState(0.0);
  
  useEffect(() => { //show stored data
    const temp = localStorage.getItem('f')
    if(temp!=null){
      setCourses(JSON.parse(temp))
      calGpa(JSON.parse(temp))
    }
  },[])

  useEffect(() => {//add item to localStorage when courses change
    localStorage.setItem('f',JSON.stringify(courses))
  },[courses]) 
  
  //FROM LAB4
  function calGpa(data) {
    var grade = 0
    var creditAll  = 0 
    var gpaAll = 0
    data.forEach((item) => {
      switch(item.grd){
        case 'A' :
          grade = 4
          break
        case 'B+' :
          grade = 3.5
          break
        case 'B' :
          grade = 3
          break
        case 'C+' :
          grade = 2.5
          break
        case 'C' :
          grade = 2
          break
        case 'D+' :
          grade = 1.5
          break
        case 'D' :
          grade = 1
          break
        case 'F' :
          grade = 0
          break
      }  
      creditAll += Number(item.crd) 
      gpaAll += grade * Number(item.crd)
    });
    setGpa(gpaAll/creditAll) 
  }

  function addCourse(data) {
    const course = [...courses,data]
    setCourses(course)
    // recalculate GPA
    calGpa(course);
  }

  function onDeleteCourse(id) {
    const course = courses.filter(item => {
      return item.name !== id
    })
    setCourses(course)
    calGpa(course)
  }

  return (
    <context.Provider value = {addCourse}>
      <div id="mycourse"className="container mx-auto h-screen">
        <h1 className="text-center text-4xl p-3 tracking-widest">
          GPA CALCULATOR
        </h1>
        <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
          <h1 className="text-2xl my-3">My courses</h1>
          {/* TODO display courses */}
          {courses.map(item => {
            return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
          })}
        <CourseForm /> 
        </div>
        {/* TODO add course input form */}
        {/* TODO display calculated GPA */}
        <p id="gpafield" className="h-1/10 md:w-2/3 p-3 rounded-lg mx-auto overflow-auto">
          GPA: {gpa.toFixed(2)}
        </p>
        <a href='/'>HomePage</a>
      </div>
  </context.Provider>
  );
}

export default App;