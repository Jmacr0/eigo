module.exports = (sequelize, DataTypes) => {
	const Favourite = sequelize.define('Favourite', {
		// userId: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// },
		verbId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	Favourite.associate = (models) => {
		Favourite.belongsTo(models.User, {
			foreignKey: {
				// name: 'userId',
				allowNull: false,
			},
		});
		Favourite.hasMany(models.Verb, {
			foreignKey: {
				name: 'verbId',
				allowNull: false,
			},
		});
	};
	return Favourite;
};
