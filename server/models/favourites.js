module.exports = (sequelize, DataTypes) => {
	const Favourites = sequelize.define('Favourites', {
		// userId: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// },
		verbId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	Favourites.associate = (models) => {
		Favourites.belongsTo(models.Users, {
			foreignKey: {
				// name: 'userId',
				allowNull: false,
			},
		});
		Favourites.hasMany(models.Verbs, {
			foreignKey: {
				name: 'verbId',
				allowNull: false,
			},
		});
	};
	return Favourites;
};
