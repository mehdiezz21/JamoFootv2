import { Box, Flex, SkeletonText } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { myApi } from "../../api/api";

const center = { lat: 48.8413634, lng: 2.2530693 };

const locations = [
  { id: 512, position: { lat: 44.8397312, lng: -0.5177344 } },
  { id: 516, position: { lat: 43.269835, lng: 5.3959117 } },
  { id: 518, position: { lat: 43.61092, lng: 3.87723 } },
  { id: 521, position: { lat: 50.5994098, lng: 3.2530917 } },
  { id: 522, position: { lat: 43.7255763, lng: 7.2550422 } },
  { id: 523, position: { lat: 45.7238922, lng: 4.8289412 } },
  { id: 524, position: { lat: 48.8413634, lng: 2.2530693 } },
  { id: 525, position: { lat: 47.89944, lng: -3.26167 } },
  { id: 526, position: { lat: 44.8775606, lng: -0.6726819 } },
  { id: 527, position: { lat: 45.4856987, lng: 4.37873983383 } },
  { id: 529, position: { lat: 48.16667, lng: -1.66667 } },
  { id: 531, position: { lat: 48.3149366, lng: 4.1075504 } },
  { id: 532, position: { lat: 47.4510362, lng: -0.5607709 } },
  { id: 541, position: { lat: 45.8116734, lng: 3.1136619 } },
  { id: 543, position: { lat: 47.2611609, lng: -1.5415323 } },
  { id: 545, position: { lat: 49.11911, lng: 6.17269 } },
  { id: 546, position: { lat: 50.4063722, lng: 2.8439543 } },
  { id: 547, position: { lat: 49.2319361, lng: 4.0825414 } },
  { id: 548, position: { lat: 43.7333, lng: 7.4 } },
  { id: 576, position: { lat: 48.5601974, lng: 7.7533525 } },
]



function Map() {
  let navigate = useNavigate();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCW8Rte4o_qXc2eqbLNqCFUU1t01JM6AhM",
    libraries: ["places"],
  });
  const [teams, setTeams] = useState();
  const [loading, setLoading] = useState(true);


  const getEquipe = async () => {
    const data = await myApi.getTeamsFromCompetition(2015);
    setTeams(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    getEquipe();
  }, [])

  console.log(teams)

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }


  const routeChange = (path) => {
    navigate(path);
  };

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        <GoogleMap
          center={center}
          clickableIcons={false}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center} onDblClick={() => routeChange('/')} />
          <MarkerClusterer>
          {(clusterer) =>
            locations.map((location) => (
              <Marker
                key={Math.random()}
                position={location.position} 
                clusterer={clusterer}
                onClick={() => routeChange(`/team/${location.id}`)}
              />
            ))
          }
        </MarkerClusterer>
        </GoogleMap>
      </Box>
    </Flex>
  );
}

export default Map;
