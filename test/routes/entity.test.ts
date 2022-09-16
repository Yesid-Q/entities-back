import { test } from "tap";
import { build } from "../helper";

test("Entidades cargando.", async (t) => {
  const app = await build(t);

  const response = await app.inject({
    url: "/entities/filter",
    method: "POST",
    payload: {
      startId: 1,
      endId: 3,
    },
    headers: {
        'accept': 'application/json'
    }
  });
  t.equal(response.statusCode, 200, 'Respuesta correcta.')
  t.equal(response.json().length, 3, 'Rescapo los 3 elementos solicitados.')

});
