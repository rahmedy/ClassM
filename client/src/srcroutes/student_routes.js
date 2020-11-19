import Dashboard_student from "views/Dashboard_student.js";
const router = express.Router();
const express = require("express");
const Course = require("/classmodel.js");
const Student = require("/studentmodel.js")

var routes = [
    {
        path: "/add-a-class",
        name: "Add a Class",
        rtlName: "لوحة القيادة",
        icon: "fas fa-plus-circle",
        component: Dashboard_student,
        layout: "/admin"
    }
];

router.get('/:id', (req, res) => {
    function buildRoutes() {

        const id = req;
        var courseList = [];

        Student.findOne({ id: id })
            .then(getCourses => {

                for (var i = 0; i < Student.schedule.length; i++) {
                    var courseIterator = Student.schedule[i].id;
                    courseList.push(courseIterator);
                }
                getCourses();
            }).catch(err => res.status(422).json(err));

        createRoute(courseList);

        function createRoute(courseList) {

            for(var i = 0; i<courseList.length; i++) {

            var newCourse = Course.findOne({id: courseList[i]}).toArray();

            var addCourseButton = {
                path: "/" + newCourse.courseName,
                name: newCourse.courseName,
                rtlName: "",
                icon: "fas fa-graduation-cap",
                component: Dashboard_student,
                layout: "/admin"
            }
            routes.unshift(addCourseButton);
            console.log(routes);
        }};
      
    };
    buildRoutes();
})

export default routes;


