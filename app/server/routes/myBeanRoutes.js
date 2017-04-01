module.exports = function(app) {
    var myBeanCtrl = require('../controller/myBeanController');

    app.route('/createBean')
        .post(myBeanCtrl.createMyBean);

    app.route('/myBeans')
        .get(myBeanCtrl.listAllBeans);

    app.route('/updateBean/:BeanID')
        .put(myBeanCtrl.updateMyBean);

    app.route('/deleteMyBean/:BeanID')
        .delete(myBeanCtrl.deleteMyBean);
}