module.exports = (sequelize, DataTypes) => {
	const Verbs = sequelize.define('Verbs', {
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

	Verbs.associate = (models) => {
		Verbs.belongsTo(models.Favourites, {
			foreignKey: {
				name: 'favouriteId',
				allowNull: false,
			},
		});
	};
	return Verbs;
};
