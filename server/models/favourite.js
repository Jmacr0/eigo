module.exports = (sequelize, DataTypes) => {
	const Favourite = sequelize.define('Favourite', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	});

	Favourite.associate = (models) => {
		Favourite.belongsTo(models.User, {
			foreignKey: {
				allowNull: false,
			},
		});
		Favourite.belongsToMany(models.Verb, {
			through: 'FavouritedVerb',
		});
		Favourite.belongsToMany(models.Verb, {
			through: 'FavouritedAdjective',
		});
	};
	return Favourite;
};
