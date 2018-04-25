var express = require('express');
var router = express.Router();

var crypto = require('crypto');
var md5 = require('md5');

/* ========
  createUser ROUTE
  ======== */
router.post('/createUser', function (req, res, next) {
    try {
        var reqObj = req.body;
        var z = reqObj.password;
        var c = reqObj.username;
        z = md5(z);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO user_register SET ?";
                var insertValues = {
                    "user_name": c, // 1o name stili pinaka , username stleni to service
                    "user_password": z,
                    "user_email": reqObj.email,
                    "user_age": reqObj.age,
                    "user_country": reqObj.country,
                    "user_gendre": reqObj.gendre
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* ========
  delete history disease
  ======== */
router.delete('/deleteHistory', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "DELETE FROM history WHERE user_id = ? AND disease_id = ?";
				var naming = reqObj.id;
                var mailing = reqObj.disease_id;
                    console.log(naming);
                    console.log(mailing);
                var query = conn.query(insertSql, [naming,mailing], function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(insertSql);
                    var succes_json = true;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  add history disease
  ======== */
router.post('/addHistory', function (req, res, next) {
    try {
        var reqObj = req.body;
        var time = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO history SET ?";
                var insertValues = {
                    "user_id": reqObj.id, // 1o name stili pinaka , username stleni to service
                    "disease_id": reqObj.disease_id,
                    "Date": time
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    // var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest1 ROUTE
  ======== */
router.post('/quest1', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire1 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "medication": reqObj.medication,
                    "illnes": reqObj.illnes,
                    "procedure_1": reqObj.procedure,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest2 ROUTE
  ======== */
router.post('/quest2', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire2 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "illnes_history": reqObj.illnes_history,
                    "medical_history": reqObj.medical_history,
                    "succeed_time": reqObj.succeed_time,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest3 ROUTE
  ======== */
router.post('/quest3', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire3 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "chronic_problem": reqObj.chronic_problem,
                    "years": reqObj.years,
                    "medical": reqObj.medical,
                    "other_illnes": reqObj.other_illnes,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest4 ROUTE
  ======== */
router.post('/quest4', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire4 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "illnes": reqObj.illnes,
                    "caused_other": reqObj.caused_other,
                    "treatment": reqObj.treatment,
                    "time": reqObj.time,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest5 ROUTE
  ======== */
router.post('/quest5', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire5 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "illnes": reqObj.illnes,
                    "medical": reqObj.medical,
                    "side_effect": reqObj.side_effect,
                    "new_medical": reqObj.new_medical,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  quest6 ROUTE
  ======== */
router.post('/quest6', function (req, res, next) {
    try {
        var reqObj = req.body;
		var timeInMss = new Date();
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "INSERT INTO questionnaire6 SET ?";
                var insertValues = {
                    "gender": reqObj.gender, // 1o name stili pinaka , username stleni to service
                    "age": reqObj.age,
                    "heredity_history": reqObj.heredity_history,
                    "illnes_heredity": reqObj.illnes_heredity,
                    "treatment": reqObj.treatment,
                    "Date": timeInMss,
                    "Score": reqObj.sum,
                    "id_2": reqObj.id_2
                };
                var query = conn.query(insertSql, insertValues, function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var succes_json = true;
                    var userID = result.insertId;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Success!',
                            "id": userID
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Invalid!'
                        });
                    }
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get how many quest for each quest. */
router.get('/getNumberofFirstQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire1 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get how many quest for each quest. */
router.get('/getNumberofSecondQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire2 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get how many quest for each quest. */
router.get('/getNumberofThreeQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire3 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get how many quest for each quest. */
router.get('/getNumberofFourthQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire4 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get how many quest for each quest. */
router.get('/getNumberofFifthQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire5 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get how many quest for each quest. */
router.get('/getNumberofSixthQuest', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT COUNT(*) AS `count` FROM questionnaire6 WHERE `id_2`= ? ";
                var naming = reqObj.id_2;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get one disease. */
router.get('/getDisease', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM disease, facts WHERE disease.id=facts.id AND disease.name = ? ";
                var naming = reqObj.disease;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_1', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire1 WHERE id_2=?";
                var naming = reqObj.user_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_2', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire2 WHERE id_2=?";
                var naming = reqObj.user_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_3', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj.user_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire3 WHERE id_2=?";
                var naming = reqObj.user_id;
               // conn.query(insertSql, [naming], function (err, rows, fields) {
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_4', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire4 WHERE id_2=?";
                var naming = reqObj.user_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_5', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire5 WHERE id_2=?";
                var naming = reqObj.user_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get 1st questionnaire for specific id */
router.get('/result_quest_6', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM questionnaire6 WHERE id_2=?";
                var naming = reqObj.user_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get list of users */
router.get('/getListUsers', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT user_id,user_name FROM user_register";
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get disease history */
router.get('/getHistory', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.user_id;
                console.log(naming);
                var insertSql = "SELECT disease.name,history.date,disease.id FROM history, disease WHERE disease.id=history.disease_id AND history.user_id = ?";
                console.log(insertSql);
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Get one disease from letter */
router.get('/getDiseaseFromLetter', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.letter;
                console.log(naming);
                var insertSql = "SELECT * FROM disease, facts WHERE disease.id=facts.id AND facts.factid=1 AND disease.name LIKE " + conn.escape(naming);
                console.log(insertSql);
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


/* Get all disease. */
router.get('/getDiseaseById', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM disease, facts WHERE disease.id=facts.id AND disease.id = ? ";
                var naming = reqObj.disease_id;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all disease. */
router.get('/getDiseases', function (req, res, next) {
    try {
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT name FROM disease";
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get one user. with user_name */
router.get('/getUser', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj.user_name);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM user_register WHERE user_name = ?";
                var naming = reqObj.user_name;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get one user. with user_email*/
router.get('/getProfileUser', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM user_register WHERE user_email = ?";
                var naming = reqObj.user_email;
                conn.query(insertSql, [naming], function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get all symptoms. */
router.get('/getSymptoms', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj.symptom);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.symptom;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%');
                console.log(insertSql);
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with two. */
router.get('/getSymptomsSix', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var naming1 = reqObj.b;
                var naming2 = reqObj.c;
                var naming3 = reqObj.d;
                var naming4 = reqObj.e;
                var naming5 = reqObj.f;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming1 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming2 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming3 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming4 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming5 + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with two. */
router.get('/getSymptomsFive', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var naming1 = reqObj.b;
                var naming2 = reqObj.c;
                var naming3 = reqObj.d;
                var naming4 = reqObj.e;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming1 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming2 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming3 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming4 + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with two. */
router.get('/getSymptomsFour', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var naming1 = reqObj.b;
                var naming2 = reqObj.c;
                var naming3 = reqObj.d;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming1 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming2 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming3 + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with three. */
router.get('/getSymptomsThree', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var naming1 = reqObj.b;
                var naming2 = reqObj.c;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming1 + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming2 + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with two. */
router.get('/getSymptomsTwo', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var naming1 = reqObj.b;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%')+"AND facts.description LIKE "+ conn.escape('%' + naming1 + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get symptom with one. */
router.get('/getSymptomsOne', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.a;
                var insertSql = "SELECT * FROM `disease` INNER JOIN `facts` WHERE disease.id=facts.id AND facts.description LIKE " + conn.escape('%' + naming + '%');
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
    
/* Get all users */
router.get('/getUsers', function (req, res, next) {
    try {
        var reqObj = req.body;
        console.log(reqObj);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "SELECT * FROM user_register";
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* ========
  LOGIN ROUTE
  ======== */
/* login. */
router.post('/loginUser', function (req, res, next) {
        try {
            var reqObj = req.body;
            // var hashing = reqObj.user_name;
            var hashing1 = reqObj.user_password;
            hashing1 = md5(hashing1);
                req.getConnection(function (err, conn) {
                        if (err) {
                            console.error('SQL Connection error: ', err);
                            return next(err);
                        }
                        else {
                            var insertSql = "SELECT * FROM user_register WHERE user_email = ? AND user_password = ?";

                            var naming1 = reqObj.user_email;
                            conn.query(insertSql, [naming1, hashing1], function (err, rows, fields) {
                                if (err) {
                                    console.error('SQL error: ', err);
                                    return next(err);
                                }
                                var resEmp = [];
                                for (var empIndex in rows) {
                                    var succes_json = true;
                                    var empObj = rows[empIndex];
                                    resEmp.push(empObj);
									
                                }
								
                                if (succes_json) {
                                    res.json({
                                        success: true,
                                        message: 'Success!',
                                        user_email: naming1,
										user_id: resEmp[Object.keys(resEmp)[0]].user_id
                                    });
                                } else {
                                    res.json({
                                        success: false,
                                        message: 'Invalid!'
                                    });
                                }
                            });
                        }
                    }
                );

        }
        catch
            (ex) {
            console.error("Internal error:" + ex);
            return next(ex);
        }
    }
)
;

/* Get diseases from lettes auto complete */
router.get('/getDiseaseAutoComplete', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj.letters);
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.letters;
                var insertSql = "SELECT name FROM disease WHERE  disease.name LIKE " + conn.escape(naming);
                console.log(insertSql);
                conn.query(insertSql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp.push(empObj);
                    }
                    res.json(resEmp);
                    console.log(resEmp.valueOf());
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* get user id */
router.get('/getUsersid', function (req, res, next) {
        try {
            var reqObj = req.query;
            req.getConnection(function (err, conn) {
                if (err) {
                    console.error('SQL Connection error: ', err);
                    return next(err);
                }
                else {
                    var insertSql = "SELECT user_id FROM user_register WHERE user_email = ?";
                    var naming1 = reqObj.user_email;
                    conn.query(insertSql, naming1, function (err, rows) {
                        if (err) {
                            console.error('SQL error: ', err);
                            return next(err);
                        }
                        var resEmp = [];
                        for (var empIndex in rows) {
                            var empObj = rows[empIndex];
                            resEmp.push(empObj);
                        }
                        res.json(resEmp[0]);
                    })
                }
            });
        }

        catch
            (ex) {
            console.error("Internal error:" + ex);
            return next(ex);
        }
    }
);

/* Change user name. */
router.put('/getChangeUserName', function (req, res, next) {
    try {
        var reqObj = req.body;
        var succes_json = false;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "UPDATE user_register SET user_name = ? where user_email = ?";
                var naming = reqObj.user_name;
                var mailing = reqObj.user_email;
                conn.query(insertSql, [naming, mailing], function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    succes_json = true;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'User name change successfully'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Something goes wrong'
                        });
                    }
                    console.log(result);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Change user password. */
router.put('/getChangeUserPassword', function (req, res, next) {
    try {
        var reqObj = req.body;
        var succes_json = false;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "UPDATE user_register SET user_password = ? where user_email = ?";
                var naming = reqObj.user_password;
                var z = md5(naming);
                var mailing = reqObj.user_email;
                conn.query(insertSql, [z, mailing], function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                        succes_json = true;
                        if (succes_json) {
                            res.json({
                                success: true,
                                message: 'Password change succesfully'
                            });
                        } else {
                            res.json({
                                success: false,
                                message: 'Something goes wrong'
                            });
                        }
                        var userID = result.insertId;

                    }
                    console.log(result);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Change user country. */
router.put('/getChangeUserCountry', function (req, res, next) {
    try {
        var reqObj = req.body;
        var succes_json = false;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "UPDATE user_register SET user_country = ? where user_email = ?";
                var naming = reqObj.user_country;
                var mailing = reqObj.user_email;
                conn.query(insertSql, [naming, mailing], function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    succes_json =true;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Country change successfully'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Something goes wrong'
                        });
                    }
                    console.log(result);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});
/* Change user age. */
router.put('/getChangeUserAge', function (req, res, next) {
    try {
        var reqObj = req.body;
        var succes_json = false;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var insertSql = "UPDATE user_register SET user_age = ? where user_email = ?";
                var naming = reqObj.user_age;
                var mailing = reqObj.user_email;
                conn.query(insertSql, [naming, mailing], function (err, result) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    succes_json =true;
                    if (succes_json) {
                        res.json({
                            success: true,
                            message: 'Age change successfully'
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Something goes wrong'
                        });
                    }
                    console.log(result);
                });
            }
        });
    }
    catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

module.exports = router;