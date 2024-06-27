import React, { useState } from 'react';
import years from './years.json';
import './Search.module.css';

const Search = () => {
    const [selectedYear, setSelectedYear] = useState(years.연도[0].replace('년', '')); // 연도 초기값 설정
    const [dust, setDust] = useState(null);

    const handleSearch = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `http://openapi.seoul.go.kr:8088/${apiKey}/json/yearMicroDustInfo/1/5/`;
        const response = await fetch(url);
        const data = await response.json();
        const yearData = data.yearMicroDustInfo.row.find((row) => row.YEAR === selectedYear);
        setDust(yearData);
        console.log(yearData); // 찍어서 확인하기
    };

    return (
        <div className="dust-container">
            <h1>😷초미세먼지 정보😷</h1>
            <div className="search-box">
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value.replace('년', ''))}>
                    {years.연도.map((year, index) => (
                        <option key={index} value={year.replace('년', '')}>
                            {year}
                        </option>
                    ))}
                </select>
                <button onClick={handleSearch}>검색</button>
            </div>
            {dust && (
                <div className="dust-info">
                    <p>🌻 연도: {dust.YEAR}🌻</p>
                    <p>주의보 예비단계 발령횟수: {dust.PREPAR_CALL_CNT}</p>
                    <p>주의보 예비단계 발령일수: {dust.PREPAR_CALL_DAY}</p>
                    <p>주의보 발령횟수: {dust.GNFD_CNT}</p>
                    <p>주의보 발령일수: {dust.GNFD_DAY}</p>
                    <p>경보 발령횟수: {dust.ALARM_CNT}</p>
                    <p>경보 발령일수: {dust.ALARM_DAY}</p>
                    <p>최대농도: {dust.MAX_DNSTY !== null ? `${dust.MAX_DNSTY} ㎍/㎥/시` : '데이터 없음'}</p>
                </div>
            )}
        </div>
    );
};

export default Search;
