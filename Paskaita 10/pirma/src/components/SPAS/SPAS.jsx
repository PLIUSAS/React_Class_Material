import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function SPAS() {
  return (
    <footer>
      <main>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(236, 253, 2))",
          }}
          to={"/Pagrindinis"}
        >
          Pagrindinis
        </Link>
        {"     "}
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(2, 253, 98))",
          }}
          to={"/Apiemus"}
        >
          Apie mus
        </Link>
        {"   "}
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(253, 2, 2))",
          }}
          to={"/Naujienos"}
        >
          Naujienos
        </Link>
        {"   "}
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(236, 253, 2))",
          }}
          to={"/Paslaugos"}
        >
          Paslaugos
        </Link>
        {"     "}
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(2, 253, 98))",
          }}
          to={"/AtliktiDarbai"}
        >
          Atlikti Darbai
        </Link>
        {"   "}
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "black",
            filter: "drop-shadow(0.1rem 0.1rem 0.7rem rgb(253, 2, 2))",
          }}
          to={"/Kontaktai"}
        >
          Kontaktai
        </Link>
      </main>
      <p>!! Visos teisės saugomos !!</p>
    </footer>
  );
}
