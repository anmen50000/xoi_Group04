class NewsController {
    
    index(req, res){
        res.render('news')}

    //GET Slug
    show(req, res){
        res.send('NEWS DETAIL')
    }
}
module.exports = new NewsController;