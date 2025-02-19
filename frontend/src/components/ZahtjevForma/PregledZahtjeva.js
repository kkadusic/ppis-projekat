import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";
import './zahtjev-forma.css';

const PregledZahtjeva = () => {

    const history = useHistory();
    const location = useLocation();
    const incident = location.state.incident;

    return (
        <div className="prozor">
            <h2 className="top-naslov">Pregled zahtjeva</h2>
            <div className="forma-grid">
                <div>
                    <h2>Podaci o klijentu</h2>
                    <div>
                        <input type="text" id="ime" disabled={true} value={incident.client.firstName}/>
                        <label htmlFor="ime">Ime</label>
                    </div>
                    <div>
                        <input type="text" id="prezime" disabled={true} value={incident.client.lastName}/>
                        <label htmlFor="prezime">Prezime</label>
                    </div>
                    <div>
                        <input type="email" id="email" disabled={true} value={incident.client.email}/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div>
                        <input type="text" id="telefon" disabled={true} value={incident.client.phoneNumber}/>
                        <label htmlFor="telefon">Telefon</label>
                    </div>
                    <div>
                        <input type="text" id="drzava" disabled={true} value={incident.client.country}/>
                        <label htmlFor="drzava">Drzava</label>
                    </div>
                    <div>
                        <input type="text" id="grad" disabled={true} value={incident.client.city}/>
                        <label htmlFor="telefon">Grad</label>
                    </div>
                </div>
                <div>
                    <h2>Opis problema</h2>
                    <div>
                        <input type="text" id="naslov" disabled={true} value={incident.title}/>
                        <label htmlFor="naslov">Naslov</label>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="kategorija">Kategorija</label>
                        <select id="kategorija" >
                            <option selected={true}>{incident.category.name}</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="opis">Detaljan opis</label>
                        <textarea rows="8" id="opis" disabled={true} value={incident.description}/>
                    </div>
                </div>
                <div>
                    <h2>Status zahtjeva</h2>
                    <input type="radio" id="obradjen" name="obrada" value="obradjen" disabled={true}
                           defaultChecked={true}/>
                    <label htmlFor="obradjen" className="radio-label">{incident.status}</label><br/>
                    <button className="forma-btn"
                            onClick={() => {
                                history.push({
                                    pathname: '/pregledrjesenja',
                                    state: {solutions: incident.solutions}
                                });
                            }}>
                        Pregled rješenja
                    </button>
                    <button className="forma-btn"
                            onClick={() => {
                                history.push({
                                    pathname: '/unosrjesenja',
                                    state: {incidentId: incident.id}
                                });
                            }}>
                        Unos rješenja
                    </button>
                </div>
            </div>
            <button className="uredi-btn"
                    onClick={() => {
                        history.push({
                            pathname: '/uredjivanjezahtjeva',
                            state: {incident: incident}
                        });
                    }}
            >
                Uredi zahtjev
            </button>
            <button className="spasi-btn"
                    onClick={() => {
                        history.goBack()
                    }}
            >
                Zatvori
            </button>
        </div>
    );
}

export default PregledZahtjeva;
