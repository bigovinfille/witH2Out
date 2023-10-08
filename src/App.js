import './App.css';

import React, {useState, useEffect,} from 'react'



import IPhoneSE1 from './IPhoneSE1'
import IPhoneSE2 from './IPhoneSE2'
import IPhoneSE3 from './IPhoneSE3'
import IPhoneSE9 from './IPhoneSE9'
import IPhoneSE4 from './IPhoneSE4'
import IPhoneSE5 from './IPhoneSE5'
import IPhoneSE13 from './IPhoneSE13'
import IPhoneSE14 from './IPhoneSE14'
import IPhoneSE12 from './IPhoneSE12'
import IPhoneSE17 from './IPhoneSE17'
import IPhoneSE18 from './IPhoneSE18'
import IPhoneSE19 from './IPhoneSE19'
import IPhoneSE15 from './IPhoneSE15'
import IPhoneSE16 from './IPhoneSE16'

function App() {
  const [temp, setTemp] = useState(0)
  const [timed, setTimed] = useState(0)
  const [sedi, setSedi] = useState(0)
  const [sali, setSali] = useState(0)
  const [fchl, setFchl] = useState(0)
  const [dops, setDops] = useState(0)
  const [doml, setDoml] = useState(0)
  const [spcd, setSpcd] = useState(0)
  

  useEffect(() => {
    fetch("/api/temp").then(res => res.json()).then(data => {setTemp(data.temp)})
  }, [])

  useEffect(() => {
    fetch("/api/timed").then(res => res.json()).then(data => {setTimed(data.timed)})
  }, [])

  useEffect(() => {
    fetch("/api/sedi").then(res => res.json()).then(data => {setSedi(data.sedi)})
  }, [])

  useEffect(() => {
    fetch("/api/sali").then(res => res.json()).then(data => {setSali(data.sali)})
  }, [])

  useEffect(() => {
    fetch("/api/fchl").then(res => res.json()).then(data => {setFchl(data.fchl)})
  }, [])

  useEffect(() => {
    fetch("/api/dops").then(res => res.json()).then(data => {setDops(data.dops)})
  }, [])

  useEffect(() => {
    fetch("/api/doml").then(res => res.json()).then(data => {setDoml(data.doml)})
  }, [])

  useEffect(() => {
    fetch("/api/spcd").then(res => res.json()).then(data => {setSpcd(data.spcd)})
  }, [])


  return (
    <div className="App">
      <h1> Temp: {temp}°C </h1>
      <h1> Time: {timed} </h1>
      <h1> Suspended Sediment Concentration: {sedi} milligrams per liter</h1>
      <h1> Salinity: {sali} practical salinity units at 25 degrees Celsius</h1>
      <h1> Chlorophyll Fluorescence(fChl): {fchl} micrograms per liter as chlorophyll </h1>
      <h1> Dissolved Oxygen {doml} miligrams per liter, {dops} percent of saturation </h1>
      <h1> Specific Conductance {spcd}</h1>
      <IPhoneSE1></IPhoneSE1>
      <IPhoneSE2></IPhoneSE2>
      <IPhoneSE3></IPhoneSE3>
      <IPhoneSE9></IPhoneSE9>
      <IPhoneSE4></IPhoneSE4>
      <IPhoneSE5></IPhoneSE5>
      <IPhoneSE13></IPhoneSE13>
      <IPhoneSE14></IPhoneSE14>
      <IPhoneSE12></IPhoneSE12>
      <IPhoneSE17></IPhoneSE17>
      <IPhoneSE18></IPhoneSE18>
      <IPhoneSE19></IPhoneSE19>
      <IPhoneSE15></IPhoneSE15>
      <IPhoneSE16></IPhoneSE16>

      
      <div className="content">
      </div>
    </div>
  );
}
export default App;
