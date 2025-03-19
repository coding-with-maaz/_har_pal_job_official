const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 0,
            max: 150
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profileImage: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'moderator'),
        defaultValue: 'user'
    },
    settings: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
    tableName: 'users'
});

module.exports = User; 