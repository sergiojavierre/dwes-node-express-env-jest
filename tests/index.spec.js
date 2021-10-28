import app from "../index.js";
import supertest from "supertest";

beforeAll(() => {
  console.log("ANTES de TODOS los tests");
});

beforeEach(() => {
  console.log("ANTES de CADA test");
});

afterAll(() => {
  console.log("DESPUEST de TODOS los tests");
});

describe("Tests API REST caramelos", () => {
  test("get all", async () => {
    await supertest(app)
      .get("/caramelos")
      .expect(200)
      .then((response) => {
        const caramelos = response.body;
        expect(caramelos.length).toBe(2);
      });
  });

  test("Otro test", () => {
    console.log("Mostrando texto en la consola dentro de la prueba");
    expect(1).toBe(1);
  });
});
