const db = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");



exports.login = async(req, res) => {

    try {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.send({ message: "Por favor, inserir um email e uma senha." })
        }

        let valEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        if (!valEmail.test(email)) {
            console.log("\ncaindo na expressão regular\n")
            res.send({ message: "Email ou senha incorreto." })
        } else {
            console.log("\nsaiu da expressão regular\n")
            const selectSql = "SELECT * FROM contas WHERE email = ?";
            db.query(selectSql, [email], async(error, results) => {
                console.log(results)

                if (error) {
                    console.log(error)
                } else {
                    if (typeof results !== 'undefined') {
                        if (!results || !(await bcrypt.compare(senha, results[0].senha))) {
                            res.send({ message: "Email ou senha incorreto." })
                        } else {
                            const id = results[0].id;

                            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                                expiresIn: process.env.JWT_EXPIRES_IN
                            });

                            console.log("A token é:" + token)

                            const cookieOptions = {
                                expires: new Date(
                                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                                ),
                                httpOnly: true
                            }

                            console.log(cookieOptions)

                            res.send({ name: 'token', token: token, cookieOptions: cookieOptions })
                            res.status(200);
                        }
                    }
                }
            })
        }



    } catch (error) {
        console.log(error)
    }
}

exports.register = (req, res) => {

    const { nome, email, senha, confirmarSenha, departamento, nivel } = req.body
    console.log({ nome, email, senha, confirmarSenha, departamento, nivel })
    const selectContas = "SELECT * FROM contas WHERE email = ?"

    //console.log({ nome: nome, email: email, senha: senha });

    db.query(selectContas, email, async(err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
        }
        if (result != null) {
            if (result.length > 0) {
                return res.send({
                    message: "Este email já está em uso."
                })
            } else if (senha !== confirmarSenha) {
                return res.send({
                    message: "A senha não corresponde."
                })
            }
            let hashedPassword = await bcrypt.hash(senha, 8);

            const sqlInsert = "INSERT INTO contas(nome,email,senha,departamento,nivel,primeira_vez)VALUES(?,?,?,?,?,'true')"
            db.query(sqlInsert, [nome, email, hashedPassword, departamento, nivel], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log({ message: "conta cadastrada com sucesso!" });
                }
            })
        }
    });

}
exports.reset = async(req, res) => {
    const { email, senha, confirmarSenha } = req.body
    const selectContas = "SELECT * FROM contas WHERE email = ?"
        //console.log({ nome: nome, email: email, senha: senha });
    db.query(selectContas, email, async(err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
        }
        if (result != null) {
            if (senha !== confirmarSenha) {
                return res.send({
                    message: "A senha não corresponde."
                })
            }
            let hashedPassword = await bcrypt.hash(senha, 8);

            const sqlUpdate = "UPDATE contas SET senha = ? WHERE email = ?"
            db.query(sqlUpdate, [hashedPassword, email], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send("sucesso")
                    console.log({ message: "senha atualizada com sucesso!" });
                }
            })
        }
    });


}
exports.first = async(req, res) => {
    const { id } = req.body
    console.log(id);
    const sqlUpdate = "UPDATE contas SET primeira_vez = 'false' WHERE id=?"
    db.query(sqlUpdate, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Sucesso");
        }
    })
}

exports.forgot = async(req, res) => {

    const { email } = req.body
    console.log(email)

    if (!email) {
        return res.send({ message: "Por favor, inserir um email válido." })
    }

    let valEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!valEmail.test(email)) {
        console.log("\ncaindo na expressão regular\n")
        res.send({ message: "Por favor, inserir um email válido." })
    } else {
        //console.log("Tá válido o email")
        const sqlEmail = `SELECT email FROM contas WHERE email = ?`
        db.query(sqlEmail, email, async(err, results) => {
            if (err) {
                console.log(err.code)
            } else {
                const code = Math.floor(Math.random() * 1000000)
                console.log(code)

                const token = jwt.sign({ code }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_FORGOTPASS_EXPIRES_IN
                });

                //console.log("A token é:" + token)

                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'forgot.focus@gmail.com',
                        pass: process.env.GMAIL_NODEMAILER_PASS
                    }
                });
                const mailOptions = {
                    from: 'Forgot Bot <forgot.focus@gmail.com>',
                    to: email,
                    subject: 'Yor code to reset your password is ' + code,
                    text: '',
                    html: `<div>
                <h1>Código para mudar a sua senha</h1>
                <p>O seu código é: ${code}</p>
            </div>`
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error)
                    }
                    res.send("Enviado para " + info.messageId);
                });
                res.send({ key: 'code-token', value: token })
            }
        })
    }
}

exports.confirmEmail = async(req, res) => {

    const { email } = req.body
    console.log(email)

    if (!email) {
        return res.send({ message: "Por favor, inserir um email válido." })
    }

    let valEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!valEmail.test(email)) {
        console.log("\ncaindo na expressão regular\n")
        res.send({ message: "Por favor, inserir um email válido." })
    } else {
        //console.log("Tá válido o email")

        const code = Math.floor(Math.random() * 1000000)
        console.log(code)

        const token = jwt.sign({ code }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_FORGOTPASS_EXPIRES_IN
        });

        //console.log("A token é:" + token)

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'forgot.focus.group@gmail.com',
                pass: process.env.GMAIL_NODEMAILER_PASS
            }
        });
        const mailOptions = {
            from: 'Forgot Bot <forgot.focus.group@gmail.com>',
            to: email,
            subject: 'Yor code to confirm your email is ' + code,
            text: '',
            html: `<div>
                <h1>Código para mudar a sua senha</h1>
                <p>O seu código é: ${code}</p>
            </div>`
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error)
            }
            res.send("Enviado para " + info.messageId);
        });
        res.send({ key: 'code-token', value: token })
    }

}

exports.code = async(req, res) => {

    const { code } = req.body
    const token = req.body.token
    console.log(code + " | " + token)

    if (!code) {
        return res.send({ message: "Por favor, inserir um código" })
    }

    let codeVal = /([1-9])+\w+/g;

    if (!codeVal.test(code)) {
        console.log("\ncaindo na expressão regular\n")
        res.send({ message: "Por favor, inserir um código válido." })
    } else {
        try {
            if (token) {
                await jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
                    if (err) {
                        res.send({ message: "Token inválido" })
                    } else {
                        const payload = await decoded.code;
                        const codeA = parseInt(payload)
                        const codeB = parseInt(code);
                        console.log(codeA + "|=|" + codeB);
                        if (codeA === codeB) {
                            res.send({ status: true });
                        } else {
                            res.send({ message: "Token inválido" })
                        }

                    }
                })
            } else {
                res.send("Token não foi enviada corretamente")
            }
        } catch (error) {
            console.log(error)
            res.send({ status: false, error: "Token não enviada." });
        }

    }


}


exports.token = async(req, res) => {

    const { token } = req.body;
    console.log(token)

    try {
        if (token) {
            await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    res.send({ status: false, error: "Token inválido" })
                } else {
                    res.send({ status: true, id: decoded.id })
                }
            })
        } else {
            res.send(false)
        }
    } catch (error) {
        console.log(error)
        res.send({ status: false, error: "Token não enviada." });
    }

}