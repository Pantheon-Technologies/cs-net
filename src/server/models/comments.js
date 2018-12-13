module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    commentsid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },    
    foreignkey: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },    
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Posts, {
      foreignKey: 'postid',
      onDelete: 'CASCADE',
    });
  };
  return Comments;
};