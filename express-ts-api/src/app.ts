import express from "express";

const app = express();

interface Dog {
  name: string;
  breed: "labrador" | "german shepherd" | "golden retriever";
  adopted_at: Date | null;
  birth_date: Date | null;
}

app.get<
  {},
  { data: Dog[]; message: string },
  {},
  {
    page: number;
    limit: number;
    breed: "labrador" | "german shepherd" | "golden retriever";
  }
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: [
      {
        name: "facuwu",
        breed: "golden retriever",
        adopted_at: null,
        birth_date: null,
      },
    ],
    message: "all dogs",
  });
});

app.get<{ id: number }, { data: Dog | null; message: string }, {}>(
  "/api/v1/dogs/:id",
  (req, res) => {
    res.send({
      data: {
        name: "chuki",
        breed: "german shepherd",
        birth_date: null,
        adopted_at: null,
      },
      message: "One dog",
    });
  }
);

app.post<{}, { data: Dog & { id: number }; message: string }, Dog, {}>(
  "/api/v1/dogs",
  (req, res) => {
    res.send({
      data: {
        name: "chiki",
        breed: "labrador",
        id: 3,
        adopted_at: null,
        birth_date: null,
      },
      message: "perro creado",
    });
  }
);

app.put<
  { id: number },
  { data: Dog & { id: number }; message: string },
  Partial<Dog>,
  {}
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: {
      name: "fernanflo",
      id: 3,
      adopted_at: null,
      birth_date: null,
      breed: "german shepherd",
    },
    message: "perro actualizado",
  });
});

app.delete<
  { id: number },
  { data: Dog & { id: number }; message: string },
  {},
  {}
>("/api/v1/dogs", (req, res) => {
  res.send({
    data: {
      name: "fernanflo",
      id: 3,
      adopted_at: null,
      birth_date: null,
      breed: "german shepherd",
    },
    message: "perro deleteado",
  });
});
