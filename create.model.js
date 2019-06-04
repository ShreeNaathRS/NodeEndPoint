const connector = require('./model/dbconnentor');
const Sequelize = require('sequelize');

class Create extends Sequelize.Model {

}

Create.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  }
}, {
  sequelize: connector,
  modelName: 'createTbls'
});



async function create(req, res, next) {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const reqBody = req.body;
      const { name, password } = reqBody;
      const user = await Create.create({ name, password });
      res.json({data: user});
    } catch (error) {
      console.log('log res : '+res);
      console.log('log error : '+error);
      next(error);
    }
  }

  async function list(req, res, next) {
    try {
      const users = await Create.findAll();
      res.json({ data: users });
    } catch (error) {
      next(error);
    }
  }
  
  async function show(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await Create.findOne({ where: { id: userId } });
      res.json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  async function update(req, res, next) {
    try {
      const reqBody = req.body;
      const { name, password } = reqBody;
      Create.update({
        password : password,
        name : name
      },{
        where : {id:req.params.id}
      });
      res.json({status:true});
    } catch (error) {
      next(error);
    }
  }
  
  async function destroy(req, res, next) {
    try {
      Create.destroy({
        where : {
          id : req.params.id
        }
      });
      res.json({status:true});
    } catch (error) {
      next(error);
    }
  }

module.exports = {Create, create, destroy, update, show, list};

