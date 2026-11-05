const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../app");

test("Homepage should return success", async () => {
    const response = await request(app).get("/");

    assert.strictEqual(response.status, 200);

    assert.strictEqual(
        response.text,
        "Welcome to Node.js CI/CD Project!"
    );
});

test("Health API should return success", async () => {
    const response = await request(app).get("/health");

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, "success");
});