import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar eventos e colocar o mais recente no topo
  const fetchEvents = () => {
    axios
      .get("https://observerpi3.onrender.com/events")
      .then((response) => {
        setEvents(response.data.reverse()); // Inverte os eventos para o mais recente aparecer primeiro
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar eventos:", error);
        setError("Não foi possível carregar os eventos.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents(); // Carrega os eventos na primeira vez

    const interval = setInterval(() => {
      fetchEvents();
    }, 10000); // Atualiza automaticamente a cada 10 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div>
      <h1>Status Atual</h1>

      {loading ? (
        <p>Carregando eventos...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : events.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Dia do Pagamento</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.vehicle || "N/A"}</td>
                <td>{event.board || "N/A"}</td>
                <td>{event.payday || "N/A"}</td>
                <td>{event.status || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
