module.exports = (sequelize, DataTypes) => {
	const Verb = sequelize.define('Verb', {
		startingLetter: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 1],
			},
		},
		group: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		english: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
			unique: true,
		},
		short: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		shortPast: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		shortNeg: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		shortPastNeg: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		long: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		longPast: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		longNeg: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		longPastNeg: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		te: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
	}, {
		timestamps: false,
	});

	Verb.associate = (models) => {
		Verb.belongsToMany(models.Favourite, {
			through: 'FavouritedVerb',
		});
	};
	return Verb;
};
