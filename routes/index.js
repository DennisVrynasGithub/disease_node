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
        console.log(reqObj);
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
  quest1 ROUTE
  ======== */
router.post('/quest1', function (req, res, next) {
    try {
        var reqObj = req.body;
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

/* Get one disease. */
router.get('/getDisease', function (req, res, next) {
    try {
        var reqObj = req.query;
        console.log(reqObj.disease);
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
                var insertSql = "SELECT * FROM disease, facts WHERE disease.id=facts.id AND disease.name LIKE " + conn.escape(naming);
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
        console.log(reqObj);
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
router.get('/getSymptomsTwo', function (req, res, next) {
    try {
        var reqObj = req.query;
        req.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else {
                var naming = reqObj.symptom;
                var naming1 = reqObj.symptom1;
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
router.get('/loginUser', function (req, res, next) {
        try {
            var reqObj = req.query;
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
                                        user_email: naming1
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