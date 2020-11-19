import Dashboard from "../views/Dashboard.js";
const router = express.Router();
const express = require("express");
const Course = require("/classmodel.js");
const Teacher = require("/teachermodel.js")

var routes = [
    {
        path: "/add-a-class",
        name: "Add a Class",
        rtlName: "لوحة القيادة",
        icon: "fas fa-plus-circle",
        component: Dashboard,
        layout: "/admin"
    }
];

router.get('/:id', (req, res) => {
    function buildRoutes() {

        const id = req;
        var courseList = [];

        Teacher.findOne({ id: id })
            .then(getCourses => {

                for (var i = 0; i < Teacher.schedule.length; i++) {
                    var courseIterator = Teacher.schedule[i].id;
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
                component: Dashboard,
                layout: "/admin"
            }
            routes.unshift(addCourseButton);
            console.log(routes);
        }};
      
    };
    buildRoutes();
})

export default routes;


