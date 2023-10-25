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
          }}
          to={"/Kontaktai"}
        >
          Kontaktai
        </Link>
      </main>
      <p> &copy; All rights reserved !!</p>
    </footer>
  );
}
