module.exports = {
    get_members (req, res) {
        res.success([
            {
                "name": "李子阳"
            }, {
                "name": "糜雨健"
            }, {
                "name": "尹一阳"
            }
        ]);
    },
    
    /**
     * [search description]
     * @param req.body: {
     *   "wifi": true / false [Optional],
     *   "start_date": Date [Optional]
     * }
     * @return {[type]}     [description]
     */
    search (req, res) {
        
        var criteria = {};
        
        if (req.body.wifi) {
            criteria["wifi"] = req.body.wifi;
        }
        
        if (req.body.start_date) {
            criteria["start_date"] = {
                "$gte": req.body.start_date;
            }
        }
        
        if (req.body.price_range) {
            criteria["room_avail.price"] = {
                "$gte": req.body.price_range[0],
                "$lte": req.body.price_range[1]
            }
        }
        
        Leasing.find(criteria).toArray(function (err, result) {
            if (err) {
                res.error();
            }
        });
    }
}
