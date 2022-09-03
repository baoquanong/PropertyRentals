import { useEffect, useState } from "react";
//import Maps from "./Components/Maps";

function App() {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental_Median",
  //       {
  //         mode: "cors",
  //         headers: {
  //           AccessKey: "9ee286f5-9249-4f0a-a282-6713e9a2d178",
  //           Token:
  //             "d83PBeme876R9Ru75nDf8BQP2HS7eF64-gSf-5eP9628xm0yhJU-@91w9f0uf0-45g-z-qbdj6D9MM--HE43mnZ-HQ-6-rtG2-DS",
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     console.log({ data });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   makeAPICall();
  // }, []);

  fetch(
    "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=gOjCkud9cDxk30dvkhQHHjAQgWU41N7bdkjlIBPP"
    // {
    //   // method: 'GET',
    //   // mode: "no-cors",
    //   // referrerPolicy: "all-origin",
    //   // headers: {
    //   //   // "Access-Control-Allow-Origin": "origin",
    //   //   'Content-Type': 'application/json',
    //   //   AccessKey: "9ee286f5-9249-4f0a-a282-6713e9a2d178",
    //   //   Token: "d83PBeme876R9Ru75nDf8BQP2HS7eF64-gSf-5eP9628xm0yhJU-@91w9f0uf0-45g-z-qbdj6D9MM--HE43mnZ-HQ-6-rtG2-DS",
    //   // },
    // }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  // https://www.ura.gov.sg/uraDataService/insertNewToken.action

  // https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental_Median
  // https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental

  // fetch('https://www.ura.gov.sg/uraDataService/invokeUraDS?service=PMI_Resi_Rental_Median',
  // {
  //   headers: {
  //     AccessKey: "9ee286f5-9249-4f0a-a282-6713e9a2d178",
  //     Token: "9ee286f5-9249-4f0a-a282-6713e9a2d178",
  //   }
  // })
  // .then((response) => response.json())
  // .then((data) => console.log(data));

  //developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=gOjCkud9cDxk30dvkhQHHjAQgWU41N7bdkjlIBPP

  https: return (
    <>
      <div>App</div>
      {/* // <Maps /> */}
    </>
  );
}

export default App;
