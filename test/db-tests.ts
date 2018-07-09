import { User } from "../src/models/user";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as assert from "assert";

describe('The User', function () {

    before(async function () {
        await createConnection({
            "type": "sqlite",
            "database": "db.tests.sqlite",
            "synchronize": true,
            "logging": false,
            "entities": [
                "src/models/**/*.ts"
            ],
        });
        await User.delete({});
    });

    it('should be able to add a user', async function () {
        let user = new User();
        user.age = 23;
        user.firstName = "Andy";
        user.lastName = "Burger";
        await user.save();
        let users = await User.find({})
        assert.equal(1, users.length);
    });


    // it('should be able to find users', async function(){
    //     let users = await User.find({})
    //     assert.ok(users.length > 1);
    // })
})