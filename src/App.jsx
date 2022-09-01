import Maps from "./Components/Maps";

function App() {
  // fetch('https://www.ura.gov.sg/uraDataService/insertNewToken.action',
  // {
  //   headers: {
  //     AccessKey: "9ee286f5-9249-4f0a-a282-6713e9a2d178",
  //   }
  // });
  // .then((response) => response.json())
  // .then((data) => console.log(data));

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

  return (
    <>
      <div>App</div>
      <Maps />
    </>
  );
}

export default App;
