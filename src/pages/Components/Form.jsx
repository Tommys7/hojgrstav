const Form = () => {
  return (
    <div className="container">
      <h2 className="section-title">Poptávka</h2>
      <form action="">
        <div className="d-grid">
          <div className="w-100">
            <label className="w-100 form-label" for="name">
              Křestní jméno
            </label>
            <input className="w-100 form-input" type="text" />
          </div>
          <div className="w-100">
            <label className="w-100 form-label" for="name">
              Příjmení
            </label>
            <input className="w-100 form-input" type="text" />
          </div>
          <div className="w-100">
            <label className="w-100 form-label" for="name">
              Telefonní číslo
            </label>
            <input className="w-100 form-input" type="text" />
          </div>
          <div className="w-100">
            <label className="w-100 form-label" for="name">
              E-mail
            </label>
            <input className="w-100 form-input" type="text" />
          </div>
        </div>
        <div className="w-100 form-textarea">
            <label className="w-100 form-label" for="name">
              Poptávka
            </label>
            <textarea rows={5} className="w-100 form-input" type="text" />
          </div>
        <div>
          <button type="submit" className="hero-btn">
            Odeslat
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
