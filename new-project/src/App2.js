import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import "./App.css";
import ReactDOM from "react-dom";
import Polygon from "./data/Polygon.json";
import Census_2016 from "./data/Census_2016.json";
import Marital from "./data/Marital.json";
import Householdtype from "./data/Labour.json";
import Labour from "./data/Labour.json";
import Householdincome from "./data/Labour.json";
import Education from "./data/Labour.json";

const containerStyle = {
  width: "2200px",
  height: "800px",
};

const center = {
  lat: 43.684021,
  lng: -79.759048,
};

function MyComponent() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD0LW50_GtYuB0nlw5-YhW5i1uBCGNe3XA",
  });

  const [map, setMap] = React.useState(null);
  const [selected, setSelected] = React.useState({});

  const onLoad = React.useCallback(function callback(map) {
    //map.data.addGeoJson(Polygon);
    map.data.addGeoJson(Census_2016);
    setMap(map);

    map.data.addListener("mouseover", function (event) {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, { strokeWeight: 6 });
    });

    map.data.addListener("mouseout", function (event) {
      map.data.revertStyle();
    });

    map.data.addListener("click", function (event) {
      console.log(event.feature.i.CTNAME);
      setSelected({ position: event.latLng, ctname: event.feature.i.CTNAME });
    });

    map.data.setStyle(function (feature) {
      // console.log(feature.i.color);
      return {
        fillColor: feature.i.color,
      };
    });
  }, []);

  const onClickclose = React.useCallback(function callback(infowindow) {
    setSelected({});
  }, []);

  //   {
  //     Census_2016.feature.filter((building) => {
  //       if (building.CTNAME === selected.ctname) {
  //         return building;
  //       }
  //       console.log(building);
  //     });
  //   }

  return isLoaded ? (
    <div
      style={{
        marginBottom: "100px",
        marginTop: "150px",
        marginLeft: "150px",
        marginRight: "150px",
        width: "150vw",
        height: "150vh",
      }}
    >
      <h1
        style={{ textAlign: "center", minWidth: "1100px", paddingTop: "15px" }}
      >
        Neigborhoodr-info
      </h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 43.684021, lng: -79.759048 }}
        zoom={12.5}
        onLoad={onLoad}
      >
        {selected.position && (
          <InfoWindow position={selected.position} onCloseClick={onClickclose}>
            <div>
              <h1>Neighborhoods Information</h1>
              <h1>{selected.ctname}</h1>
              <h4>2016 Ethnic Origin by Census Tract</h4>
              <p>TOTAL_IMMI_POP_PRIV_HH_25</p>
              <p>TOTAL_AMERICAS</p>
              <p>TOTAL_BRAZIL</p>
              <p>TOTAL_COLOMBIA</p>
              <p>TOTAL_CUBA</p>
              <p>TOTAL_HAITI</p>
              <p>TOTAL_JAMAICA</p>
              <p>TOTAL_MEXICO</p>
              <p>TOTAL_UNITED_STATES</p>
              <p>TOTAL_VENEZUELA</p>
              <p>TOTAL_OTHER_AMERICAS</p>
              <p>TOTAL_EUROPE</p>
              <p>TOTAL_FRANCE</p>
              <p>TOTAL_GERMANY</p>
              <p>TOTAL_IRELAND</p>
              <p>TOTAL_MOLDOVA</p>
              <p>TOTAL_ROMANIA</p>
              <p>TOTAL_RUSSIAN_FEDERATION</p>
              <p>TOTAL_UKRAINE</p>
              <p>TOTAL_UNITED_KINGDOM</p>
              <p>TOTAL_OTHER_EUROPE</p>
              <p>TOTAL_AFRICA</p>
              <p>TOTAL_ALGERIA</p>
              <p>TOTAL_CAMEROON</p>
              <p>TOTAL_CONGO</p>
              <p>TOTAL_COTE_DIVOIRE</p>
              <p>TOTAL_EGYPT</p>
              <p>TOTAL_ERITREA</p>
              <p>TOTAL_ETHIOPIA</p>
              <p>TOTAL_MOROCCO</p>
              <p>TOTAL_NIGERIA</p>
              <p>TOTAL_SOMALIA</p>
              <p>TOTAL_SOUTH_AFRICA</p>
              <p>TOTAL_TUNISIA</p>
              <p>TOTAL_OTHER_AFRICA</p>
              <p>TOTAL_ASIA</p>
              <p>TOTAL_AFGHANISTAN</p>
              <p>TOTAL_BANGLADESH</p>
              <p>TOTAL_CHINA</p>
              <p>TOTAL_HONG_KONG</p>
              <p>TOTAL_INDIA</p>
              <p>TOTAL_IRAN</p>
              <p>TOTAL_IRAQ</p>
              <p>TOTAL_ISRAEL</p>
              <p>TOTAL_JAPAN</p>
              <p>TOTAL_KOREA_SOUTH</p>
              <p>TOTAL_LEBANON</p>
              <p>MALE_NEPAL</p>
              <p>MALE_PAKISTAN</p>
              <p>TOTAL_ASIA</p>
              <p>TOTAL_AFGHANISTAN</p>
              <p>MALE_PHILIPPINES</p>
              <p>MALE_SAUDI_ARABIA</p>
              <p>MALE_SRI_LANKA</p>
              <p>MALE_SYRIA</p>
              <p>MALE_TAIWAN</p>
              <p>MALE_TURKEY</p>
              <p>MALE_OTHER_ASIA</p>
              <p>MALE_UNITED_ARAB_EMIRATES</p>
              <p>MALE_VIET_NAM</p>
              <p>MALE_OCEANIA_AND_OTHER</p>
              <p>MALE_AUSTRALIA</p>
              <p>MALE_OTHER_PL_OF_BIR</p>
              <p>T_FEMALE_IMMI_POP_PRIV_HH_25</p>
              <p>FEMALE_AMERICAS</p>
              <p>FEMALE_BRAZIL</p>
              <p>FEMALE_COLOMBIA</p>
              <p>FEMALE_CUBA</p>
              <p>FEMALE_HAITI</p>
              <p>FEMALE_JAMAICA</p>
              <p>FEMALE_MEXICO</p>
              <p>FEMALE_UNITED_STATES</p>
              <p>FEMALE_VENEZUELA</p>
              <p>FEMALE_OTHER_AMERICAS</p>
              <p>FEMALE_EUROPE</p>
              <p>FEMALE_EUROPE</p>
              <p>FEMALE_FRANCE</p>
              <p>FEMALE_GERMANY</p>
              <p>FEMALE_IRELAND</p>
              <p>FEMALE_MOLDOVA</p>
              <p>FEMALE_ROMANIA</p>
              <p>FEMALE_RUSSIAN_FEDERATION</p>
              <p>FEMALE_UKRAINE</p>
              <p>FEMALE_UNITED_KINGDOM</p>
              <p>FEMALE_OTHER_EUROPE</p>
              <p>FEMALE_AFRICA</p>
              <p>FEMALE_ALGERIA</p>
              <p>FEMALE_CAMEROON</p>
              <p>FEMALE_CONGO</p>
              <p>FEMALE_COTE_DIVOIRE</p>
              <p>FEMALE_EGYPT</p>
              <p>FEMALE_ERITREA</p>
              <p>FEMALE_ETHIOPIA</p>
              <p>FEMALE_MOROCCO</p>
              <p>FEMALE_NIGERIA</p>
              <p>FEMALE_SOMALIA</p>
              <p>FEMALE_SOUTH_AFRICA</p>
              <p>FEMALE_TUNISIA</p>
              <p>FEMALE_OTHER_AFRICA</p>
              <p>FEMALE_ASIA</p>
              <p>FEMALE_AFGHANISTAN</p>
              <p>FEMALE_BANGLADESH</p>
              <p>FEMALE_CHINA</p>
              <p>FEMALE_HONG_KONG</p>
              <p>FEMALE_INDIA</p>
              <p>FEMALE_IRAN</p>
              <p>FEMALE_IRAQ</p>
              <p>FEMALE_ISRAEL</p>
              <p>FEMALE_JAPAN</p>
              <p>FEMALE_KOREA_SOUTH</p>
              <p>FEMALE_LEBANON</p>
              <p>FEMALE_NEPAL</p>
              <p>FEMALE_PAKISTAN</p>
              <p>FEMALE_PHILIPPINES</p>
              <p>FEMALE_SAUDI_ARABIA</p>
              <p>FEMALE_SRI_LANKA</p>
              <p>FEMALE_SYRIA</p>
              <p>FEMALE_TAIWAN</p>
              <p>FEMALE_TURKEY</p>
              <p>FEMALE_UNITED_ARAB_EMIRATES</p>
              <p>FEMALE_VIET_NAM</p>
              <p>FEMALE_OTHER_ASIA</p>
              <p>FEMALE_OCEANIA_AND_OTHER</p>
              <p>FEMALE_AUSTRALIA</p>
              <p>FEMALE_OTHER_PL_OF_BIR</p>

              <h4>Education</h4>

              <p>TOTAL_AGE15OVER_PRIV_HH_25</p>
              <p>TOTAL_AGE15OVER_NONE</p>
              <p>TOTAL_AGE15OVER_HIGHSC_DIPL</p>
              <p>TOTAL_AGE15OVER_POSTSEC</p>
              <p>TOTAL_AGE15OVER_APPR_TRADE</p>
              <p>TOTAL_AGE15OVER_TRADES</p>
              <p>TOTAL_AGE15OVER_APPRENTICE</p>
              <p>TOTAL_AGE15OVER_COLLEGE</p>
              <p>TOTAL_AGE15OVER_UNI_BELOW_BA</p>
              <p>TOTAL_AGE15OVER_UNI_BA_ABOV</p>
              <p>TOTAL_AGE15OVER_BA</p>
              <p>TOTAL_AGE15OVER_ABOVE_BA</p>
              <p>TOTAL_AGE15OVER_MED</p>
              <p>TOTAL_AGE15OVER_MASTERS</p>
              <p>TOTAL_AGE15OVER_DOCTORATE</p>
              <p>TOTAL_AGE25TO64_PRIV_HH_25</p>
              <p>TOTAL_AGE25TO64_NONE</p>
              <p>TOTAL_AGE25TO64_HIGHSC_DIPL</p>
              <p>TOTAL_AGE25TO64_POSTSEC</p>
              <p>TOTAL_AGE25TO64_APPR_TRADE</p>
              <p>TOTAL_AGE25TO64_TRADES</p>
              <p>TOTAL_AGE25TO64_APPRENTICE</p>
              <p>TOTAL_AGE25TO64_COLLEGE</p>
              <p>TOTAL_AGE25TO64_UNI_BELOW_BA</p>
              <p>TOTAL_AGE25TO64_UNI_BA_ABOVE</p>
              <p>TOTAL_AGE25TO64_BA</p>
              <p>TOTAL_AGE25TO64_ABOVE_BA</p>
              <p>TOTAL_AGE25TO64_MED</p>
              <p>TOTAL_AGE25TO64_MASTERS</p>
              <p>TOTAL_AGE25TO64_DOCTORATE</p>
              <p>T_MALE_AGE15OVER_PRIV_HH_25</p>
              <p>MALE_AGE15OVER_NONE</p>
              <p>MALE_AGE15OVER_HIGHSC_DIPL</p>
              <p>MALE_AGE15OVER_POSTSEC</p>
              <p>MALE_AGE15OVER_APPR_TRADE</p>
              <p>MALE_AGE15OVER_TRADES</p>
              <p>MALE_AGE15OVER_APPRENTICE</p>
              <p>MALE_AGE15OVER_COLLEGE</p>
              <p>MALE_AGE15OVER_UNI_BELOW_BA</p>
              <p>MALE_AGE15OVER_UNI_BA_ABOVE</p>
              <p>MALE_AGE15OVER_BA</p>
              <p>MALE_AGE15OVER_ABOVE_BA</p>
              <p>MALE_AGE15OVER_MED</p>
              <p>MALE_AGE15OVER_MASTERS</p>
              <p>MALE_AGE15OVER_DOCTORATE</p>
              <p>T_MALE_AGE25TO64_PRIV_HH_25</p>
              <p>MALE_AGE25TO64_NONE</p>
              <p>MALE_AGE25TO64_HIGHSC_DIPL</p>
              <p>MALE_AGE25TO64_POSTSEC</p>
              <p>MALE_AGE25TO64_APPR_TRADE</p>
              <p>MALE_AGE25TO64_TRADES</p>
              <p>MALE_AGE25TO64_APPRENTICE</p>
              <p>MALE_AGE25TO64_COLLEGE</p>
              <p>MALE_AGE25TO64_UNI_BELOW_BA</p>
              <p>MALE_AGE25TO64_UNI_BA_ABOVE</p>
              <p>MALE_AGE25TO64_BA</p>
              <p>MALE_AGE25TO64_ABOVE_BA</p>
              <p>MALE_AGE25TO64_MED</p>
              <p>MALE_AGE25TO64_MASTERS</p>
              <p>MALE_AGE25TO64_DOCTORATE</p>
              <p>T_FEMALE_AGE15OVER_PRIV_HH_25</p>
              <p>FEMALE_AGE15OVER_NONE</p>
              <p>FEMALE_AGE15OVER_HIGHSC_DIPL</p>
              <p>FEMALE_AGE15OVER_POSTSEC</p>
              <p>FEMALE_AGE15OVER_APPR_TRADE</p>
              <p>FEMALE_AGE15OVER_TRADES</p>
              <p>FEMALE_AGE15OVER_APPRENTICE</p>
              <p>FEMALE_AGE15OVER_COLLEGE</p>
              <p>FEMALE_AGE15OVER_UNI_BELOW_BA</p>
              <p>FEMALE_AGE15OVER_UNI_BA_ABOVE</p>
              <p>FEMALE_AGE15OVER_BA</p>
              <p>FEMALE_AGE15OVER_ABOVE_BA</p>
              <p>FEMALE_AGE15OVER_MED</p>
              <p>FEMALE_AGE15OVER_MASTERS</p>
              <p>FEMALE_AGE15OVER_DOCTORATE</p>
              <p>T_FEMALE_AGE25TO64_PRIV_HH_25</p>
              <p>FEMALE_AGE25TO64_NONE</p>
              <p>FEMALE_AGE25TO64_HIGHSC_DIPL</p>
              <p>FEMALE_AGE25TO64_POSTSEC</p>
              <p>FEMALE_AGE25TO64_APPR_TRADE</p>
              <p>FEMALE_AGE25TO64_TRADES</p>
              <p>FEMALE_AGE25TO64_APPRENTICE</p>
              <p>FEMALE_AGE25TO64_COLLEGE</p>
              <p>FEMALE_AGE25TO64_UNI_BELOW_BA</p>
              <p>FEMALE_AGE25TO64_UNI_BA_ABOVE</p>
              <p>FEMALE_AGE25TO64_BA</p>
              <p>FEMALE_AGE25TO64_ABOVE_BA</p>
              <p>FEMALE_AGE25TO64_MED</p>
              <p>FEMALE_AGE25TO64_MASTERS</p>
              <p>FEMALE_AGE25TO64_DOCTORATE</p>

              <h4>Household Income</h4>

              <p>TOTAL_PRIV_HH_100</p>
              <p>MED_HH_TOTAL_INC</p>
              <p>MED_HH_AFTX_INC</p>
              <p>TOTAL_ONE_PER_PRIV_HH_100</p>
              <p>MED_ONE_PER_HH_TOTAL_INC</p>
              <p>MED_ONE_PER_HH_AFTX</p>
              <p>TOTAL_2PLUS_PER_PRIV_HH_100</p>
              <p>MED_2PLUS_PER_HH_TOTAL_INC</p>
              <p>MED_2PLUS_PER_HH_AFTX</p>
              <p>TOTAL_PRIV_HH_25</p>
              <p>AVG_HH_TOTAL_INC</p>
              <p>AVG_HH_AFTX_INC</p>
              <p>TOTAL_ONE_PER_PRIV_HH_25</p>
              <p>AVG_ONE_PER_HH_TOTAL_INC</p>
              <p>AVG_ONE_PER_HH_AFTX</p>
              <p>TOTAL_2PLUS_PER_PRIV_HH_25</p>
              <p>AVG_2PLUS_PER_HH_TOTAL_INC</p>
              <p>AVG_2PLUS_PER_HH_AFTX</p>
              <p>TOTAL_PRIV_HH_INC_100</p>
              <p>TOTAL_INC_UNDER_5000</p>
              <p>TOTAL_INC_5000_TO_9999</p>
              <p>TOTAL_INC_5000_TO_9999</p>
              <p>TOTAL_INC_10000_TO_14999</p>
              <p>TOTAL_INC_15000_TO_19999</p>
              <p>TOTAL_INC_20000_TO_24999</p>
              <p>TOTAL_INC_25000_TO_29999</p>
              <p>TOTAL_INC_30000_TO_34999</p>
              <p>TOTAL_INC_35000_TO_39999</p>
              <p>TOTAL_INC_40000_TO_44999</p>
              <p>TOTAL_INC_45000_TO_49999</p>
              <p>TOTAL_INC_50000_TO_59999</p>
              <p>TOTAL_INC_60000_TO_69999</p>
              <p>TOTAL_INC_70000_TO_79999</p>
              <p>TOTAL_INC_80000_TO_89999</p>
              <p>TOTAL_INC_90000_TO_99999</p>
              <p>TOTAL_INC_100000_AND_OVER</p>
              <p>TOTAL_INC_100000_TO_124999</p>
              <p>TOTAL_INC_125000_TO_149999</p>
              <p>TOTAL_INC_150000_TO_199999</p>
              <p>TOTAL_INC_200000_AND_OVER</p>
              <p>TOTAL_PRIV_HH_AFTX_100</p>
              <p>AFTX_INC_UNDER_5000</p>
              <p>AFTX_INC_5000_TO_9999</p>
              <p>AFTX_INC_10000_TO_14999</p>
              <p>AFTX_INC_15000_TO_19999</p>
              <p>AFTX_INC_20000_TO_24999</p>
              <p>AFTX_INC_25000_TO_29999</p>
              <p>AFTX_INC_30000_TO_34999</p>
              <p>AFTX_INC_35000_TO_39999</p>
              <p>AFTX_INC_40000_TO_44999</p>
              <p>AFTX_INC_45000_TO_49999</p>
              <p>AFTX_INC_50000_TO_59999</p>
              <p>AFTX_INC_60000_TO_69999</p>
              <p>AFTX_INC_70000_TO_79999</p>
              <p>AFTX_INC_80000_TO_89999</p>
              <p>AFTX_INC_90000_TO_99999</p>
              <p>AFTX_INC_100000_AND_OVER</p>
              <p>AFTX_INC_100000_TO_12499</p>
              <p>AFTX_INC_125000_TO_14999</p>
              <p>AFTX_INC_150000_AND_OVER</p>

              <h4>Household Type</h4>

              <p>TOTAL_PRIV_HH_BY_TYPE_100</p>
              <p>ONE_CENSUS_FAM_HH</p>
              <p>NO_CHILDREN_IN_CENSUS_FAM</p>
              <p>WITH_CHILDREN_IN_CENSUS_FAM</p>
              <p>MULTIPLE_CENSUS_FAM_HH</p>
              <p>NON_CENSUS_FAM_HH</p>
              <p>ONE_PERSON_HH</p>
              <p>TWO_OR_MORE_NON_CENSUS_FAM_HH</p>

              <h4>Labour Type</h4>

              <p>TOTAL_EMPLOYED</p>
              <p>TOTAL_UNEMPLOYED</p>
              <p>TOTAL_IN_LABOUR_FORCE</p>
              <p>TOTAL_NOT_IN_LABOUR_FORCE</p>
              <p>TOTAL_EMPLOYMENT_RATE</p>
              <p>TOTAL_PARTICIPATION_RATE</p>
              <p>TOTAL_POP_AGE15OVER_25</p>
              <p>TOTAL_UNEMPLOYMENT_RATE</p>
              <p>MALE_EMPLOYED</p>
              <p>MALE_UNEMPLOYED</p>
              <p>MALE_IN_LABOUR_FORCE</p>
              <p>MALE_NOT_IN_LABOUR_FORCE</p>
              <p>MALE_EMPLOYMENT_RATE</p>
              <p>MALE_PARTICIPATION_RATE</p>
              <p>T_MALE_POP_AGE15OVER_25</p>
              <p>MALE_UNEMPLOYMENT_RATE</p>
              <p>FEMALE_EMPLOYED</p>
              <p>FEMALE_UNEMPLOYED</p>
              <p>FEMALE_IN_LABOUR_FORCE</p>
              <p>FEMALE_IN_LABOUR_FORCE</p>
              <p>FEMALE_NOT_IN_LABOUR_FORCE</p>
              <p>FEMALE_EMPLOYMENT_RATE</p>
              <p>FEMALE_PARTICIPATION_RATE</p>
              <p>T_FEMALE_POP_AGE15OVER_25</p>
              <p>FEMALE_UNEMPLOYMENT_RATE</p>

              <h4>Marital Status</h4>

              <p>TOTAL_POP_AGE15OVER_100</p>
              <p>TOTAL_MARRIED_COMMONLAW</p>
              <p>TOTAL_MARRIED</p>
              <p>TOTAL_COMMONLAW</p>
              <p>TOTAL_NOT_MARRIED_COMMONLAW</p>
              <p>TOTAL_NEVER_MARRIED</p>
              <p>TOTAL_SEPARATED</p>
              <p>TOTAL_DIVORCED</p>
              <p>TOTAL_WIDOWED</p>
              <p>T_MALE_POP_AGE15OVER_100</p>
              <p>MALE_MARRIED_COMMONLAW</p>
              <p>MALE_MARRIED</p>
              <p>MALE_COMMONLAW</p>
              <p>MALE_NOT_MARRIED_COMMONLAW</p>
              <p>MALE_NEVER_MARRIED</p>
              <p>MALE_SEPARATED</p>
              <p>MALE_DIVORCED</p>
              <p>MALE_WIDOWED</p>
              <p>T_FEMALE_POP_AGE15OVER_100</p>
              <p>FEMALE_MARRIED_COMMONLAW</p>
              <p>FEMALE_MARRIED</p>
              <p>FEMALE_COMMONLAW</p>
              <p>FEMALE_NOT_MARRIED_COMMONLAW</p>
              <p>FEMALE_NEVER_MARRIED</p>
              <p>FEMALE_SEPARATED</p>
              <p>FEMALE_DIVORCED</p>
              <p>FEMALE_WIDOWED</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
