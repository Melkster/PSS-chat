/** Interface to the database which manages chats and users */
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

var globaldb;

class DBManager {

    initDatabase() {
        let firstboot = false;
        if (fs.existsSync("./db/global.db")) {
            firstboot = false;
        } else {
            firstboot = true;
        }

        globaldb = new sqlite3.Database('./db/global.db', (err) => {
            if (err) {
                console.error(err.message);
                return false;
            } else {
                console.log('Connected to global database.');
            }
        });
        
        if(firstboot == true) {
            globaldb.serialize(() => {
                globaldb.run('CREATE TABLE GlobalUsers(USERHASH INT     PRIMARY KEY      NOT NULL        );')      })
                .run('CREATE TABLE GlobalChats(CHATHASH INT     PRIMARY KEY      NOT NULL);')
                .run('INSERT INTO GlobalUsers (USERHASH) VALUES(0);');
        }

        return true;
    }

    deinitDatabase() {
        // SLQ queries to deinitialize global database
        // return: true if deinitialized successfully, otherwise false
        // TODO
    }
    
    createChat(chatName) {
        // SQL query to create chat with `chatName`
        // return: chatID if created successfully, otherwise false
        // TODO
    }

    removeChat(chatID) {
        // SQL query to remove chat with `chatID`
        // return: true if removed successfully, otherwise false
        // low priority
    }

    createUser() {
        // SQL query to create global user
        // return: userID if user was added successfully, otherwise false
        // TODO
    }

    deleteUser(userID) {
        // SQL query to delete global user `userID`
    }

    addUser(userID, userName, chatID) {
        // SQL query to create user with `userName` to chat with `chatID`
        // return: true if user was added successfully, otherwise false
        // TODO
    }
    
    removeUser(userID, chatID) {
        // SQL query to remove user with `userID` from chat with `chatID`
        // @return: true if user was removed successfully, otherwise false
        // low priority
    }

    getAllUsers(chatID) {
        // SQL query to retreive all users with from chat with `chatID`
        // return: a list with all users
        // TODO
    }

    addMessage(message, userID, chatID) {
        // Adds `messages` from user `userID` to chat with `chatID`
        // TODO
    }

    getMessages(chatID) {
        // SQL query to retreive chat history for chat with `chatID`
        // return: list of messages for chat with `chatID`
        // TODO
    }
}

module.exports = DBManager;
