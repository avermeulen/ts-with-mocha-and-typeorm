import UserRoutes from "../src/user-routes";
import "reflect-metadata";

// import { createConnection } from "typeorm";
// import * as assert from "assert";

import express from 'express';
import * as sinon from 'sinon';  

describe('The list users route', function () {

    it('should be able to return a list of users', async function () {


        let userRoutes = UserRoutes();
        
        let r : Partial<express.Send> = {

        }

        let response : Partial<express.Response> = {
            json : sinon.stub()
        };

        let request : Partial<express.Request> = {
            
        };

        userRoutes.list(null, <express.Response>response);


        sinon.assert.calledWith(response.json as sinon.SinonStub, 
            { data: [{ name: "Andre" }, 
                     { name: "Siya" }]  });      

    })

})