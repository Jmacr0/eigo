module.exports = (sequelize, DataTypes) => {
    const Adjective = sequelize.define('Adjective', {
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
        plain: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        present: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        presentNeg: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        past: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        pastNeg: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    }, {
        timestamps: false,
    });

    Adjective.associate = (models) => {
        Adjective.belongsToMany(models.Favourite, {
            through: 'FavouritedAdjective',
        });
    };
    return Adjective;
};
