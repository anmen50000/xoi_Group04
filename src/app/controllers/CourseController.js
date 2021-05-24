const Course = require('./models/Course');
const {mongoosetoObject} = require('../../util/mongoose');
class CourseController {

    //GET /courses/:slug
        show(req, res, next)    {
        Course.findOne({slug: req.params.slug})
        .then(course =>
            res.render('courses/show', { course: mongoosetoObject(course)}))
            .catch(next);
        }
    //GET /courses/create
        create(req, res, next)    {
            res.render('courses/create')}

    //POST /courses/store
        store(req, res, next)    {
            const course = new Course (req.body);
            course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error =>{});}

    //GET /courses/edit
        edit(req, res, next) {
            Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
            course: mongoosetoObject(course)}))
            .catch(next);}
            
    //PUT /courses/:id/update
        update (req , res, next){
            Course.updateOne({ _id: req.params.id}, req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // delete /courses/:id
    destroy (req , res, next){
        Course.delete({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next);
    }
    // patch /courses/:id/force  
    forceDestroy (req , res, next){
        Course.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next);

    }
    // patch /courses/:id/restore
    restore (req , res, next){
        Course.restore({ _id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next);
    }
}
    module.exports = new CourseController; 