module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    posttext: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    foreignkey: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
  }, {});

  Posts.associate = function(models) {
    Posts.belongsTo(models.Users, {
      foreignKey: 'userid',
      onDelete: 'CASCADE',
    });
    
    Posts.hasMany(models.Comments, {
      foreignKey: 'postid',
      as: 'comments',
    });
  };
  return Posts;
};