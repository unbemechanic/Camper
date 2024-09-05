import React, { useEffect, useRef } from 'react'
import { campingPlace } from './page/data/campingPlace';
import { useParams } from 'react-router-dom';


const Maping = () => {
        const data = campingPlace.maindata;
        const {id} = useParams();
        const mapData = data.filter((value)=> value.id == id);
        const location = data.find((location)=> location.id == id);
        const latitude = location.campingPlace.map.latitude;
        const longitude = location.campingPlace.map.longitude;
        
        const new_script = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.addEventListener("load", () => {
              resolve();
            });
            script.addEventListener("error", (e) => {
              reject(e);
            });
            document.head.appendChild(script);
          });
        };
      
        useEffect(() => {
          const my_script = new_script(
            "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=896f4f88b2060f77a9fea902e7d4ba20"
          );
          my_script.then(() => {
            console.log("script loaded!!!");
            const kakao = window["kakao"];
            kakao.maps.load(() => {
              const mapContainer = document.getElementById("map");
              const options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 10,
              };
              
              const map = new kakao.maps.Map(mapContainer, options);
              const markerPositions = mapData.map((location)=>{
                return new kakao.maps.LatLng(location.campingPlace.map.latitude, location.campingPlace.map.longitude)
              });
      
              markerPositions.forEach((position) => {
                const marker = new kakao.maps.Marker({
                  position: position,
                });
                marker.setMap(map);
              });
            });
          });
        }, []);
        const addressRef = useRef(null);
  return (
    <div>
        <div id='map' className='map' style={{width:'1200px', height:'500px'}}/>
        {mapData.map((value)=>{
          return(
            <div className='campingPlace' key={value.id}>
              <div className='campingPlace'>{value.campingPlace.map.latitude}</div>
            </div>
          )
        })}
    </div>
  )

}
export default Maping
export const ContactMaping = () => {
        const data = campingPlace.maindata;
        const {id} = useParams();
        const mapData = data.filter((value)=> value.id == id);
        const latitude = data.ca
        
        const new_script = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.addEventListener("load", () => {
              resolve();
            });
            script.addEventListener("error", (e) => {
              reject(e);
            });
            document.head.appendChild(script);
          });
        };
      
        useEffect(() => {
          const my_script = new_script(
            "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=896f4f88b2060f77a9fea902e7d4ba20"
          );
          my_script.then(() => {
            console.log("script loaded!!!");
            const kakao = window["kakao"];
            kakao.maps.load(() => {
              const mapContainer = document.getElementById("map");
              const options = {
                center: new kakao.maps.LatLng(35.88419, 127.085600),
                level: 8,
              };
              
              const map = new kakao.maps.Map(mapContainer, options);
              const markerPositions = [new kakao.maps.LatLng(35.88419, 127.085600)];
      
              markerPositions.forEach((position) => {
                const marker = new kakao.maps.Marker({
                  position: position,
                });
                marker.setMap(map);
              });
            });
          });
        }, []);
        const addressRef = useRef(null);
  return (
    <div>
        <div id='map' className='map' style={{width:'500px', height:'280px'}}/>
    </div>
  )

}


