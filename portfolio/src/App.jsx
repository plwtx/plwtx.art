import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery.jsx";
import Main from "./components/main.jsx";
<link href="/dist/output.css" rel="stylesheet"></link>;

// To do list
// 1 - 0x706C777478
// 2 - Font And Color scheme
// 3 - Ip Grabber IPアドレス
// 4 - Time displayer 冥王星
// 5 - Japanese Translation
// 6 - Pie Menu 美術 | 16 進数からテキストへ (HEX) | このサイトは私の存在の証です!
// 7 - Japanese Pluto Kanji name: 冥王星

function App() {
  //IPv4 Adress
  const [ip, setIp] = useState();
  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  //Network

  const [network, setNetwork] = useState();
  const getNetwork = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setNetwork(data.network);
  };

  //Version

  const [version, setVersion] = useState();
  const getVersion = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setVersion(data.version);
  };

  //City

  const [city, setCity] = useState();
  const getCity = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCity(data.city);
  };

  //Region

  const [region, setRegion] = useState();
  const getRegion = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setRegion(data.region);
  };

  //Region_code

  const [region_code, setRegion_code] = useState();
  const getRegion_code = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setRegion_code(data.region_code);
  };

  //Country

  const [country, setCountry] = useState();
  const getCountry = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry(data.country);
  };

  //Country_name

  const [country_name, setCountry_name] = useState();
  const getCountry_name = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry_name(data.country_name);
  };

  //Country_code

  const [country_code, setCountry_code] = useState();
  const getCountry_code = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry_code(data.country_code);
  };

  //Country_code_iso3

  const [country_code_iso3, setCountry_code_iso3] = useState();
  const getCountry_code_iso3 = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry_code_iso3(data.country_code_iso3);
  };

  //Country_capital

  const [country_capital, setCountry_capital] = useState();
  const getCountry_capital = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry_capital(data.country_capital);
  };

  //Country_tld

  const [country_tld, setCountry_tld] = useState();
  const getCountry_tld = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountry_tld(data.country_tld);
  };

  //Continent_code

  const [continent_code, setContinent_code] = useState();
  const getContinent_code = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setContinent_code(data.continent_code);
  };

  //In_eu

  const [in_eu, setIn_eu] = useState();
  const getIn_eu = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIn_eu(data.in_eu);
  };

  //Postal

  const [postal, setPostal] = useState();
  const getPostal = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setPostal(data.postal);
  };

  //Latitude

  const [latitude, setLatitude] = useState();
  const getLatitude = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setLatitude(data.latitude);
  };

  //Longitude
  const [longitude, setLongitude] = useState();
  const getLongitude = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setLongitude(data.longitude);
  };

  //Timezone
  const [timezone, setTimezone] = useState();
  const getTimezone = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setTimezone(data.timezone);
  };

  //Utc_offset
  const [utc_offset, setUtcOffset] = useState();
  const getUtc_offset = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setUtcOffset(data.utc_offset);
  };

  //Country_calling_code
  const [country_calling_code, setCountryCallingCode] = useState();
  const getCountryCallingCode = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountryCallingCode(data.country_calling_code);
  };

  //Currency
  const [currency, setCurrency] = useState();
  const getCurrency = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCurrency(data.currency);
  };

  //Currency_name
  const [currency_name, setCurrencyName] = useState();
  const getCurrencyName = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCurrencyName(data.currency_name);
  };

  //Languages
  const [languages, setLanguages] = useState();
  const getLanguages = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setLanguages(data.languages);
  };

  //Country_area
  const [country_area, setCountryArea] = useState();
  const getCountryArea = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountryArea(data.country_area);
  };
  //Country_population
  const [country_population, setCountryPupulation] = useState();
  const getCountryPupulation = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setCountryPupulation(data.country_population);
  };

  //Asn
  const [asn, setAsn] = useState();
  const getAsn = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setAsn(data.asn);
  };

  //Org
  const [org, setOrg] = useState();
  const getOrg = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setOrg(data.org);
  };

  useEffect(() => {
    getIp();
    getNetwork();
    getVersion();
    getCity();
    getRegion();
    getRegion_code();
    getCountry();
    getCountry_name();
    getCountry_code();
    getCountry_code_iso3();
    getCountry_capital();
    getCountry_tld();
    getContinent_code();
    getIn_eu();
    getPostal();
    getLatitude();
    getLongitude();
    getTimezone();
    getUtc_offset();
    getCountryCallingCode();
    getCurrency();
    getCurrencyName();
    getLanguages();
    getCountryArea();
    getCountryPupulation();
    getAsn();
    getOrg();

    document.title = `こんにちは世界 | 0x706C777478`;
  }, []);
  return (
    <section className="snap-y snap-mandatory scroll-smooth h-screen overflow-scroll overflow-x-hidden">
      <div className="">
        <div className="">
          <Main />
          <div className="snap-start w-screen h-screen bg-len-Black flex-col flex justify-center items-center">
            <h4 className="text-len-White text-center py-36 font-LineR text-sm md:text-xl">
              理由は何ですか {ip}? 説明してください.
            </h4>
          </div>
          <Gallery />
          <div className="snap-start w-screen h-screen bg-len-Black px-9 flex flex-col justify-start items-start">
            <h4 className="text-len-White text-left my-auto font-LineR text-sm md:text-xl">
              "ip": {ip}; <br />
              "network": {network}; <br />
              "version": {version}; <br />
              "city": {city}; <br />
              "region": {region}; <br />
              "region_code": {region_code}; <br />
              "country": {country}; <br />
              "country_name": {country_name}; <br />
              "country_code": {country_code}; <br />
              "country_code_iso3": {country_code_iso3}; <br />
              "country_capital": {country_capital}; <br />
              "country_tld": {country_tld}; <br />
              "continent_code": {continent_code}; <br />
              "in_eu": {in_eu}; <br />
              "postal": {postal}; <br />
              "latitude": {latitude}; <br />
              "longitude": {longitude}; <br />
              "timezone": {timezone}; <br />
              "utc_offset": {utc_offset}; <br />
              "country_calling_code"; {country_calling_code}; <br />
              "currency": {currency}; <br />
              "currency_name": {currency_name}; <br />
              "languages": {languages}; <br />
              "country_area": {country_area}; <br />
              "country_population": {country_population}; <br />
              "asn":{asn}; <br />
              "org":{org}; <br />
            </h4>
          </div>
          <div
            id="About"
            className="snap-start w-screen h-screen bg-len-Bluwska flex-col flex justify-center items-center"
          >
            <div className="bg-len-Black p-4 border-8 border-len-Bluwska">
              <div className="">
                <div class="loader3">
                  <span></span>
                </div>
                <div class="loader2">
                  <span></span>
                </div>
                <div class="loader1">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
