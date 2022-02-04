import React from 'react';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from "react";


function ChooseCity() {

    const [search, setSearch] = useState('');
    const [cityLat, setCityLat] = useState([]);
    const [cityLon, setCityLon] = useState([]);

    const getCoord = async () => {
        const resp = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search.search}&appid=bd057b349f367820571e76e8a6e1c8de`)
        if (resp.ok) {
            let cityInfo = await resp.json()
            setCityLat(cityInfo[0].lat)
            setCityLon(cityInfo[0].lon)
            return console.log(cityInfo[0].lat, cityInfo[0].lon)
        }
    }

    const getData = async () => {
        const resp = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=bd057b349f367820571e76e8a6e1c8de`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        if (resp.ok) {
            let weatherData = await resp.json()
            return weatherData,
            console.log(weatherData)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getCoord();
        getData();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="search"
                    placeholder="Type city and press Enter"
                    value={search.value}
                    onChange={(e) => setSearch({ search: e.currentTarget.value.toLowerCase() })}
                />
            </Form>
        </>
    )
}

export default ChooseCity;
