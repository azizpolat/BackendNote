import React, { useState } from "react";

const NotForm = () => {
  const [baslık, setBaslık] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [hata, setHata] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const not = { baslık, aciklama };

    const response = await fetch("/api/notlar", {
      method: "POST",
      body: JSON.stringify(not),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setHata(data.hata);
    }

    if (response.ok) {
      setHata(null);
      setBaslık("");
      setAciklama("");
      console.log("yeni eklemndi", data);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Yeni Not Ekle</h3>
      <div className="create-group">
        <div>
          <label>Not Baslık: </label>
          <input type="text" onChange={(e) => setBaslık(e.target.value)} value={baslık} />
        </div>

        <div>
          <label>Not Açıklama :</label>
          <input
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
      <button type="submit" className="">
        {" "}
        EKLE
      </button>

      {hata && <div className="error"> {hata}</div>}
    </form>
  );
};

export default NotForm;
