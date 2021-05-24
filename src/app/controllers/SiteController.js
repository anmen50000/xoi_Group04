const Course = require('./models/Course');
const {mutipleMongooseTobject} = require('../../util/mongoose');
class SiteController {

    index(req, res, next){
        Course.find({})
        .then(courses => {
        res.render('home', { 
        courses: mutipleMongooseTobject(courses)})})
        .catch(next)
    }

    //GET

        search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController;