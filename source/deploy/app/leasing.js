module.exports = {
    getAllLeasings (id, callback) {
        
    },
    getLeasingById (id, callback) {
        
    },
    
    /**
     * ajdfklasdjflsakdj
     * @param  {Object}   info
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    insertNewLeasing (info, callback) {
        
    },
    
    /**
     * [updateLeasing description]
     * @param  {[type]}   id       [description]
     * @param  {[type]}   info     [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    updateLeasing (id, info, callback) {
        Leasing.updateOne({
            "_id": id
        }, {
            "$set": info
        }, function (err, result) {
            if (err) {
                callback(false);
            }
            else {
                callback(true);
            }
        });
    },
    
    removeLeasing (id, callback) {
        
    }
}
