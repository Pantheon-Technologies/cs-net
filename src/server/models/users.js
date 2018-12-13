module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    iconurl: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    realname: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type:DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Posts, {
      foreignKey: 'userid',
      as: 'posts',
    });
  };
  return Users;
};