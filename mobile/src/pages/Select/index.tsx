import React, { useState, useEffect, ChangeEvent } from 'react'
import { Text, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Axios from 'axios'
interface IBGEUFResponse {
    sigla: string;
}
interface IBGECityResponse {
    nome: string;
}
const Select = () => {
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedUf, setSelectedUf] = useState<string>("0");
    const [selectedCity, setSelectedCity] = useState<string>("0");
    useEffect(() => {
        async function loadUfs() {
            const response = await Axios.get<IBGEUFResponse[]>(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
            );
            const ufInitials = response.data.map((uf) => uf.sigla);
            setUfs(ufInitials);
        }
        loadUfs();
    }, []);

    useEffect(() => {
        async function loadCities() {
            if (selectedUf === "0") return;
            const response = await Axios.get<IBGECityResponse[]>(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
            );
            const cityNames = response.data.map((city) => city.nome);
            setCities(cityNames);
        }
        loadCities();
    }, [selectedUf]);
    function handleSelectUf(uf: string) {
        setSelectedUf(uf);
    }

    function handleSelectCity(city: string) {
        setSelectedCity(city);
    }
    return (
        <>
            <RNPickerSelect
                placeholder={{
                    label: 'Selecione um estado',
                    value: "0"
                }}
                onValueChange={(value) => { handleSelectUf(value) }}
                items={ufs.map((uf) => ({ label: uf, value: uf, key: uf }))}
            />
            <RNPickerSelect 
                placeholder={{
                    label: 'Selecione a cidade',
                    value: null
                }}
                onValueChange={(value) => { handleSelectCity(value) }}
                items={cities.map((city) => ({ label: city, value: city, key: city }))}
            />
        </>
    );
};

export default Select;