module.exports = (sequelize, DataTypes) => {
	const Verb = sequelize.define('Verb', {
		startingLetter: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 1],
			},
		},
		shortForm: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
	});

	Verb.associate = (models) => {
		Verb.belongsToMany(models.Favourite, {
			through: 'FavouritedVerb',
		});
	};
	return Verb;
};
