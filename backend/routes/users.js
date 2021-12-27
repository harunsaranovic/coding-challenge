
const User = require('../models/user');
const authorize = require('../middlewares/authorization');

module.exports = function (router) {

    router.get('/users', authorize('ADMIN'), function (req, res) {
            User.findAll().then((users) => {
            if (users) {
                return res.send(users);
            } else {
                return 'Users not found';
            }
        });
    });

    router.get('/users/:id', authorize(), function (req, res) {
        User.findOne({
            where: { id: req.params.id }
        }).then((user) => {
            if (user) {
                return res.send(user);
            } else {
                return 'User not found';
            }
        });
    });

    router.post('/users', (req, res, next) => {
        User.create({ 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }).then(data => res.status(200).send({
            data
        }))
            .catch((error) => res.status(400).send(error));
    });

    router.put('/users/:id', authorize(''), (req, res, next) => {
        User.update({ 
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }, { where: { id: req.params.id } 
        }).then(data => {
            if(data[0] === 1)
                res.status(200).send({ message: 'The user has been updated' })
            if(data[0] === 0)
                res.status(200).send({ message: 'The user not found or recieved same data'  })
        })
            .catch((error) => res.status(400).send(error));
    });

    router.delete('/users/:id', authorize('ADMIN'), (req, res, next) => {
        User.destroy({ where: { id: req.params.id } 
        }).then((data) => {
            if(data === 1)
                res.status(200).send({ message: 'The user has been deleted' })
            else
                res.status(200).send({ message: 'User not found' })
        })
            .catch((error) => res.status(400).send(error));
    });
}