module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		img: {
			type: DataTypes.STRING,
			defaultValue: 'https://via.placeholder.com/150',
		},
	});

	Users.associate = (models) => {
		Users.hasMany(models.Favourites, {
			foreignKey: {
				allowNull: false,
			},
			onDelete: 'cascade',
		});
	};
	return Users;
};
