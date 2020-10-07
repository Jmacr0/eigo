module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
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

	User.associate = (models) => {
		User.hasMany(models.Favourite, {
			foreignKey: {
				allowNull: false,
			},
			onDelete: 'cascade',
		});
	};
	return User;
};
