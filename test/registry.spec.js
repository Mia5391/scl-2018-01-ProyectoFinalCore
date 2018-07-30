const assert = require('chai').assert;
global.window = global;

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockdatabase.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    path => path ? mockdatabase.child(path) : mockdatabase,
    () => mockauth
);

require("../User/assets/app");

describe(
    "Agregar visitante",
    () => {
        describe(
            "Debería permitir agregar visitante",
            () => {
                it("Debería agregar un visitante",
                    (done) => {
                        addVisitor('Estephany', '24', 'estefa142@gmail.com', 'lab', 'entrevista', 'lunes 25 mayo').then(
                            (visitor) => {
                                return getAllVisitors();
                            }
                        ).then(
                            (visitorsList) => {
                                const visitor = Object.entries(visitorsList.val())
                                    .find(
                                        visitor => {
                                            return visitor[1].name == "Estephany";
                                        }
                                    );
                                assert.exists(visitor[1]);//verifica que exista algo en particular en el código una función
                                assert.equal(visitor[1].name, "Estephany");
                                done();
                            }
                        ).catch(
                            (error) => {
                                done(error);
                            }
                        )
                    }
                );
            }
        );
    }
);
describe(
    "Deberia permitir hacer checkout",
    () => {
        it("Debería permitirle marcar salida del visitante",
            (done) => { //parametros de la función
                checkoutVisitor('8').then(
                    (task) => {
                        assert.exists(task);
                        assert.equal(task.title, "Comprar pan");
                        assert.equal(task.state, "se ha comprado");
                        done();
                    }
                ).catch(
                    (error) => {
                        done(error);
                    }
                );
            })
    }
);
