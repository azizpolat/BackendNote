import React, { useEffect, useState } from "react";
import NotDetay from "../components/NotDetay";
import NotForm from "../components/NotForm";

const Home = () => {
  const [notlar, setNotlar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotlar = async () => {
      try {
        const response = await fetch("/api/notlar");

        if (!response.ok) {
          throw new Error("Veriler alınırken bir hata oluştu!");
        }

        const data = await response.json();
        console.log(data);
        setNotlar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotlar();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="home">
      <div className="not-form">
        <NotForm />
      </div>
      <div className="notlar">
        {" "}
        {notlar && notlar.length > 0 ? (
          notlar.map((not, i) => <div key={i}>{<NotDetay not={not} />}</div>)
        ) : (
          <p>Hiç not yok!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
